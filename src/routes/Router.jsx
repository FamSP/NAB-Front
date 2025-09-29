import { createBrowserRouter } from "react-router";
import Add from "../pages/Add";
import Update from "../pages/Update";
import Books from "../components/Book";
import Journal from "../pages/Journals";
import Comic from "../pages/Comics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/comic",
    element: <Journal />,
  },
  {
    path: "/journal",
    element: <Comic />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);
export default router;
