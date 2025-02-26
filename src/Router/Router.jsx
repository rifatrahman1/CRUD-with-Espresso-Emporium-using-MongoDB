import { createBrowserRouter, useParams } from "react-router-dom";
import Main_layout from "../Layout/Main_layout";
import Home from "../Components/Home";
import Details from "../Components/Details";
import Add_coffee from "../Components/Add_coffee";
import Update_coffee from "../Components/Update_coffee";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Main_layout></Main_layout>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>,
                        loader: () => fetch('../coffee.json')
                  },
                  {
                        path: '/details/:id',
                        element: <Details></Details>,
                        loader: () => fetch('../coffee.json')
                  },
                  {
                        path: '/add_coffee',
                        element: <Add_coffee></Add_coffee>
                  },
                  {
                        path: '/update_coffee',
                        element: <Update_coffee></Update_coffee>
                  }
            ]
      }
]);

export default router;