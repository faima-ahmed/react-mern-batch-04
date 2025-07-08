import { createRoot } from "react-dom/client";
import "./index.css";
import {RouterProvider} from 'react-router';
import { rootRouter } from "./router/router";


createRoot(document.getElementById("root")).render(
  <RouterProvider router={rootRouter}/>
);

{
  /* <App /> */
}

// react Dom  -> Main DOM -> React Code / Component

// 'use strict'

// export default function addAbc(a, b) {
// 	return a + b;
// }

// // import

// export const add = (a, b) => {
// 	return a + b;
// };
