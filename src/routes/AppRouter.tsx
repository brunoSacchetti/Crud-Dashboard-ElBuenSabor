import { Route, Routes } from "react-router-dom";
import { NavBarC } from "../components/ui/NavBarC/NavBarC";
import { SideBar } from "../components/ui/SideBar/SideBar";

import { EmpresaScreens } from "../components/screens/EmpresaScreens/EmpresaScreens";
import { ProductoScreens } from "../components/screens/ProductoScreens/ProductoScreens";
import { PromocionesScreens } from "../components/screens/PromocionesScreens/PromocionesScreens";
import { Home } from "../components/screens/Home/Home";
import UsuariosScreen from "../components/screens/UsuariosScreen/UsuariosScreen";
import { ArticulosInsumosScreen } from "../components/screens/ArticuloInsumoScreen/ArticuloInsumoScreen";

export const AppRouter = () => {
  return (
    <>
      <NavBarC />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresas" element={<EmpresaScreens />} />
          <Route path="/productos" element={<ProductoScreens />} />
          <Route path="/promociones" element={<PromocionesScreens />} />
          <Route path="/usuarios" element={<UsuariosScreen />} />
          <Route path="/insumos" element={<ArticulosInsumosScreen />} />
        </Routes>
      </div>
    </>
  );
};
