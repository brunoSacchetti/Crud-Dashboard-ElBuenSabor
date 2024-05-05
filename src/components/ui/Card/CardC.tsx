// components/CardEmpresa.tsx
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

import ModalSucursal from "../Modal/ModalSucursal";
import ISucursales from "../../../types/Sucursales";
import { CCardImage } from "@coreui/react";

interface CardSucursalProps {
  sucursal: ISucursales;
}

const CardC: React.FC<CardSucursalProps & { empresaId: number }> = ({ sucursal, empresaId }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      
      <Card>
      <div style={{ alignContent: "center" }}>
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={handleOpenModal}
        >
          Agregar Sucursal
        </button>
      </div>
        <Card.Body>
        <CCardImage orientation="top" src="https://http2.mlstatic.com/storage/sc-seller-journey-backoffice/images-assets/234940643901-Sucursales--una-herramienta-para-mejorar-la-gesti-n-de-tus-puntos-de-venta.png" />
          <Card.Title>{sucursal.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Horario: {sucursal.horarioApertura} - {sucursal.horarioCierre}
          </Card.Subtitle>
          <Card.Text>
            Dirección: {sucursal.domicilio.calle} {sucursal.domicilio.numero},{" "}
            {sucursal.domicilio.codigoPostal}
          </Card.Text>
          <div style={{display:'flex',gap:'20px',justifyContent:'space-evennpmly'}}>
          <Button style={{background:'#f09e2f', border:'none'}} onClick={handleOpenModal}>
            Editar
          </Button>
          <Button variant="danger" onClick={handleOpenModal}>
            Eliminar
          </Button>
          </div>
        </Card.Body>
      </Card>
      <ModalSucursal
      empresaId={empresaId}
      openModal={showModal}
      setOpenModal={setShowModal}
/>
    </>
  );
};

export default CardC;
