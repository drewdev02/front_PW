import {SetStateAction} from "react";

export type Data = {
    id: string;
    label: string;
    value: string;
    onChange: (event: { target: { value: SetStateAction<string> } }) => void;
}
export type MenuOptions = {
    id: string
    label: string;
    link: string;
}
export type Direccion = {
    provincia: string,
    municipio: string,
    calle: string,
    numero: string
}
