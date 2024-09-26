import { RouteObject } from "react-router-dom";
import { APP_ROUTES } from "../config/config";


const Routes: RouteObject[] = [
  {
    path: "*",
    element: (
      <>
        <h1>Error 404</h1>
      </>
    ),
  },
  {
   
    children: [
      ...APP_ROUTES.MAIN.filter((route) => route.path !== "home"),
      ...APP_ROUTES.MAIN.filter((route) => route.path !== "picking"),
    ],
  },
];

export default Routes;
