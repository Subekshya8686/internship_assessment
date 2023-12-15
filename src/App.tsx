import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Login from "./pages/Login.tsx";
import ListPage from "./pages/ListPage.tsx";

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
