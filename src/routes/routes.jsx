import { MainLayout } from "../layout";
import { HomePage} from "../pages";

export const routes = [
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "*",
        element: <h1>404 - Page Not Found</h1>,
      },
    ],
  },
];
