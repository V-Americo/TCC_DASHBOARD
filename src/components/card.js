import React from "react";
import '../styles/card.css'

const Card = () =>{
    return(
        <div className="card-container">
            <div className="card-header">
                <h3>TODAS AS SOLICITAÇÕES</h3>
            </div>
            <div className="card-content">

                <div className="card-statistics">
                    <div className="card-number">
                        <h1>57</h1>
                        <span>Soliciatções no total</span>
                    </div>
                    <div className="card-number">
                        <h1>02</h1>
                        <span>Solicitações finalizadas</span>
                    </div>
                </div>

                <div className="card-status">

                    <div className="status-item">
                        {/* <div className="status-icon"></div> */}
                        <div className="status-info">
                            <h2>25</h2>
                            <p>Pendentes</p>
                        </div>
                    </div>

                    <div className="status-item">
                        {/* <div className="status-icon"></div> */}
                        <div className="status-info">
                            <h2>20</h2>
                            <p>Em Aberto</p>
                        </div>
                    </div>

                    <div className="status-item">
                        {/* <div className="status-icon"></div> */}
                        <div className="status-info">
                            <h2>02</h2>
                            <p>Finalizados</p>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );

}

export default Card;