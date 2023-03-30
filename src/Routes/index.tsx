import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

import AppLayout from "@/Layout/AppLayout";
import AuthLayout from "@/Layout/AuthLayout";

const Loader = () => <div>Loading...</div>;

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default function Router() {
  return useRoutes([
    {
      path: "/",

      element: <AppLayout />,
      children: [
        {
          path: "app",
          element: <Home />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);
}

const Home = Loadable(lazy(() => import("@/Pages/Home")));
const Login = Loadable(lazy(() => import("@/Pages/Auth/Login")));
const Register = Loadable(lazy(() => import("@/Pages/Auth/Register")));
