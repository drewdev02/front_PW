import {useState} from 'react';
import axios, {HttpStatusCode} from "axios";
import {loginUrl} from "../config.ts";
import {Data} from "../types.ts";
import CustomForm from "./component/customForm.tsx";

function AuthForm() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const data: Array<Data> = [
        {
            id: "username",
            label: "Usuario",
            value: user,
            onChange: e => setUser(e.target.value),
        },
        {
            id: "password",
            label: "Contraseña",
            value: pass,
            onChange: e => setPass(e.target.value),
        }

    ]

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const res = await axios.post(loginUrl, {
            username: user,
            password: pass,
        })
        console.debug(res)
        if (res.status === HttpStatusCode.Ok) {
            console.info("usuario autenticado correctamente");
        }
    };

    return (
        <CustomForm handleSubmit={handleSubmit} data={data}/>
    );
}

export default AuthForm;
