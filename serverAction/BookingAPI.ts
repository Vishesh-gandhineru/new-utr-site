"use server"

import { get, post } from "@/utils/GlobalAxiosFunction";

export const checkAvailability = async (body : object) => {
    try {
        const response = await post(`/booking/availablity` , {body});
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


  
export const createBooking = async (body : object) => {
    try {
        const response = await post(`/booking/create` , {body});
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const getPaymentLink = async (bookingId : number) => {
    try {
        const response = await post(`/booking/payment` , {bookingId});
        return response.data;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}