import React from "react";
import { Outlet } from "react-router-dom";
type Props = {};

function AuthLayout({}: Props) {
  return <Outlet />;
}

export default AuthLayout;
