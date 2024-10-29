import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/img/user.png'
import duvidas from '../assets/img/duvidas.png'
import '../assets/styles/user.css'

const User = () => {
  return (
    <div className="user-container">
      <div className="user-avatar">
        <img src={user} alt="Avatar" />
        <h1>Victor Américo</h1>
        <p>CEO - ComunicaBelém</p>
      </div>


      <div className="user-info-card">
        <div className="info-row">
          <div className="info-item" data-label="Nome Completo">
            Victor Américo Sousa Araújo Rodrigues
          </div>
          <div className="info-item" data-label="Data de Aniversário">
            26/09/2002
          </div>
          <div className="info-item" data-label="Número p/ contato">
            (91) 98995-8771
          </div>
        </div>
        <div className="info-row">
          <div className="info-item" data-label="Endereço (Rua, Número)">
            Travessa Mauriti 1006, apto 1101
          </div>
          <div className="info-item" data-label="CEP">
            66080-650
          </div>
          <div className="info-item" data-label="Cidade/UF">
            Belém, PA
          </div>
        </div>
      </div>

      <div className="duvidas-card">
          <img src={duvidas} alt="Dúvidas" />
          <p>
            Tem alguma dúvida sobre o site? <Link to="/help">Clique aqui</Link>
          </p>
      </div>
      <div className="process-container">
        <h2>Seus Processos</h2>
        <div className="progress">
          <div className="progress-bar red">Abertos: 111</div>
          <div className="progress-bar blue">Finalizados: 26</div>
        </div>
      </div>
    </div>
  );
};

export default User;
