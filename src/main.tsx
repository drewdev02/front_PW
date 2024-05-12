import React from 'react'
import ReactDOM from 'react-dom/client'
import './input.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import AuthForm from "./pages/login.tsx";
import Trabajador from "./pages/trabajador.tsx";
import TrabajadorDocente from "./pages/trabajadorDocente.tsx";
import TrabajadorNoDocente from "./pages/trabajadorNoDocente.tsx";
import Menu from "./pages/component/menu.tsx";
import {MenuOptions} from "./types.ts";

const menuData: Array<MenuOptions> = [
    {
        id: 'login',
        label: 'Login',
        link: '/login'
    },
    {
        id: 'trabajador',
        label: 'Crear trabajador',
        link: '/trabajador'
    },
    {
        id: 'trabajadordocente',
        label: 'Crear trabajador docente',
        link: '/trabajadordocente'
    },
    {
        id: 'trabajadornodocente',
        label: 'Crear trabajador no docente',
        link: '/trabajadornodocente'
    }
]


const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu opciones={menuData}/>,
    },
    {
        path: "/login",
        element: <AuthForm/>,
    },
    {
        path: "/trabajador",
        element: <Trabajador/>,
    },
    {
        path: "/trabajadordocente",
        element: <TrabajadorDocente/>,
    }, {
        path: "/trabajadornodocente",
        element: <TrabajadorNoDocente/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
