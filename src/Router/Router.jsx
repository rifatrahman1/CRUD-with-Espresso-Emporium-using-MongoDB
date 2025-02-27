import { createBrowserRouter } from "react-router-dom";
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
                        loader: () => fetch('http://localhost:5000/coffee')
                  },
                  {
                        path: '/details/:id',
                        element: <Details></Details>,
                        loader: () => fetch('http://localhost:5000/coffee')
                  },
                  {
                        path: '/add_coffee',
                        element: <Add_coffee></Add_coffee>
                  },
                  {
                        path: '/update_coffee/:id',
                        element: <Update_coffee></Update_coffee>,
                        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
                        // loader: () => fetch('http://localhost:5000/coffee/67bf6067cf4df7a6e283c210')
                  }
            ]
      }
]);

export default router;