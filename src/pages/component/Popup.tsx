export interface Props {
    isOpen: boolean;
    title: string
    body: string
    onClose: () => void;
}

function Popup({isOpen, title, body, onClose}: Props) {
    return (
        isOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p>{body}</p>
                    <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                        Cerrar
                    </button>
                </div>
            </div>
        )
    );
}

export default Popup;
