import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../components/BookDetails/BookDetails";
import ListedBooks from "../pages/ListedBooks/ListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },
      {
        path: "book-details/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "listed-books",
        loader: () => fetch("/booksData.json"),
        Component: ListedBooks,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
    // errorElement: <ErrorPage />,
  },
]);
