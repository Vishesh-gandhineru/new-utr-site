"use server";

import { get, post } from "@/utils/GlobalAxiosFunction";

export const getProperties = async (params: object) => {
  try {
    const response = await post("/property/search", params);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSinglePropertyBySlug = async (slug: string) => {
  try {
    const response = await get(`/property/${slug}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPropertiesByLocation = async (params: string) => {
  try {
    const response = await get(`/property/search/${params}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPropertyPolicies = async (slug: string) => {
  try {
    const response = await get(`/property/policy/${slug}`, {});
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPropertyRatePlan = async (slug: string) => {
  try {
    const response = await get(`/property/rateplan/${slug}`, {});
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPropertyCalendar = async (slug: string) => {
  try {
    const response = await get(`/calendar/${slug}`, {});
    return response.data;
  } catch (error:any) {
    console.error(error);
    if (error?.response.status === 400 || error?.response.status === 401 || error?.response.status === 500 || error?.response.status === 409 || error?.response.status === 404) {
      return error?.response.data;
    }
    throw error;
  }
};
