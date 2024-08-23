'use server'

import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-API-Token": `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`,
  },
});

axiosInstance.interceptors.request.use((config) => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle token refresh logic here if needed
    }
    return Promise.reject(error);
  },
);

export const get = async (url: string, params?: object) => {
  const response = await axiosInstance.get(url, { params });
  return response.data;
};

export const post = async (url: string, body: object) => {
  const response = await axiosInstance.post(url, body);
  return response.data;
};

export const put = async (url: string, body: object) => {
  const response = await axiosInstance.put(url, body);
  return response.data;
};