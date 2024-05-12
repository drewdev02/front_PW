export interface Props {
    label: string;
    id: string;
    value: string;
    onChange: (ation: any) => void;
}

function CustomInput({label, id, value, onChange}: Props) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block mb-2">{label}:</label>
            <input
                type="text"
                id={id}
                value={value}
                onChange={onChange}
                className={`w-full px-3 py-2 bg-gray-700 border rounded-lg text-white`}
            />
        </div>
    );
}

export default CustomInput;
