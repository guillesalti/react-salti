//CARD DETALLE ARTICULO
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import {CartContext} from "../../context/CartContext";

const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock}) => {
    const [cantidadAñadida, setCantidadAñadida] = useState(0);

   const {añadirItem} = useContext(CartContext)

    const productoAñadido = (cantidad)=> {
        setCantidadAñadida (cantidad)

        const item = {id, nombre, precio} //arma el objeto con los datos 

        añadirItem (item, cantidad) //pasa los datos y la cantidad seleccionada
    }
    
    return(
        <div className="CardArticuloDetail">
            <picture className="ImgArticuloDiv">
             <img src={img} alt={nombre} className="ImgArticulo"/>
            </picture>
            
            <div className="InfoArticuloDetail">
                <h2 className="NombreArticulo">{nombre}</h2>
                <p>Precio: $ {precio}</p>                
                <p>Descripción: {descripcion}</p>
                <p>Numero de artículo: {id}</p>              
                {cantidadAñadida > 0 ? 
                    (<div>
                        <p>Cantidad: {cantidadAñadida}</p>
                        <button>                   
                            <Link to='/cart' className='realizarCompra'>Terminar Compra</Link>
                        </button>
                        <button className="voler">                   
                            <Link to='/' className="voler">Volver</Link>
                        </button>
                    </div>)
                    :(<ItemCount inicio={1} stock={stock} añadido={productoAñadido}/>)
                }
            </div>
        </div>
    )}
export default ItemDetail;