import Login from "../pages/Login";
import Main from "../pages/Main";

const routesConfig = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/game",
    element: <Main />,
  },
];

export default routesConfig;
