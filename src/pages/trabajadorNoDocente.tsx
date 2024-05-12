import {useState} from 'react';
import axios, {HttpStatusCode} from "axios";
import {registerUrl} from "../config.ts";
import {Data} from "../types.ts";
import CustomForm from "./component/customForm.tsx";

function TrabajadorNoDocente() {
    const [nombre, setNombre] = useState('');
    const [carneIdentidad, setCarneIdentidad] = useState('');
    const [provincia, setProvincia] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');
    const [nivelEscolaridad, setNivelEscolaridad] = useState('');
    const [ocupacion, setOcupacion] = useState('');
    const data: Array<Data> = [
        {
            id: "nombre",
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
            id: "callee",
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
        {
            id: "NivelEscolaridad",
            label: "Nivel de Escolaridad",
            value: nivelEscolaridad,
            onChange: e => setNivelEscolaridad(e.target.value),
        },
        {
            id: "Ocupacion",
            label: "Ocupacion",
            value: ocupacion,
            onChange: e => setOcupacion(e.target.value),
        }
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
                nivelEscolaridad: nivelEscolaridad,
                ocupacion: ocupacion,
                tipo: "no_docente",
            }
        );
        console.debug(res);
        if (res.status === HttpStatusCode.Ok) {
            console.info("Trabajador no Docente creado correctamente")
        }
    }

    return (
        <CustomForm handleSubmit={handleSubmit} data={data}/>
    );
}

export default TrabajadorNoDocente;
