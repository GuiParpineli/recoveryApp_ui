import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {DashBoard} from "./pages/DashBoard";
import {MainPage} from "./pages/MainPage";

function App() {
    const router = createBrowserRouter(
        [
            {
                path: "",
                element: <Home/>,
                children: [
                    {
                        path: "mainpage",
                        element: <MainPage/>
                    },
                    {
                        path: "dashboard",
                        element: <DashBoard/>
                    },
                ]
            },
            {
                path: "login",
                element: <Login/>
            }
        ]
    )
    return (
        <RouterProvider router={router}/>
    )
}

export default App
