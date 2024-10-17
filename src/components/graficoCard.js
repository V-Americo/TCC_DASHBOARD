import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend, ArcElement, layouts } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const GraficoCard = ({ title, type }) => {
  // Dados de exemplo para gráfico de linha
  const dadosLinha = {
    labels: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    datasets: [
      {
        label: 'Serviços Completos',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  // Dados de exemplo para gráfico de pizza
  const dadosPizza = {
    labels: ['Finalizados', 'Em Aberto', 'Pendentes'],
    datasets: [
      {
        label: 'Status dos Serviços',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const dadosBarra = {
    labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    datasets: [
      {
        label: 'Pendentes',
        data: [65, 56, 78, 62, 64, 71, 69, 66, 77, 80, 65, 52],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Finalizados',
        data: [44, 35, 56, 32, 44, 54, 52, 46, 63, 68, 47, 41],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div className="grafico-card">
      <h3>{title}</h3>

      <div style={{ width: '100%', height: '100%' }}>

        {type === 'line' && <Line data={dadosLinha} options={{ maintainAspectRatio: false }} />}
        {type === 'pie' && <Pie data={dadosPizza} options={{ maintainAspectRatio: false }} />}
        {type === 'bar' && <Bar data={dadosBarra} options={{ maintainAspectRatio: false }} />}

      </div>
    </div>
  );
};

export default GraficoCard;