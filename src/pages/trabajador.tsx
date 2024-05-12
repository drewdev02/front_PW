import {useState} from 'react';
import axios, {HttpStatusCode} from "axios";
import {registerUrl} from "../config.ts";
import CustomForm from "./component/customForm.tsx";
import {Data} from "../types.ts";


function Trabajador() {
    const [nombre, setNombre] = useState('');
    const [carneIdentidad, setCarneIdentidad] = useState('');
    const [provincia, setProvincia] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');

    const data: Array<Data> = [
        {
            id: "ombre",
            label: "Nombre",
            value: nombre,
            onChange: e => setNombre(e.target.value),
        },
        {
            id: "carneIdentidad",
            label: "Carnet de Identidad",
            value: carneIdentidad,
            onChange: e => setCarneIdentidad(e.target.value),
        },
        {
            id: "provincia",
            label: "Provincia",
            value: provincia,
            onChange: e => setProvincia(e.target.value),
        },
        {
            id: "municipio",
            label: "Municipio",
            value: municipio,
            onChange: e => setMunicipio(e.target.value),
        },
        {
            id: "calle",
            label: "Calle",
            value: calle,
            onChange: e => setCalle(e.target.value),
        },
        {
            id: "numero",
            label: "Numero",
            value: numero,
            onChange: e => setNumero(e.target.value),
        },
    ]

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const res = await axios.post(registerUrl, {
                nombre: nombre,
                carneIdentidad: carneIdentidad,
                direccion: [
                    {
                        provincia: provincia,
                        municipio: municipio,
                        calle: calle,
                        numero: numero,
                    }
                ],
                tipo: "normal",
            }
        );
        console.debug(res);
        if (res.status === HttpStatusCode.Ok) {
            console.info("Trabajador creado correctamente")
        }
    }

    return (
        <CustomForm handleSubmit={handleSubmit} data={data}/>
    );
}

export default Trabajador;
