import React from "react";
import Mapa from "../../assets/components/maps";
import '../../assets/styles/servicoAceito.css';
import Data from "../../assets/data/servicosData";
import { Link } from "react-router-dom";



const ServicoAceito = () =>{

   const item = Data[0]; // Pegando o primeiro item como exemplo

  return (
    <div className="srv-aceito-container">
        <div className="srv-aceito-header">
            <h2>Serviço <span>Pendente</span></h2>
            <p> <span>Requerente:</span> Victor Américo</p>
        </div>
        <h3>Localização do Serviço:</h3>
        <div className="mapa-info">
            <Mapa endereco={item.endereco} />
        </div>

        <div className="srv-aceito-descricao">
            <div className="srv-aceito-info"> 
                <h2><strong>Endereço</strong></h2>
                <p><strong>Local:</strong> {item.endereco}</p>
                <p><strong>Complemento:</strong> {item.complemento}</p>
                <p><strong>Referência:</strong> {item.referencia}</p>
            </div>
            <div className="srv-aceito-devolucao"> 
                <h2><span>Devolução</span> de Serviço</h2>
                <p>Envie a imagem do serviço completo para revisão</p>
                <input type="file" placeholder="Enviar imagem"  />
            </div>
            <Link to={'/servicoAceito'}>

                <button className="acao-button">
                    Enviar Para Revisão
                </button>

            </Link>
        </div>
    </div>
  );
}

export default ServicoAceito;