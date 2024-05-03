import { Route, Routes } from "react-router-dom";
import { EmpresaScreens } from "../components/screens/EmpresaScreens/EmpresaScreens";

export const AppRouter = () => {
  return (
    <>
      
      <div style={{ display: "flex" }}>
        <Routes>
          <Route path="/" element={<EmpresaScreens />} />
        </Routes>
      </div>
    </>
  );
};
