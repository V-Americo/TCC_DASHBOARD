import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/servicos.css";
import Data from "../data/servicosData";

Modal.setAppElement("#root");



const ServicosTodos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [activeTab, setActiveTab] = useState("Todos");

  const openModal = (item) => {
    setCurrentItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentItem(null);
  };

  const filterServices = (status) => {
    if (status === "Todos") return Data;
    return Data.filter((item) => item.status === status);
  };

  return (
    <div className="servicos">
      <div className="servicos-content">
        <h1>{activeTab}</h1>
        <p className="pendencias-count">14 pendências</p>
      </div>

      <div className="tabs">
        {["Todos", "Em Aberto", "Revisão", "Finalizado"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
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
            <tr key={item.id} onClick={() => openModal(item)}>
              <td>#{item.id}</td>
              <td>{item.requerente}</td>
              <td>{item.endereco}</td>
              <td>{item.data}</td>
              <td className={`status ${item.status.toLowerCase()}`}>{item.status}</td>
              <td>
                <button className="acao-button">▼</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal">
            {currentItem && (
                <>
                    <div className="details">
                        <h3>Status: <span className={`status ${currentItem.status.toLowerCase()}`}>{currentItem.status}</span></h3>
                        <p><strong>Identificador:</strong> #{currentItem.id}</p>
                        <p><strong>Requerente:</strong> {currentItem.requerente}</p>
                        <p><strong>Endereço:</strong> {currentItem.endereco}</p>
                        <p><strong>Complemento:</strong> {currentItem.complemento}</p>
                        <p><strong>Ponto de Referência:</strong> {currentItem.referencia}</p>
                    </div>
                    <div className="fotos">
                        {currentItem.fotos.map((foto, index) => (
                            <img key={index} src={foto} alt={`Foto ${index + 1}`} />
                        ))}
                    </div>
                    <button className="acao-button" onClick={closeModal}>Desiginar Operador</button>
                </>
            )}
        </Modal>


    </div>
  );
};

export default ServicosTodos;
