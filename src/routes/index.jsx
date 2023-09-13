import { createBrowserRouter } from "react-router-dom";
import Login from '../pages/Login/index';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  }
]);

export default routes;