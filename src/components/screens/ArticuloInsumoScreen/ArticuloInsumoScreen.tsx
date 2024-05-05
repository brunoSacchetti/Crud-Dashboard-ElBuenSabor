import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/modalSlice";
import "./ArticulosInsumosScreen.module.css";
import { SearchBar } from "../../ui/SearchBar/SearchBar";
import { ArticuloInsumoService } from "../../../services/ArticuloInsumoService";
import IArticuloInsumo from "../../../types/ArticuloInsumo";

export const ArticulosInsumosScreen = () => {
  const [articuloInsumo, setArticuloInsumo] = useState<IArticuloInsumo[]>([]);

  const articuloInsumoService = new ArticuloInsumoService(
    "http://localhost:3000/articulosInsumos"
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articulosInsumosData = await articuloInsumoService.getAll();
        setArticuloInsumo(articulosInsumosData);
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
    <div style={{ width: "100%" }}>
      <SearchBar add={"Agregar Insumos"} onAddSucursalClick={handleAddSucursalClick} />
      <h1>Insumos</h1>
      <table>
        <thead>
          <tr>
            <th>Denominación</th>
            <th>Precio de Venta</th>
            <th>Unidad de Medida</th>
            <th>Precio de Compra</th>
            <th>Stock Actual</th>
            <th>Stock Máximo</th>
            <th>Es Para Elaborar</th>
          </tr>
        </thead>
        <tbody>
          {articuloInsumo.map((articuloInsumo) => (
            <tr key={articuloInsumo.id}>
              <td>{articuloInsumo.denominacion}</td>
              <td>${articuloInsumo.precioVenta}</td>
              <td>{articuloInsumo.unidadMedida.denominacion}</td>
              <td>${articuloInsumo.precioCompra}</td>
              <td>{articuloInsumo.stockActual}</td>
              <td>{articuloInsumo.stockMaximo}</td>
              <td>{articuloInsumo.esParaElaborar ? "Sí" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};