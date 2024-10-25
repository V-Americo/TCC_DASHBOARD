
import React from 'react';
import Card from '../assets/components/card';
import Graficos from '../assets/components/graficos';
import '../assets/styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h1>Análises De Solicitações</h1>
        <div className="cards-container">
          <Card />
          <div className='graficos-wrapper'>
            <div className="card-grafico">
              <Graficos title="Serviços Completos - Semana" type="line" />
            </div>
            <div className="card-grafico">
              <Graficos title="Serviços Completos - Mês" type="pie" />
            </div>
          </div>
        </div>
        <div className="card-grafico-barra">
          <Graficos title="Serviços Completos - Ano" type="bar" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
