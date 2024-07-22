"use server"

import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-API-Token': `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`,
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // Handle token refresh logic here if needed
        }
        return Promise.reject(error);
    }
);

export const get = async (url : string, params?: object) => {
    try {
        const response = await axiosInstance.get(url, { params });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const post = async (url : string, body : object) => {
    try {
        const response = await axiosInstance.post(url, body);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const put = async (url : string, body : object) => {
    try {
        const response = await axiosInstance.put(url, body);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

