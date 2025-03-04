import { createBrowserRouter } from "react-router-dom";
import Main_layout from "../Layout/Main_layout";
import Home from "../Components/Home";
import Details from "../Components/Details";
import Add_coffee from "../Components/Add_coffee";
import Update_coffee from "../Components/Update_coffee";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Users from "../Components/Users";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Main_layout></Main_layout>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>,
                        loader: () => fetch('https://coffee-store-server-jade-nine.vercel.app/coffee')
                  },
                  {
                        path: '/details/:id',
                        element: <Details></Details>,
                        loader: () => fetch('https://coffee-store-server-jade-nine.vercel.app/coffee')
                  },
                  {
                        path: '/add_coffee',
                        element: <Add_coffee></Add_coffee>
                  },
                  {
                        path: '/update_coffee/:id',
                        element: <Update_coffee></Update_coffee>,
                        loader: ({ params }) => fetch(`https://coffee-store-server-jade-nine.vercel.app/coffee/${params.id}`)
                  },
                  {
                        path: '/signin',
                        element: <SignIn></SignIn>
                  },
                  {
                        path: '/signup',
                        element: <SignUp></SignUp>
                  },
                  {
                        path: '/users',
                        element: <Users></Users>,
                        loader: () => fetch('https://coffee-store-server-jade-nine.vercel.app/users')
                  }
            ]
      }
]);

export default router;