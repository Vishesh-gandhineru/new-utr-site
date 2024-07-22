"use server"

import { post } from "@/utils/GlobalAxiosFunction";


// Login with OTP API
export const LoginWithOTP = async (body : object) => {
    try {
        const response = await post('/user/generate-otp/login', {body} );
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Verify OTP API
export const VerifyOTP = async (body : object) => {
    try {
        const response = await post('/user/verify-otp/login', {body} );
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Register User API
export const RegisterUser = async (body : object) => {
    try {
        const response = await post('/user/register', {body} );
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Generate OTP for Register API
export const GenerateOTPForRegister = async (body : object) => {
    try {
        const response = await post('/user/generate-otp/register', {body} );
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


// Verify OTP for Register API
export const VerifyOTPForRegister = async (body : object) => {
    try {
        const response = await post('/user/verify-otp/register', {body} );
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// this will not work as the sessionID is not available in the request header and the server will not be able to identify the user
export const logout = async (sessionID : string) => {
    try {
        const response = await post('/user/logout', {sessionID});
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


// RefreshSession Token API

export const RefreshSessionToken = async (sessionID : string) => {
    try {
        const response = await post('/user/refresh?role=user' , {});
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}