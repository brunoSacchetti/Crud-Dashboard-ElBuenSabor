import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/modalSlice";
import "./UsuarioScreen.module.css"
import { SearchBar } from "../../ui/SearchBar/SearchBar";
import IUsuarios from "../../../types/Usuarios";
import { UsuariosService } from "../../../services/UsuariosService";
export const UsuariosScreen = () => {
  const [usuarios, setUsuarios] = useState<IUsuarios[]>([]); // Almacena los datos de los usuarios

  const usuariosService = new UsuariosService(
    "http://localhost:3000/usuarios",
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usuariosData = await usuariosService.getAll();
        setUsuarios(usuariosData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddSucursalClick = () => {
    dispatch(openModal());
  };

  return (
    <div style={{width:"100%"}}>
      <SearchBar add={"Agregar Usuarios"} onAddSucursalClick={handleAddSucursalClick} />
      <h1>Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre de Usuario</th> 
            <th>ID de Usuario</th> 
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.username}</td> 
              <td>{usuario.id}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UsuariosScreen;