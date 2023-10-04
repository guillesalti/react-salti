//CARD DETALLE ARTICULO
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock}) => {
    
    return(
        <div className="CardArticuloDetail">
            <header className="HeaderArticulo">
                <h2 className="NombreArticulo">{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ImgArticulo"/>
            </picture>
            <div className="InfoArticuloDetail">
                <p>Precio: $ {precio}</p>
                <p>Categoría: {categoria}</p>
                <p>Descripción {descripcion}</p>
                <p>Numero de artículo: {id}</p>
            </div>
            <footer className="FooterArticuloDetail">
                <ItemCount inicio={1} stock={stock} añadido={(cantidad) => console.log('cantidad agregada', cantidad)}/>
            </footer>
        </div>
    )

}

export default ItemDetail;