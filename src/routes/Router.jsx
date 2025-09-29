import { createBrowserRouter } from "react-router";
import Add from "../pages/Add";
import Update from "../pages/Update";
import Books from "../components/Book";
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
    path: "/update/:id",
    element: <Update />,
  },
]);
export default router;
