//MUESTRA TODOS LOS ARTICULOS
import { useState, useEffect } from "react";
import { getArticulos, getElementByCategoria } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";

const ItemListContainer = ({saludo}) =>{
    const [articulos, setArticulos] = useState([])
    
    const {categoriaId}=useParams ()

    useEffect (()=>{
        const asyncFunc = categoriaId ? getElementByCategoria : getArticulos

        asyncFunc(categoriaId)
        .then(response =>{
            setArticulos(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[categoriaId])
    
    return (
         <div className="Saludo">
            <h1>{saludo}</h1>
            <ItemList articulos={articulos}/>
         </div>       
    )
}
export default ItemListContainer;