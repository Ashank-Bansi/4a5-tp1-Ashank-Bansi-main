import { useContext, useState } from "react";
import { AuthContext } from "../authContext/AuthContext";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom"; 


export default function LoginForm() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [enteredValues, setEnteredValues] = useState({
        username: "",
        password: "",
    });

    const authSubmitHandler = (event) => {
        event.preventDefault();
        console.log(enteredValues);
        setEnteredValues({
            username: "",
            password: "",
        });
        auth.login();
        navigate("/games")
    };

    return (
        <form onSubmit={authSubmitHandler}>
            <div className="control-row">
                <label htmlFor="username">Nom d'utilisateur:</label>
                <input 
                    id="username" 
                    name="username" 
                    type="text" 
                    placeholder="Entrez votre nom d'utilisateur" 
                    required
                />  
            </div>

            <div className="control no-margin">
                <label htmlFor="password">Mot de passe:</label>
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder="Entrez votre mot de passe" 
                    required
                />
            </div>

            <div className="form-actions">
                <button type="submit" className="login-button">Connexion</button>
            </div>
        </form>
    );
}
