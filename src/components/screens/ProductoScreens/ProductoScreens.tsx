import { useEffect, useState } from "react";
import IArticuloManufacturado from "../../../types/ArticuloManufacturado";
import { useDispatch, useSelector } from "react-redux";
import { ArticuloManufacturadoService } from "../../../services/ArticuloManufacturadoService";
import { openModal,closeModal } from "../../../redux/slices/modalSlice";
import "./ProductoScreens.module.css"
import { SearchBar } from "../../ui/SearchBar/SearchBar";


export const ProductoScreens = () => {
  const [productos, setProductos] = useState<IArticuloManufacturado[]>([]);

  const articuloService = new ArticuloManufacturadoService(
    "http://localhost:3000/articulosManufacturados"
  );

  const dispatch = useDispatch();
  //const showModal = useSelector(state: RootState) => state.modal.showModal);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosData = await articuloService.getAll();
        setProductos(productosData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddSucursalClick = () => {
      dispatch(openModal()); // Dispatcha la acción para abrir el modal
    };

  /* const handleCloseModal = () => {
      dispatch(closeModal()); // Dispatcha la acción para cerrar el modal
    }; */
   

  return (
    <div>
        <SearchBar add={"Agregar Productos"} onAddSucursalClick={handleAddSucursalClick}/>
        <h1>Productos Manufacturados</h1>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Denominación</th>
                        <th>Precio de Venta</th>
                        <th>Unidad de Medida</th>
                        <th>Descripción</th>
                        <th>Tiempo Estimado (minutos)</th>
                        <th>Preparación</th>
                        <th>Detalles</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>
                                {producto.imagenes.map((imagen, index) => (
                                    <img key={index} src={imagen.url} alt="Imagen de producto" className="productImage" />
                                ))}
                            </td>
                            <td>{producto.denominacion}</td>
                            <td>${producto.precioVenta.toFixed(2)}</td>
                            <td>{producto.unidadMedida.denominacion}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.tiempoEstimadoMinutos}</td>
                            <td>{producto.preparacion}</td>
                            <td>
                                {producto.articuloManufacturadoDetalles.map((detalle, index) => (
                                    <div key={index}>{detalle.cantidad}x {detalle.articuloDenominacion}</div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
};
