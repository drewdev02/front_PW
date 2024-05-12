import {MenuOptions} from "../../types.ts";
import {useEffect, useState} from "react";

export interface Props {
    opciones?: Array<MenuOptions>;
}

function Menu({opciones}: Props) {
    const [op, setOp] = useState<Array<MenuOptions>>();
    useEffect(() => {
        if (opciones) {
            setOp(opciones);
        }
    }, [opciones])

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white justify-center items-center">
            <div className="text-2xl mb-4">Menú Principal</div>
            <div className="bg-gray-900 text-white py-4 px-8 flex-grow flex justify-center items-center">
                <ul className="flex flex-col items-start space-y-4">
                    {op?.map(opcion => (
                        <li key={opcion.id} className="border border-gray-700 rounded-md p-3">
                            <a
                                href={opcion.link}
                                className="hover:text-gray-300 transition duration-300 text-lg"
                            >
                                {opcion.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );


}


export default Menu;
