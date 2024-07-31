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

export const getPropertiesByFilter = async (params: object) => {
  try {
    const response = await post("/property/search", params);
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
    const response = await get(`/property/calendar/${slug}`, {});
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
