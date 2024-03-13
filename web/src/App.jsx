/* eslint-disable react/prop-types */
import "./App.css";
import Header from "./components/Header";
import RestaurentList from "./components/RestaurentList";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import SignIn from "./components/SignIn";
import Offer from "./components/Offer";
import Help from "./components/Help";
import ResMenu from "./components/ResMenu";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <RestaurentList /> },
      { path: "/offer", element: <Offer /> },
      { path: "/help", element: <Help /> },
      { path: "/signIn", element: <SignIn /> },
      { path: "/restarants/:resId", element: <ResMenu /> },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
