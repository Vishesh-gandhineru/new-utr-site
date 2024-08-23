"use server";

import { get, post } from "@/utils/GlobalAxiosFunction";

export const checkAvailability = async (body: object) => {
  try {
    const response = await post(`/booking/availablity`,  body );
    return response.data;
  } catch (error : any) {
    console.error(error);
    if (error?.response.status === 400 || error?.response.status === 401 || error?.response.status === 500 || error?.response.status === 409) {
      return error?.response.data;
    }
    throw error;
  }
};

export const createBooking = async (body: object) => {
  try {
    const response = await post(`/booking/create`, { body });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPaymentLink = async (bookingId: number) => {
  try {
    const response = await post(`/booking/payment`, { bookingId });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const fetchAllBookings = async () => {
  try {
    const response = await get(`/booking`);
    return response.data;
  } catch (error : any) {
    if (error?.response.status === 400 || error?.response.status === 401 || error?.response.status === 500 || error?.response.status === 409) {
      return error?.response.data;
    }
    throw error;
  }
}

export const fetchBookingById = async (bookingId: number) => {
  try {
    const response = await get(`/booking/${bookingId}`);
    return response.data;
  } catch (error : any) {
    if (error?.response.status === 400 || error?.response.status === 401 || error?.response.status === 500 || error?.response.status === 409) {
      return error?.response.data;
    }
    throw error;
  }
}