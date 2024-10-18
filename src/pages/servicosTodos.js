import React, { useState } from "react";
import '../styles/servicos.css';
import mockup from '../assets/mockup.jpeg'

const Data = [
    { 
      id: 102, 
      requerente: 'Victor Américo', 
      endereco: 'Avenida Governador José Malcher, 1001', 
      data: '22/09/2024', 
      status: 'Pendente', 
      complemento: 'Entre a rua tal e a rua 2', 
      referencia: 'Em frente ao Mercado 2', 
      fotos: [mockup,mockup] 
    },
    { id: 143, requerente: 'Victor Américo', endereco: 'Rua A', data: '22/09/2024', status: 'Em Aberto' },
    { id: 221, requerente: 'Victor Américo', endereco: 'Rua B', data: '22/09/2024', status: 'Revisão' },
    { id: 223, requerente: 'Victor Américo', endereco: 'Rua C', data: '22/09/2024', status: 'Finalizado' },
];

const ServicosTodos = () => {
    const [activeTab, setActiveTab] = useState('Todos');
    const [expandedRow, setExpandedRow] = useState(null); // Controla a linha expandida

    const filterServices = (status) => {
        if (status === 'Todos') return Data;
        return Data.filter((item) => item.status === status);
    };

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id); 
    };

    return (
        <div className="servicos">
            <div className="servicos-content">
                <h1>{activeTab}</h1>
                <p className="pendencias-count">14 pendências</p>
            </div>

            <div className="tabs">
                {['Todos', 'Abertos', 'Revisão', 'Finalizados'].map((tab) => (
                    <button 
                        key={tab} 
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Protocolo</th>
                        <th>Requerente</th>
                        <th>Endereço</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {filterServices(activeTab).map((item) => (
                        <>
                            <tr key={item.id} onClick={() => toggleRow(item.id)}>
                                <td>#{item.id}</td>
                                <td>{item.requerente}</td>
                                <td>{item.endereco}</td>
                                <td>{item.data}</td>
                                <td className={`status ${item.status.toLowerCase()}`}>{item.status}</td>
                                <td>
                                    <button className="acao-button">▼</button>
                                </td>
                            </tr>
                            {expandedRow === item.id && (
                                <tr className="expanded-row">
                                    <td colSpan="6">
                                        <div className="details">
                                            <h3>Status {item.status}</h3>
                                            <p><strong>Identificador:</strong></p>
                                            <p> #{item.id}</p>
                                            <p><strong>Requerente:</strong></p>
                                            <p>{item.requerente}</p>
                                            <p><strong>Endereço:</strong></p>
                                            <p>{item.endereco}</p>
                                            <p><strong>Complemento:</strong></p>
                                            <p>{item.complemento}</p>
                                            <p><strong>Ponto de Referência:</strong></p>
                                            <p>{item.referencia}</p>
                                            <div className="fotos">
                                                {item.fotos && item.fotos.map((foto, index) => (
                                                    <img key={index} src={foto} alt={`Foto ${index + 1}`} />
                                                ))}
                                            </div>
                                            <button className="acao-button">Designar Operador</button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServicosTodos;
