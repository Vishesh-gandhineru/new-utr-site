"use client";

import { Button } from "antd";
import React, { useEffect, useState } from "react";
import useAuthStore from "@/context/useAuthStore"; // Import the AuthStore type
import Link from "next/link";
import LoginCard from "../LoginComponents/LoginCard";
import { useLoginCardOpen } from "@/context/useLoginCard";

const LoginButton = () => {
  const { checkAuth, loading, userAuth } = useAuthStore();
  const {setIsOpen} = useLoginCardOpen();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div>
      {userAuth ? (
         <Link
         href="/dashboard"
         prefetch={true}
         className="inline-flex items-center justify-center rounded-full border border-orange px-6 py-2 text-orange transition-colors duration-300 hover:bg-orange hover:text-white"
       >
         Dashboard
       </Link>
      ) : (
        <button onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center rounded-full border border-orange px-6 py-2 text-orange transition-colors duration-300 hover:bg-orange hover:text-white"
        >
          Log in / Sign up
        </button>
      )}

 <LoginCard />
    </div>
  );
};

export default LoginButton;
