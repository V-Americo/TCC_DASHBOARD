import React from "react";
import '../../assets/styles/operadorServico.css'
import Data from "../../assets/data/servicosData";
import {Link} from 'react-router-dom'


const OperadorServico = () =>{
    return(
        <div className="op-servico-container">
            <div className="op-servico-header">
                <h2>Serviço <span>Pendente</span></h2>
                <p> <span>Requerente:</span> Nome de quem mandou o serviço</p>
            </div>

            <div className="servico-descricao">
                {Data.filter(item => item.status === 'Pendente').map((item, index) => (
                    <div key={index} className="servico-card"> 

                        <img src={item.fotos[0]} alt="Foto do Servico" className="servico-img"/>
                        <img src={item.fotos[1]} alt="Foto do Servico" className="servico-img"/>

                        <div className="servico-info"> 
                            <h2><strong>Endereço</strong></h2>
                            <h3><strong>Local:</strong> {item.endereco}</h3>
                            <p><strong>Complemento:</strong> {item.complemento}</p>
                            <p><strong>Referência:</strong> {item.referencia}</p>

                            <h2><strong>Descrição</strong></h2>
                            <p>{item.descricao}</p>
                        </div>
                    
                        <Link>

                            <button className="acao-button">
                                Aceitar Serviço
                            </button>
                        
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
}


export default OperadorServico;