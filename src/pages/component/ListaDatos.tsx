import {useEffect, useState} from "react";
import axios, {HttpStatusCode} from "axios";
import {trabajadorDocenteUrl} from "../../config.ts";
import DireccionComponet from "./DireccionComponet.tsx";


function ListaDatos() {
    const [data, setData] = useState<Array<any> | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(trabajadorDocenteUrl);
            if (res.status === HttpStatusCode.Ok) {
                console.debug("datos obtenidos correctamente")
                //console.debug(res, res)
                setData(res.data);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
            <div className="bg-gray-900 text-white py-4 px-8 flex-grow max-h-full overflow-y-auto">
                <h2 className="text-2xl mb-4">Lista de Datos</h2>
                <ul className="divide-y divide-gray-700">
                    {data?.map((dato, index) => (
                        <li key={index} className="py-4">
                            {Object.keys(dato).map((key, i) => (
                                <div key={i} className="mb-2">
              <span className="font-bold">{key === "direccion" ? 'Direcciones' : key}:
              </span>{Array.isArray(dato[key]) ? <DireccionComponet direcciones={dato[key]}/> : " " + dato[key]}
                                </div>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default ListaDatos;
