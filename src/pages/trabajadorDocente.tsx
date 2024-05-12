import {useState} from 'react';
import axios, {HttpStatusCode} from "axios";
import {registerUrl} from "../config.ts";
import {Data} from "../types.ts";
import CustomForm from "./component/customForm.tsx";

function TrabajadorDocente() {
    const [nombre, setNombre] = useState('');
    const [carneIdentidad, setCarneIdentidad] = useState('');
    const [provincia, setProvincia] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');
    const [categoriaDocente, setcategoriaDocente] = useState('');
    const [categoriaCientifica, setCategoriaCientifica] = useState('');

    const data: Array<Data> = [
        {
            id: "nombre",
            label: "nombre",
            value: nombre,
            onChange: e => setNombre(e.target.value),
        },
        {
            id: "carneIdentidad",
            label: "carne de Identidad",
            value: carneIdentidad,
            onChange: e => setCarneIdentidad(e.target.value),
        },
        {
            id: "provincia",
            label: "provincia",
            value: provincia,
            onChange: e => setProvincia(e.target.value),
        },
        {
            id: "municipio",
            label: "municipio",
            value: municipio,
            onChange: e => setMunicipio(e.target.value),
        },
        {
            id: "callee",
            label: "calle",
            value: calle,
            onChange: e => setCalle(e.target.value),
        },
        {
            id: "numero",
            label: "numero",
            value: numero,
            onChange: e => setNumero(e.target.value),
        },
        {
            id: "categoriaDocente",
            label: "categoria Docente",
            value: categoriaDocente,
            onChange: e => setcategoriaDocente(e.target.value),
        },
        {
            id: "categoriaCientifica",
            label: "categoria Cientifica",
            value: categoriaCientifica,
            onChange: e => setCategoriaCientifica(e.target.value),
        },

    ]

    const handleSubmit = async (event: { preventDefault: () => void }) => {
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
                categoriaDocente: categoriaDocente,
                categoriaCientifica: categoriaCientifica,
                tipo: "docente",
            }
        );
        console.debug(res);
        if (res.status === HttpStatusCode.Ok) {
            console.info("Trabajador Docente creado correctamente")
        }
    }

    return (
        <CustomForm handleSubmit={handleSubmit} data={data}/>
    );
}

export default TrabajadorDocente;
