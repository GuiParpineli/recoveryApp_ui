import React, {useState} from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {UserDataProvider} from "./hooks/useUserData";
import {CalendarProvider} from "./hooks/useCalendar";
import {TokenProvider} from "./hooks/useToken";
import {MonthProvider} from "./hooks/useMonth";

function App() {
    const [count, setCount] = useState(0)
    const router = createBrowserRouter(
        [
            {
                path: "",
                element: <Home/>,
                children: []
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
