import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Technologies from "./components/Technologies";
import UserDashBoard from "./components/UserDashBoard";
import Java from "./components/Java";
import Nodejs from "./components/Nodejs";
import Vue from "./components/Vue";
import UsersList from "./components/UsersList";

function App() {
  //create browser router obj
  const browserRouterObject = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path:"/users",
          element:<UsersList />
        },
        {
          path: "/technologies",
          element: <Technologies />,
          children:[
            {
              path:'java',
              element:<Java />
            },
            {
              path:'nodejs',
              element:<Nodejs />
            },
            {
              path:'vue',
              element:<Vue />
            }
          ]
        },
        {
          path:'/user-profile/:username',
          element:<UserDashBoard />
        }
      ],
    },
  ]);

  //return a react element
  return <RouterProvider router={browserRouterObject} />;
}

export default App;
