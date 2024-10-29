import React from "react";
import Data from '../../assets/data/servicosData'
import '../../assets/styles/operador.css'
import operadorAvatar from '../../assets/img/user.png'
import { Link } from "react-router-dom";

const Operador = () =>{
    return(
        <div className="operador-container">
            <header>
                <div className="operador-header">
                    <img src={operadorAvatar} alt="operador" className="operador-avatar" /> 
                    <div className="operador-header-info">
                        <p className="operador-nome">Victor Américo</p>
                        <p className="operador-cargo">Cargo: Operador de Vazamentos</p>
                    </div>
                </div>
            </header>  

            <section className="operador-requisicoes">
                <h2>Requisições Pendentes</h2>
                <div className="op-tabs">
                    <button className="op-tab active">Pendentes</button>
                    <button className="op-tab">Abertos</button>
                    <button className="op-tab">Finalizados</button>
                </div>

                <div className="requisicoes-lista">
                    {Data.filter(item => item.status === 'Pendente').map((item, index) => (
                        <div key={index} className="requisicao-card"> 
                            <img src={item.fotos[0]} alt="Foto do servico" className="requisicao-img" />
                            <div className="requisicao-info">

                                <p><strong>Endereço:</strong> {item.endereco}</p>
                                <p><strong>Data:</strong> {item.data}</p>

                            </div>
                            <Link to={'/operadorServico'}>
                                <button className="acao-button">Visualizar Denúncia</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default Operador;