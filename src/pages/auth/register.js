import React from "react";
import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";
import '../../assets/styles/auth.css';

const Register = () =>{
    return(
        <div className="login-container">

            <div className="login-logo">
                <img src={logo} alt="Logotipo" />
            </div>

            <div className="login-auth">
                <h1>Faça seu Registro!</h1>

                <label>CPF:</label>

                <input type="text" placeholder="Informe seu CPF" />

                <label>E-mail:</label>

                <input type="text" placeholder="Seu e-mail de trabalho" />

                <label>Senha:</label>

                <input type="text" placeholder="Digite sua senha" />

                <label>Confirme sua senha:</label>

                <input type="text" placeholder="Confirme sua senha" />

                <Link to="/dashboard" className="entrace-button">

                    Registre-se
                
                </Link>


                <p>Já tem conta? <Link to="/" className="entrace-opt">Faça seu login!</Link></p>

            </div>
        </div>
    );
}

export default Register;