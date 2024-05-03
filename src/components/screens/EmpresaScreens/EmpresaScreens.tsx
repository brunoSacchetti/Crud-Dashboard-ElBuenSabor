import { CardComponent } from "../../ui/Card/CardComponent";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import IEmpresa from "../../../types/Empresa";
import { EmpresaService } from "../../../services/EmpresaService";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { Button } from "react-bootstrap";
import ModalSucursal from "../../ui/Modal/Modal";



const empresaService = new EmpresaService("http://localhost:3000/empresas");

export const EmpresaScreens: React.FC = () => {
  const [empresas, setEmpresas] = useState<IEmpresa[]>([]);
  const sucursalesGlobal = useAppSelector((state) => state.sucursales.sucursales);
  
  const [openModal, setOpenModal] = useState(false);

  const fetchData = async () => {
    try {
      const empresasData = await empresaService.getAll();
      setEmpresas(empresasData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    
      <div style={{ display: "block", width: "100%" }}>
        <Button className="submit" onClick={() => {setOpenModal(true)}}>AGREGAR SUCURSAL</Button>
        <section style={{ display: "flex" }}>
          {empresas.map((empresa, index) => (
            <div key={index} style={{ margin: "20px" }}>
              <h2>{empresa.nombre}</h2>
              <h3>Sucursales</h3>
              <div style={{ alignContent: "center" }}>
                <button className="btn btn-outline-success" type="submit">
                  Editar
                </button>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <CardComponent key={index} sucursales={empresa.sucursales} />
              </div>
            </div> 
          ))}
          <ModalSucursal
          getSucursales={fetchData} // Reutiliza fetchData para recargar la lista después de cambios
          openModal={openModal}
          setOpenModal={setOpenModal}
          />
        </section>
      </div>
    </>
  );
};