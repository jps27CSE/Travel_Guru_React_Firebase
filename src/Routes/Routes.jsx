import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import BookingItem from "../components/BookingItem/BookingItem";
import PrivateRoute from "./PrivateRoute";
import AuthRouteGuard from "./AuthRouteGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: (
          <AuthRouteGuard>
            <Login />,
          </AuthRouteGuard>
        ),
      },
      {
        path: "/register",
        element: (
          <AuthRouteGuard>
            <Register />
          </AuthRouteGuard>
        ),
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <BookingItem />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
