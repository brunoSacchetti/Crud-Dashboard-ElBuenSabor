import { Route, Routes } from "react-router-dom";
import { NavBarC } from "../components/ui/NavBarC/NavBarC";
import { SideBar } from "../components/ui/SideBar/SideBar";

import { EmpresaScreens } from "../components/screens/EmpresaScreens/EmpresaScreens";
import { ProductoScreens } from "../components/screens/ProductoScreens/ProductoScreens";
import { PromocionesScreens } from "../components/screens/PromocionesScreens/PromocionesScreens";

export const AppRouter = () => {
  return (
    <>
      <NavBarC />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Routes>
          <Route path="/" element={<EmpresaScreens />} />
          <Route path="/empresas" element={<EmpresaScreens />} />
          <Route path="/productos" element={<ProductoScreens />} />
          <Route path="/promociones" element={<PromocionesScreens />} />
        </Routes>
      </div>
    </>
  );
};
