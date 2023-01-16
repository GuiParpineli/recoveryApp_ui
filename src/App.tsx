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
import {PlanDetails} from "./pages/PlanDetails";
import {Cadastros} from "./pages/Cadastros";
import {Agenda} from "./pages/Agenda";
import {Dashboard} from "./pages/Dashboard";

function App() {
    const [count, setCount] = useState(0)
    const router = createBrowserRouter(
        [
            {
                path: "",
                element: <Home/>,
                children: [
                    {
                        path: "",
                        element: <MainPage/>
                    },
                    {
                        path: "dashboard",
                        element: <Dashboard/>
                    },
                    {
                        path: "agenda",
                        element: <Agenda/>
                    },
                    {
                        path: "cadastros",
                        element: <Cadastros/>
                    },
                    {
                        path: "plandetails/:code",
                        element: <PlanDetails/>
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
