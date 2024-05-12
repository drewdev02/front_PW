import React from 'react'
import ReactDOM from 'react-dom/client'
import './input.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import AuthForm from "./pages/login.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthForm/>,
    },
    {
        path: "/users",
        element: <h1>Users</h1>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
