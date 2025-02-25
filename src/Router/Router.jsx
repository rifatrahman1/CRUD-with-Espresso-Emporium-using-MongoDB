import { createBrowserRouter } from "react-router-dom";
import Main_layout from "../Layout/Main_layout";
import Home from "../Components/Home";
import Details from "../Components/Details";
import Add_coffee from "../Components/Add_coffee";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Main_layout></Main_layout>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/details',
                        element: <Details></Details>
                  },
                  {
                        path: '/add_coffee',
                        element: <Add_coffee></Add_coffee>
                  }
            ]
      }
]);

export default router;