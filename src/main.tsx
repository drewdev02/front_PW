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
import ListaDatos from "./pages/component/ListaDatos.tsx";
import {trabajadorDocenteUrl, trabajadorNoDocenteUrl, trabajadorUrl} from "./config.ts";

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
        link: '/trabajadorDocente'
    },
    {
        id: 'trabajadornodocente',
        label: 'Crear trabajador no docente',
        link: '/trabajadorNoDocente'
    },
    {
        id: 'listar',
        label: 'listar trabajador',
        link: '/listarTrabajador'
    },
    {
        id: 'listardocente',
        label: 'listar trabajador docente',
        link: '/listarTrabajadorDocente'
    },
    {
        id: 'listarnodocente',
        label: 'listar trabajador no docente',
        link: '/listarTrabajadorNoDocente'
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
        path: "/trabajadorDocente",
        element: <TrabajadorDocente/>,
    },
    {
        path: "/trabajadorNoDocente",
        element: <TrabajadorNoDocente/>,
    },
    {
        path: "/listarTrabajador",
        element: <ListaDatos url={trabajadorUrl}/>
    },
    {
        path: "/listarTrabajadorDocente",
        element: <ListaDatos url={trabajadorDocenteUrl}/>
    },
    {
        path: "/listarTrabajadorNoDocente",
        element: <ListaDatos url={trabajadorNoDocenteUrl}/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
