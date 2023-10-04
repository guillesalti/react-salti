//CONTADOR DE DETALLE DE ARTICULO
import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({stock, inicio, añadido}) =>{
    const [cantidad, setCantidad] = useState(inicio)

    const suma = ()=> { if(cantidad<stock) {setCantidad(cantidad+1)} }
    const resta = ()=> { if(cantidad>1) {setCantidad(cantidad-1)} }

    return (
        <div className="contador">
            <div className="botonCantidad">
                <button onClick={resta}>-</button>
                <h4>{cantidad}</h4>
                <button onClick={suma}>+</button>
            </div>
            <button className="AñadirCarrito" onClick={()=>añadido(cantidad)} disabled={!stock}>Añadir al carrito</button>            
        </div>
    )
}
export default ItemCount

