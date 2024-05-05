import { useEffect, useState } from "react";
import IPromocion from "../../../types/Promocion";
import { PromocionService } from "../../../services/PromocionService";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/modalSlice";
import { SearchBar } from "../../ui/SearchBar/SearchBar";
import "./PromocionesScreens.module.css";


const API_URL = import.meta.env.VITE_API_URL;

export const PromocionesScreens = () => {
    const [promociones, setPromociones] = useState<IPromocion[]>([]);

  const promocionService = new PromocionService(
    API_URL + "/promociones"
  );

  const dispatch = useDispatch();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const promoData = await promocionService.getAll();
        setPromociones(promoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddSucursalClick = () => {
      dispatch(openModal());
    };

  /* const handleCloseModal = () => {
      dispatch(closeModal()); // Dispatcha la acción para cerrar el modal
    }; */
    
    return (
    <>
        <div>
            <SearchBar add={"Agregar Promocion"} onAddSucursalClick={handleAddSucursalClick}/>
            <table>
                <thead>
                    <tr>
                        <th>Imagen(es)</th>
                        <th>Denominación</th>
                        <th>Descripción del Descuento</th>
                        <th>Precio Promocional</th>
                        <th>Tipo de Promoción</th>
                        <th>Fechas y Horas</th>
                    </tr>
                </thead>
                <tbody>
                    {promociones.map((promo) => (
                        <tr key={promo.id}>
                            <td>
                                {promo.imagenes.map((img, index) => (
                                    <img key={index} src={img.url} alt="Imagen de promoción" className="promo-image"/>
                                ))}
                            </td>
                            <td>{promo.denominacion}</td>
                            <td>{promo.descripcionDescuento}</td>
                            <td>${promo.precioPromocional.toFixed(2)}</td>
                            <td>{promo.tipoPromocion}</td>
                            <td>Desde {promo.fechaDesde} hasta {promo.fechaHasta} de {promo.horaDesde} a {promo.horaHasta}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    
    
    </>
  )
}
