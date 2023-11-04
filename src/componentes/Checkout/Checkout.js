import './Chceckout.css'
import { useState, useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch,Timestamp } from "firebase/firestore";
import { db } from "../../services/firebase/FirebaseConfig";

import CheckoutForms from "../CheckoutForms/CheckoutForms";

const Checkout = () => {
    const [loading, setLoading] = useState (false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, limpiarCart} = useContext (CartContext)

    const createOrder = async ({nombre, telefono, email}) => {
        setLoading(true)

        try {
            const objetOrder ={
                buyer: {
                    nombre, telefono, email
                },
                items: cart,
                total: total, 
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)

            const outOfStock = []

            const ids= cart.map(prod => prod.id)
            const productRef = collection (db, 'productos')
            const prodAgregadoDeFirestore = await getDocs (query(productRef, where(documentId(), 'in', ids)))
            const {docs} = prodAgregadoDeFirestore
            console.log("aca entro")
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod=>prod.id === doc.id)
                const prodQuantity = productAddedToCart?.cantidad

                if (stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {outOfStock.push({id: doc.id, ...dataDoc})}              
            })

            if (outOfStock.length === 0){
             await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objetOrder) 

                setOrderId(orderAdded.id)
                limpiarCart()
            } else {console.error('Lo sentimos, hay algunos produsctos que están fuera de Stock')}            
        } catch (error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    if (loading){
        return(
            <div className='checkout'>
            <h1>Se está generando la orden... Esperá un momento por favor</h1>
            <span class="icon mdi mdi-48px">
                <i class="fas fa-spinner fa-pulse"></i>
            </span>
            </div>
            
        )}
    if (orderId) {
        return (
            <div  className='checkout'>
                <h1>Su clave de orden es: {orderId}</h1>
            </div>
        
        )
    }   
    
    return (
        <div className='checkout'>
            <h1>Checkout</h1>
            <CheckoutForms onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout