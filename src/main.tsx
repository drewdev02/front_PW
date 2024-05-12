import React from 'react'
import ReactDOM from 'react-dom/client'
import './input.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import AuthForm from "./pages/login.tsx";
import Trabajador from "./pages/trabajador.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthForm/>,
    },
    {
        path: "/trabajador",
        element: <Trabajador/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
