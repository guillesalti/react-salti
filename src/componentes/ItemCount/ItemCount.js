//CONTADOR DE DETALLE DE ARTICULO
import { useState } from "react";
import './ItemCount.css'
import { Link } from "react-router-dom";

const ItemCount = ({stock, inicio, añadido}) =>{
    const [cantidad, setCantidad] = useState(inicio)

    const suma = ()=> { if(cantidad<stock) {setCantidad(cantidad+1)} }
    const resta = ()=> { if(cantidad>1) {setCantidad(cantidad-1)} }

    return (
        <div className="contador">
            <div className="botonCantidad">
                <button onClick={suma}>+</button>
                <h4>{cantidad}</h4>
                <button onClick={resta}>-</button>                
                
                <button onClick={()=> añadido(cantidad)} disabled={!stock}>Añadir al carrito</button>            
            </div>
            <Link to={'/'}><button className="AñadirCarrito"> Volver</button></Link>            
        </div>
    )
}
export default ItemCount

