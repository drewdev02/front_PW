import {useState} from 'react';
import axios, {HttpStatusCode} from "axios";
import {registerUrl} from "../config.ts";
import CustomInput from "./component/CustomInput.tsx";

function Trabajador() {
    const [nombre, setNombre] = useState('');
    const [carneIdentidad, setCarneIdentidad] = useState('');
    const [provincia, setProvincia] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');

    const data = [
        {
            id: "nombre",
            label: "nombre",
            value: nombre,
            onChange: e => setNombre(e.target.value),
        },
        {
            id: "carneIdentidad",
            label: "carneIdentidad",
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
            id: "calle",
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
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                {data.map(e => <CustomInput
                        id={e.id}
                        value={e.value}
                        onChange={e.onChange}
                        label={e.label}
                    />
                )}
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg">Guardar
                    datos
                </button>
            </form>
        </div>
    );
}

export default Trabajador;
