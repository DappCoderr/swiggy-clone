/* eslint-disable react/prop-types */
import "./App.css";
import Header from "./components/Header";
import RestaurentList from "./components/RestaurentList";
import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import SignIn from "./components/SignIn";
import Offer from "./components/Offer";
import Help from "./components/Help";

const App = () => {
  return (
    <div>
      <Header />
      <RestaurentList />
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/offer", element: <Offer /> },
  { path: "/help", element: <Help /> },
  { path: "/signIn", element: <SignIn /> },
]);

export default appRouter;
