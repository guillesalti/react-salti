//MUESTRA DETALLE DE UN ARTICULO
import { useState,useEffect } from "react";
import { getElementById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [articulos, setArticulos] = useState (null)

    const {itemId} = useParams()
    useEffect (() => {
        getElementById(itemId)
        .then(response => {
            setArticulos(response)
        })
        .catch(error =>{
            console.error(error)
        })
    },[itemId])
    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...articulos}/>
        </div>
    )
}
export default ItemDetailContainer;