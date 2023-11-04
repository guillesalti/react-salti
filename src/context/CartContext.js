import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({children})=>{
   const [cart, setCart] =useState([]);
   console.log(cart)

   const isInCart =(itemId) => { //dice si fue agregado o no al carrito
    return cart.some(prod => prod.id === itemId)
}

   const añadirItem = (item, cantidad) => { //añadir al carrito
    if(!isInCart (item.id)){
        setCart(prev => [...prev, {...item, cantidad}])
    }else {
        console.error('El producto ya fue agregado')
    }}

    const removerItem = (itemId)=>{ //eliminar del carrito
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const limpiarCart = () => { //limpiar el carrito
        setCart([])
    }
     

     // Calcula la cantidad total de productos en el carrito
     const totalQuantity = cart.reduce((total, prod) => total + prod.cantidad, 0);

     // Calcula el valor total del carrito
     const total = cart.reduce((total, prod) => total + (prod.cantidad * prod.precio), 0);
   
    return (
        <CartContext.Provider value={{cart, añadirItem, removerItem, limpiarCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;