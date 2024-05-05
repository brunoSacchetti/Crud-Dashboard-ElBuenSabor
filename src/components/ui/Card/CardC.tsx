// components/CardEmpresa.tsx
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

import ModalSucursal from "../Modal/ModalSucursal";
import ISucursales from "../../../types/Sucursales";

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
      <div style={{ alignContent: "center" }}>
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={handleOpenModal}
        >
          Agregar Sucursal
        </button>
      </div>
      <Card>
        <Card.Body>
          <Card.Title>{sucursal.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Horario: {sucursal.horarioApertura} - {sucursal.horarioCierre}
          </Card.Subtitle>
          <Card.Text>
            Dirección: {sucursal.domicilio.calle} {sucursal.domicilio.numero},{" "}
            {sucursal.domicilio.codigoPostal}
          </Card.Text>
          <Button variant="primary" onClick={handleOpenModal}>
            Editar
          </Button>
          <Button variant="danger" onClick={handleOpenModal}>
            Eliminar
          </Button>
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
