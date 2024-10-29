import React from "react";
import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";
import '../../assets/styles/auth.css';

const Login = () =>{
    return(
        <div className="login-container">

            <div className="login-logo">
                <img src={logo} alt="Logotipo" />
            </div>

            <div className="login-auth">
                <h1>Faça seu Login!</h1>

                <label>E-mail:</label>

                <input type="text" placeholder="Seu e-mail cadastrado" />

                <label>Senha:</label>

                <input type="text" placeholder="Digite sua senha" />

                <Link to="/dashboard" className="entrace-button">

                        Entrar
                
                </Link>


                <p>Não tem cadastro? <Link to="/register" className="entrace-opt">Faça seu registro</Link></p>

            </div>
        </div>
    );
}

export default Login;