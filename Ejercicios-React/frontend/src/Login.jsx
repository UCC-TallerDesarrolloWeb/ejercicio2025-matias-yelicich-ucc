import { useState } from 'react'
import "./styles/login.css"

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const handlerLogin = async (e) => {
        e.preventDefault();

        if(usuario=="admin" && password=="admin") {
            console.log("Login OK");
        } else {
            console.log("Login ERROR");
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handlerLogin}>
                <h2>Iniciar Sesión</h2>
                <label htmlFor="user">Usuario:</label>
                <input 
                    id="user"
                    type="text" 
                    placeholder="Usuario" 
                    value={usuario} 
                    onChange={(e) => setUsuario(e.target.value)} 
                    required
                />
                <label htmlFor="pass">Contraseña:</label>
                <input 
                    id="pass"
                    type="text"
                    placeholder="Constraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Login;