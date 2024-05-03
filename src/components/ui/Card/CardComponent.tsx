import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from "@coreui/react"

import ISucursales from "../../../types/Sucursales"


interface CardComponentProps {
  sucursales: ISucursales[];
}

export const CardComponent: React.FC<CardComponentProps> = ({ sucursales }) => {
  return (
    <>
      {sucursales.map((sucursal, index) => (
        <CCard key={index} style={{ width: '18rem', margin: '20px'}}>
          <CCardImage orientation="top" src="https://http2.mlstatic.com/storage/sc-seller-journey-backoffice/images-assets/234940643901-Sucursales--una-herramienta-para-mejorar-la-gesti-n-de-tus-puntos-de-venta.png" />
          <CCardBody>
            <CCardTitle>{sucursal.nombre}</CCardTitle>
            <CCardText>
              {sucursal.domicilio.calle}
            </CCardText>
            <div style={{display:'flex',justifyContent:'space-around'}}>
            <CButton color="primary" href="#">Editar</CButton>
            <CButton color="danger" href="#">Eliminar</CButton>
            </div>
          </CCardBody>
        </CCard>
      ))}
    </>
  );
};