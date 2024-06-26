/* import Imagenes from "./Imagenes"; */
import UnidadMedida from "./UnidadMedida"
interface IArticuloInsumo extends Base<IArticuloInsumo> {
  denominacion: string;
  precioVenta: number;
 /*  imagenes: Imagenes []; */
  unidadMedida: UnidadMedida;
  precioCompra: number;
  stockActual: number;
  stockMaximo: number;
  esParaElaborar: boolean;
}

export default IArticuloInsumo;