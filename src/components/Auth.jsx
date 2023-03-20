"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGlobalContext } from "./context/App";
// import { verify } from "jsonwebtoken";

const Auth = (WrappedComponent) => {
  const AuthWrapper = (props) => {
    const router = useRouter();
    // const { user } = useGlobalContext();
    useEffect(() => {
      const user = window.localStorage.getItem("user");
      if (!user) {
        router.push("/register");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

export default Auth;
