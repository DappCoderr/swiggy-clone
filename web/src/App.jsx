/* eslint-disable react/prop-types */
import "./App.css";
import { lazy, Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ResMenu from "./components/ResMenu";
const RestaurentList = lazy(() => import("./components/RestaurentList"));
const Offer = lazy(() => import("./components/Offer"));
const SignIn = lazy(() => import("./components/SignIn"));
const Help = lazy(() => import("./components/Help"));
const Error = lazy(() => import("./components/Error"));
const Header = lazy(() => import("./components/Header"));

const App = () => {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <Header />
      </Suspense>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={"Loading..."}>
            <RestaurentList />
          </Suspense>
        ),
      },
      {
        path: "/offer",
        element: (
          <Suspense fallback={"Loading..."}>
            <Offer />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={"Loading..."}>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/signIn",
        element: (
          <Suspense fallback={"Loading..."}>
            <SignIn />
          </Suspense>
        ),
      },
      { path: "/restarants/:resId", element: <ResMenu /> },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
