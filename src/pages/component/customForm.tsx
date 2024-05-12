import CustomInput from "./CustomInput.tsx";

export interface Props {
    handleSubmit: (event: { preventDefault: () => void; }) => void;
    data: Array<any>;

}


function CustomForm({handleSubmit, data}: Props) {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                {data.map(e => <CustomInput
                        id={e.id}
                        value={e.value}
                        label={e.label}
                        onChange={e.onChange}
                    />
                )}
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg">Guardar
                    datos
                </button>
            </form>
        </div>
    )
}

export default CustomForm;
