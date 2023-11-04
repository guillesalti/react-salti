import { useContext } from "react";
import {CartContext} from '../../context/CartContext';
import CartItem from'../CartItem/CartItem';
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = ()=> {
    const { cart, limpiarCart, totalQuantity, total } = useContext (CartContext);    
    
    console.log(cart)
    console.log(totalQuantity)
    if (totalQuantity === 0) {
        
        return (
            <div className="cartCarrito">
                <h1 className="upsCarro">Upss, no hay articulos en el Carrito</h1>
                <Link to='/'><button className="productosButton">Volver a la tienda</button></Link>
            </div>
        )
    }

    return (
        <div className="cartCarrito">            
            { cart.map ( p => <CartItem key={p.id} {...p} /> ) }      
            <h3 className="totalCarrito">Total: ${total}</h3>
            <div className="footerCarritoCart">
                <button className="vaciarCarrito" onClick={()=> limpiarCart()} >Vacíar Carrito</button>
                <Link to='/'><button className="seguirComprando">Seguir comprando</button></Link>
                <Link to='/checkout'><button className="finalizarCompra">Finalizar compra</button></Link>
            </div>
            
        </div>
    )
  
}

export default Cart;