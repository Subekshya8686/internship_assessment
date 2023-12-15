import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Login from "./pages/Login.tsx";
import ListPage from "./pages/ListPage.tsx";
// import ReactDOM from "react-dom/client";
// import React from "react";
// import User_Login from "./pages/new.tsx";


const router=createBrowserRouter(
    [
            {
                path:"/",
                element:<Login/>
            },
        {
            path:"/list",
            element:<ListPage/>
        }
        ]
    )

function App() {
        return (
            <>
                <RouterProvider router={router} />
            </>
        );
    }
export default App;
