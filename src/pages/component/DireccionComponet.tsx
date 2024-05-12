import {Direccion} from "../../types.ts";

export interface Props {
    direcciones: Array<Direccion>
}

function DireccionComponet({direcciones}: Props) {

    return (
        <div className="mb-2">
            {direcciones.map((item, index) => (
                <div key={index}>
                    <span className="font-bold">{`Dirección ${index + 1}: `}</span>
                    {Object.keys(item).map(key => (
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        `${key}: ${item[key]}`
                    )).join(", ")}
                </div>
            ))}
        </div>
    );
}

export default DireccionComponet;
