import React, {useState} from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {UserDataProvider} from "./hooks/useUserData";
import {CalendarProvider} from "./hooks/useCalendar";
import {TokenProvider} from "./hooks/useToken";
import {MonthProvider} from "./hooks/useMonth";
import {Login} from "./pages/Login";
import {MainPage} from "./pages/MainPage";

function App() {
    const [count, setCount] = useState(0)
    const router = createBrowserRouter(
        [
            {
                path: "",
                element: <Home/>,
                children: [
                    {
                        path:"",
                        element:<MainPage/>
                    }
                ]
            },
            {
                path: "login",
                element: <Login/>
            }
        ]
    )

    return (
        <UserDataProvider>
            <CalendarProvider>
                <MonthProvider>
                    <TokenProvider>
                        <RouterProvider router={router}/>
                    </TokenProvider>
                </MonthProvider>
            </CalendarProvider>
        </UserDataProvider>
    )
}

export default App
