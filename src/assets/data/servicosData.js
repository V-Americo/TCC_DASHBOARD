import mockup from '../img/mockup.jpeg'
import denuncia from '../img/1733771741412-photo.jpg'

const Data = [
    {
      id: 103,
      requerente: "Victor Américo",
      endereco: "Av. Rômulo Maiorana, 700 - Marco, Belém - PA, 66093-672, Brasil",
      data: "09/12/2024",
      status: "Pendente",
      complemento: "Entre chaco e humaita",
      referencia: "Prédio comercial",
      descricao:"Vazamento está obstruindo a via ",
      fotos: [denuncia],
    },
    {
      id: 102,
      requerente: "Victor Américo",
      endereco: "Travessa Mauriti, 1006",
      data: "22/09/2024",
      status: "Pendente",
      complemento: "Entre a rua tal e a rua 2",
      referencia: "Ao lado de uma panificadora",
      descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      fotos: [mockup, mockup],
    },
    {
      id: 101,
      requerente: "Victor Américo",
      endereco: "Avenida Governador José Malcher, 1001",
      data: "22/09/2024",
      status: "Em Aberto",
      complemento: "Entre a rua tal e a rua 2",
      referencia: "Em frente ao Mercado 2",
      fotos: [mockup, mockup],
    },
    {
      id: 102,
      requerente: "Victor Américo",
      endereco: "Avenida Governador José Malcher, 1001",
      data: "22/09/2024",
      status: "Revisão",
      complemento: "Entre a rua tal e a rua 2",
      referencia: "Em frente ao Mercado 2",
      fotos: [mockup, mockup],
    },
    {
      id: 102,
      requerente: "Victor Américo",
      endereco: "Avenida Governador José Malcher, 1001",
      data: "22/09/2024",
      status: "Finalizado",
      complemento: "Entre a rua tal e a rua 2",
      referencia: "Em frente ao Mercado 2",
      fotos: [mockup, mockup],
    },

  ];

export default Data;