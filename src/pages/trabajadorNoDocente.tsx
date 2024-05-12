import {useState} from 'react';
import axios, {HttpStatusCode} from "axios";
import {registerUrl} from "../config.ts";

function TrabajadorNoDocente() {
    const [nombre, setNombre] = useState('');
    const [carneIdentidad, setCarneIdentidad] = useState('');
    const [provincia, setProvincia] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');
    const [nivelEscolaridad, setNivelEscolaridad] = useState('');
    const [ocupacion, setOcupacion] = useState('');

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
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="nombre" className="block mb-2">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border rounded-lg text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="carneIdentidad" className="block mb-2">Carné de Identidad:</label>
                    <input
                        type="text"
                        id="carneIdentidad"
                        value={carneIdentidad}
                        onChange={(e) => setCarneIdentidad(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border rounded-lg text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="provincia" className="block mb-2">Provincia:</label>
                    <input
                        type="text"
                        id="provincia"
                        value={provincia}
                        onChange={(e) => setProvincia(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border rounded-lg text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="municipio" className="block mb-2">Municipio:</label>
                    <input
                        type="text"
                        id="municipio"
                        value={municipio}
                        onChange={(e) => setMunicipio(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border rounded-lg text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="calle" className="block mb-2">Calle:</label>
                    <input
                        type="text"
                        id="calle"
                        value={calle}
                        onChange={(e) => setCalle(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border rounded-lg text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="numero" className="block mb-2">Número:</label>
                    <input
                        type="text"
                        id="numero"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border rounded-lg text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="NivelEscolaridad" className="block mb-2">Nivel Escolaridad:</label>
                    <input
                        type="text"
                        id="numero"
                        value={nivelEscolaridad}
                        onChange={(e) => setNivelEscolaridad(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border rounded-lg text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="Ocupacion" className="block mb-2">Ocupacion:</label>
                    <input
                        type="text"
                        id="numero"
                        value={ocupacion}
                        onChange={(e) => setOcupacion(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border rounded-lg text-white"
                    />
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg">Guardar
                    datos
                </button>
            </form>
        </div>
    );
}

export default TrabajadorNoDocente;
