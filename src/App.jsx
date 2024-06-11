import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";

import "react-toastify/dist/ReactToastify.css";
import Error404 from "./pages/404Page";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { fethWithTimeout } from "./utils/fetchWithTimeout";
import AdminPage from "./pages/Admin/AdminPage";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  const { themeMode } = useContext(ThemeContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/users",
          element: <UsersPage />,
          loader: async () => {
            const res = await fethWithTimeout(
              "https://jsonplaceholder.typicode.com/users",
              {},
              5000
            );
            const data = await res.json();
            return data;
          },
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/products/:productId",
          element: <ProductDetailsPage />,
        },
        {
          path: "/admin",
          element: <AdminPage />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <AdminPage />,
        },
      ],
    },
  ]);

  return (
    <div className={`app ${themeMode}`}>
      <div className=" container">
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
