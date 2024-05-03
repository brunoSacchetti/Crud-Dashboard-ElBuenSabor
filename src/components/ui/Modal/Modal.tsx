// components/ModalSucursal.tsx
import React, { useEffect, useState, FormEvent } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import IProvincia from '../../../types/Provincia';
import ILocalidad from '../../../types/Localidad';
import IPais from '../../../types/Pais';
import ISucursales from '../../../types/Sucursales';

const url = "http://localhost:3000"

interface ModalSucursalProps {
  getSucursales: () => void;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const validationSchema = Yup.object({
  nombre: Yup.string().required("Nombre requerido"),
  horarioApertura: Yup.string().required("Horario de apertura requerido"),
  horarioCierre: Yup.string().required("Horario de cierre requerido"),
  "domicilio.calle": Yup.string().required("Calle requerida"),
  "domicilio.numero": Yup.number().required("Número requerido"),
  "domicilio.codigoPostal": Yup.number().required("Código postal requerido"),
  "domicilio.localidadId": Yup.number().required("Localidad requerida"),
});

const ModalSucursal: React.FC<ModalSucursalProps> = ({ getSucursales, openModal, setOpenModal }) => {
  const [paises, setPaises] = useState<IPais[]>([]);
  const [provincias, setProvincias] = useState<IProvincia[]>([]);
  const [localidades, setLocalidades] = useState<ILocalidad[]>([]);

  useEffect(() => {
    // Simulación de carga de datos, sustituir por llamada a API real
    axios.get<IPais[]>('url/paises').then(response => setPaises(response.data));
    console.log(paises);
    
  }, []);

  const handleCountryChange = async (paisId: number) => {
    const response = await axios.get<IProvincia[]>(`url/provincias?paisId=${paisId}`);
    setProvincias(response.data);
  };

  const handleProvinceChange = async (provinciaId: number) => {
    const response = await axios.get<ILocalidad[]>(`url/localidades?provinciaId=${provinciaId}`);
    setLocalidades(response.data);
  };

  return (
    <Modal show={openModal} onHide={() => setOpenModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>{/* {values .id ? "Editar" : "Agregar"} */} Sucursal</Modal.Title>
  </Modal.Header>
  <Formik
    initialValues={{
      id: 0,
      nombre: '',
      horarioApertura: '',
      horarioCierre: '',
      domicilio: {
        id: 0,
        calle: '',
        numero: 0,
        codigoPostal: 0,
        localidad: {
          id: 0,
          nombre: '',
          provincia: {
            id: 0,
            nombre: '',
            pais: {
              id: 0,
              nombre: ''
            }
          }
        }
      }
    }}
    validationSchema={validationSchema}
    onSubmit={(values: ISucursales) => {
      console.log(values);
      // Implementar lógica de envío aquí
      getSucursales();
      setOpenModal(false);
    }}
  >
    {({ values, handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched }) => (
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
              isInvalid={!!errors.nombre && touched.nombre}
            />
            <Form.Control.Feedback type="invalid">
              {errors.nombre}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Horario de Apertura</Form.Label>
            <Form.Control
              type="time"
              name="horarioApertura"
              value={values.horarioApertura}
              onChange={handleChange}
              isInvalid={!!errors.horarioApertura && touched.horarioApertura}
            />
            <Form.Control.Feedback type="invalid">
              {errors.horarioApertura}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Horario de Cierre</Form.Label>
            <Form.Control
              type="time"
              name="horarioCierre"
              value={values.horarioCierre}
              onChange={handleChange}
              isInvalid={!!errors.horarioCierre && touched.horarioCierre}
            />
            <Form.Control.Feedback type="invalid">
              {errors.horarioCierre}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Calle</Form.Label>
            <Form.Control
              type="text"
              name="domicilio.calle"
              value={values.domicilio.calle}
              onChange={handleChange}
              isInvalid={!!errors.domicilio?.calle && touched.domicilio?.calle}
            />
            <Form.Control.Feedback type="invalid">
              {errors.domicilio?.calle}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Número</Form.Label>
            <Form.Control
              type="number"
              name="domicilio.numero"
              value={values.domicilio.numero}
              onChange={handleChange}
              isInvalid={!!errors.domicilio?.numero && touched.domicilio?.numero}
            />
            <Form.Control.Feedback type="invalid">
              {errors.domicilio?.numero}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control
              type="number"
              name="domicilio.codigoPostal"
              value={values.domicilio.codigoPostal}
              onChange={handleChange}
              isInvalid={!!errors.domicilio?.codigoPostal && touched.domicilio?.codigoPostal}
            />
            <Form.Control.Feedback type="invalid">
              {errors.domicilio?.codigoPostal}
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group className="mb-3">
            <Form.Label>País</Form.Label>
            <Form.Select
              name="domicilio.localidad.provincia.pais.id"
              value={values.domicilio.localidad.provincia.pais.id}
              onChange={e => {
                setFieldValue("domicilio.localidad.provincia.pais.id", e.target.value);
                handleCountryChange(parseInt(e.target.value));
              }}
            >
              <option value="">Seleccione un país</option>
              {paises.map(pais => (
                <option key={pais.id} value={pais.id}>{pais.nombre}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Provincia</Form.Label>
            <Form.Select
              name="domicilio.localidad.provincia.id"
              value={values.domicilio.localidad.provincia.id}
              onChange={e => {
                setFieldValue("domicilio.localidad.provincia.id", e.target.value);
                handleProvinceChange(parseInt(e.target.value));
              }}
            >
              <option value="">Seleccione una provincia</option>
              {provincias.map(provincia => (
                <option key={provincia.id} value={provincia.id}>{provincia.nombre}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Localidad</Form.Label>
            <Form.Select
              name="domicilio.localidad.id"
              value={values.domicilio.localidad.id}
              onChange={handleChange}
            >
              <option value="">Seleccione una localidad</option>
              {localidades.map(localidad => (
                <option key={localidad.id} value={localidad.id}>{localidad.nombre}</option>
              ))}
            </Form.Select>
          </Form.Group> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpenModal(false)}>Cerrar</Button>
          <Button type="submit">Guardar</Button>
        </Modal.Footer>
      </Form>
    )}
  </Formik>
</Modal>
  );
};

export default ModalSucursal;
