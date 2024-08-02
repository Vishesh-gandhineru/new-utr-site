"use server";

import { post } from "@/utils/GlobalAxiosFunction";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";


// Login with OTP API
export const LoginWithOTP = async (body: { phone: string | undefined, countryCode: string | undefined , role : string}) => {
  try {
    const response = await post("/user/generate-otp/login", body);
    return response;
  } catch (error : any) {
    console.error("Error in LoginWithOTP: ", error);
    if (error?.response.status === 400) {
      return error?.response.data;
    }
    throw error;
  }
};

// Verify OTP API
export const VerifyOTP = async (body: {phone: string | undefined , countryCode: string | undefined , otp : string , role : string }) => {
  try {
    const response = await post("/user/verify-otp/login", body);
    const accessToken = response.data.sessionId;
    cookies().set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 3), // 3 hours
      path: "/",
    });
    return response;
  } catch (error : any) {
    if(error?.response.status === 400 || error?.response.status === 401 || error?.response.status === 500){
      return error?.response.data;
    }
    throw error;
  }
};

// Register User API
export const RegisterUser = async (body: object , sessionId : string) => {
  const url = process.env.NEXT_PUBLIC_API_URL + "/user/register";
  try {
    const response = await axios.post(url,  body , {
      headers: {
        Authorization: `${sessionId}`,
        "X-API-Token": `${process.env.NEXT_PUBLIC_AIP_ACCESS_TOKEN}`,
      }
    });
    return response;
  } catch (error : any) {
    console.error("Error in RegisterUser: ", error);
    if(error?.response.status === 400){
      return error?.response.data;
    }
    throw error;
  }
};

// Generate OTP for Register API
export const GenerateOTPForRegister = async (body: { phone: string | undefined, countryCode: string | undefined }) => {
  try {
    const response = await post("/user/generate-otp/register", body );
    return response;
  } catch (error : any) {
    console.error("Error in GenerateOTPForRegister: ", error);
    if (error?.response.status === 400) {
      return error?.response.data;
    }
    throw error;
  }
};

// Verify OTP for Register API
export const VerifyOTPForRegister = async (body: {phone : string | undefined , countryCode : string | undefined , otp : string}) => {
  try {
    const response = await post("/user/verify-otp/register", body );
    const accessToken = response.data.sessionId;
    cookies().set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 3), // 3 hours
      path: "/",
    });
    if(accessToken){
      RegisterUser({
        "phone": response.data.phone,
        "countryCode": response.data.countryCode,
        "email": response.data.email,
        "firstName": response.data.firstName ,
        "lastName": response.data.lastName,
    } , accessToken)
    }
    return response;
  } catch (error : any) {
   console.error("Error in VerifyOTPForRegister: ", error);
   if (error?.response.status === 400) {
     return error?.response.data;}
    throw error;
  }
};

// this will not work as the sessionID is not available in the request header and the server will not be able to identify the user
export const logout = async (sessionID: string) => {
  try {
    const response = await post("/user/logout", { sessionID });
    return response;
  } catch (error) {
    console.error("Error in logout: ", error);
    throw error;
  }
};

// RefreshSession Token API

export const RefreshSessionToken = async (sessionID: string) => {
  try {
    const response = await post("/user/refresh?role=user", {});
    return response;
  } catch (error) {
    console.error("Error in RefreshSessionToken: ", error);
    throw error;
  }
};


export const getAcessToken = async () => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get("accessToken");
  
  if (!accessToken) {
    throw new Error("Access Token not found in cookies");
  }

return accessToken;
};
