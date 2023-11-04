import React,  { useContext} from "react";
import {CartContext} from '../../context/CartContext';
import './cartItem.css'



const CartItem = ({nombre, precio, cantidad, id})=>{
 
    const { removerItem  } = useContext (CartContext);

    return (
        <div className="cardItem"> 
            <h3>Articulo: {nombre}</h3>
            <p>Cantidad: {cantidad}</p>           
            <h4>Precio unitario: ${precio}</h4>
            <p>Subtotal: ${precio*cantidad}</p>
            <button onClick={()=> removerItem(id)} className="delete is-danger is-medium"></button>
        </div>
    )

}
console.log(CartItem);
export default CartItem
