import {useState} from 'react';
import axios, {HttpStatusCode} from "axios";
import {loginUrl} from "../config.ts";
import {Data} from "../types.ts";
import CustomForm from "./component/customForm.tsx";
import Popup from "./component/Popup.tsx";

function AuthForm() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
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
        try {
            const res = await axios.post(loginUrl, {
                username: user,
                password: pass,
            })
            console.debug(res)
            if (res.status === HttpStatusCode.Ok) {
                setMostrarPopup(true);
                setPopupMessage("Tu registro ha sido completado exitosamente")
                console.info("usuario autenticado correctamente");
            }
        } catch (e) {
            console.error(e)
            setMostrarPopup(true);
            setPopupMessage("Error al autenticar usuario")
        }
    };
    const handleClosePopup = () => {
        // Cerrar el popup
        setMostrarPopup(false);
    };

    return (
        <>
            <CustomForm handleSubmit={handleSubmit} data={data}/>
            <Popup
                isOpen={mostrarPopup}
                title={"Registro"}
                body={popupMessage}
                onClose={handleClosePopup}/>
        </>
    );
}

export default AuthForm;
