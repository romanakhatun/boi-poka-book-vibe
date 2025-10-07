import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../components/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("booksData.json"),
        Component: Home,
      },
      {
        path: "bookDetails/:id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
    // errorElement: <ErrorPage />,
  },
]);
