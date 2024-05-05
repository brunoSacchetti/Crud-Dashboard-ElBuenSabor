import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ISucursales from "../../../types/Sucursales";

const ModalSucursal: React.FC<{
  empresaId: number;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}> = ({ openModal, setOpenModal, empresaId }) => {
  const [formData, setFormData] = useState<ISucursales>({
    id: 0,
    nombre: "",
    horarioApertura: "",
    horarioCierre: "",
    domicilio: { id: 0, calle: "", numero: 0, codigoPostal: 0 },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (
      name === "nombre" ||
      name === "horarioApertura" ||
      name === "horarioCierre"
    ) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        domicilio: {
          ...prevState.domicilio,
          [name]: value,
        },
      }));
    }
  };

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/empresas/${empresaId}/sucursales`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setOpenModal(false);
      } else {
        // Manejar el caso de error
        console.error("Error al crear empresa");
      }
    } catch (error) {
      console.error("Error al crear empresa", error);
    }
  };

  return (
    <Modal show={openModal} onHide={() => setOpenModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Sucursal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="horarioApertura">
            <Form.Label>Horario de Apertura</Form.Label>
            <Form.Control
              type="text"
              name="horarioApertura"
              value={formData.horarioApertura}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="horarioCierre">
            <Form.Label>Horario de Cierre</Form.Label>
            <Form.Control
              type="text"
              name="horarioCierre"
              value={formData.horarioCierre}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="calle">
            <Form.Label>Calle</Form.Label>
            <Form.Control
              type="text"
              name="calle"
              value={formData.domicilio.calle}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="numero">
            <Form.Label>Número</Form.Label>
            <Form.Control
              type="number"
              name="numero"
              value={formData.domicilio.numero}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="codigoPostal">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control
              type="number"
              name="codigoPostal"
              value={formData.domicilio.codigoPostal}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ModalSucursal;
