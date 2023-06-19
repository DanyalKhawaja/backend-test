import React, { Component, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { Outlet, Navigate } from "react-router-dom";
import { Login } from "./Login";

axios.defaults.withCredentials = true;

export const PrivateRoutes = (props: any) => {
  const [component, setComponent] = useState<React.ReactElement | null>(null);
  debugger;
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/auth/verify")
      .then(() => {
        setComponent(<Outlet />);
      })
      .catch((e) => {
        setComponent(<Navigate to="/login" />);
      });
  }, []);

  return component;
};
