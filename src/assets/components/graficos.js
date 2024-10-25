import React from "react";
import '../styles/graficos.css'
import GraficoCard from './graficoCard';

const Graficos = ({title, type}) =>{
    return(
        <div className="grafico-card">
            <GraficoCard title={title} type={type} />
        </div>
    );
}

export default Graficos;