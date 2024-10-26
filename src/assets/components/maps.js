import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "12px",
  marginTop: "10px",
};

const Mapa = ({ endereco }) => {
  const [coordinates, setCoordinates] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "A KEY DA API TEM QUE VIR AQUI", // Substitua pela sua API Key
  });

  // Função para buscar coordenadas a partir do endereço
  const fetchCoordinates = async (address) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=A KEY DA API TEM QUE VIR AQUI`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        const location = data.results[0].geometry.location;
        setCoordinates(location);
      } else {
        console.error("Endereço não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar coordenadas:", error);
    }
  };

  useEffect(() => {
    if (endereco) fetchCoordinates(endereco);
  }, [endereco]);

  if (!isLoaded) return <p>Carregando mapa...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinates || { lat: -1.4557549, lng: -48.4901799 }}
      zoom={15}
    >
      {coordinates && <Marker position={coordinates} />}
    </GoogleMap>
  );
};

export default Mapa;
