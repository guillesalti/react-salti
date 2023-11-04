//MUESTRA TODOS LOS ARTICULOS
import { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import { Form, useParams } from "react-router-dom";

import {getDocs, collection, query, where} from "firebase/firestore";
import {db} from "../../services/firebase/FirebaseConfig"; 

const ItemListContainer = ({saludo}) =>{
    const [articulos, setArticulos] = useState([])
    const [loading, setloading] = useState(true)

    const {categoriaId}=useParams ()

    useEffect (()=>{
        setloading(true)
        
        const collectionRef = categoriaId
        ? query(collection(db,"productos"), where("categoria", "==", categoriaId))
        : collection (db, "productos")

        getDocs(collectionRef)
        
        .then(response =>{
            const productsAdapted = response.docs.map(doc=>{
                const data =doc.data()
                return {id: doc.id, ...data}
            })
            setArticulos(productsAdapted)
            })
            .finally(()=>{
                setloading(false)
            })
        },[categoriaId])

    if (loading){
        return(
            <progress class="progress is-dark" max="50">60%</progress>        
        )}
    return (
         <div className="Saludo">
            <h1>{saludo}</h1>
            <ItemList articulos={articulos}/>
         </div>       
    )
}

 
export default ItemListContainer;