//MUESTRA DETALLE DE UN ARTICULO
import { useState,useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"

import {getDoc, doc} from "firebase/firestore";
import {db} from "../../services/firebase/FirebaseConfig"; 

const ItemDetailContainer = () => {
    const [articulos, setArticulos] = useState (null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect (() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
        .then(response =>{
            const data = response.data()
            const productsAdapted = {id: response.id, ...data}
            
            setArticulos(productsAdapted)
        })
        
          .finally(()=>{
            setLoading(false)
          })

    },[itemId])

    if (loading){
        return(
            <progress class="progress  is-dark" max="50">60%</progress>        
        )}
    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...articulos}/>
        </div>
    )
}

export default ItemDetailContainer;