import {useState} from 'react';

function AuthForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="username" className="block mb-2">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border rounded-lg text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border rounded-lg text-white"
                    />
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg">Iniciar
                    sesión
                </button>
            </form>
        </div>
    );
}

export default AuthForm;
