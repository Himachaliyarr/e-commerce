import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Product from "./pages/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/product",
    element: <Product />
  }
]);
 export default function App() {
  return (
    <RouterProvider router={router} />
  )
}