import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddedProductList from "../../Pages/AddedProductList/AddedProductList";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/allproducts",
        element: <AddedProductList />,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);
export default router;
