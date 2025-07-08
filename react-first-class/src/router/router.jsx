import { createBrowserRouter } from "react-router";
import App from "../pages/App";
import About from "../pages/About";

export const rootRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About/>},
]);
