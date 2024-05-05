import { useState, useEffect } from "react";
import IEmpresa from "../../../types/Empresa";
import { EmpresaService } from "../../../services/EmpresaService";
import CardC from "../../ui/Card/CardC";


const empresaService = new EmpresaService("http://localhost:3000/empresas");

export const EmpresaScreens: React.FC = () => {
  const [empresas, setEmpresas] = useState<IEmpresa[]>([]);

  const fetchData = async () => {
    try {
      const empresasData = await empresaService.getAll();
      setEmpresas(empresasData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
    
      <div style={{ display: "block", width: "100%" }}>
        <section style={{ display: "flex" }}>
          {empresas.map((empresa, index) => (
            <div key={index} style={{ margin: "20px" }}>
              <h2>{empresa.nombre}</h2>
              <h3>Sucursales</h3>
              <div>
                {empresa.sucursales &&
                  empresa.sucursales.map((sucursal, sucursalIndex) => (
                    <CardC
                      key={sucursalIndex}
                      sucursal={sucursal}
                      empresaId={empresa.id}
                    /> // check if empresa is not undefined before accessing id
                  ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}></div>
            </div>
          ))}
        </section>
      </div>
      
    </>
  );
};
