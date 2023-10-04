//CARD DE CADA ARTICULO
import { Link } from 'react-router-dom';
import './Item.css'

const Item =({id, nombre, img, precio, stock}) => {
    return(
        <div className="CardArticulo">
            <picture >
                <img src={img} alt={nombre} className="ImgArticulo"/>
            </picture>
            <h2 className="NombreArticulo">{nombre}</h2>
            <div className="InfoArticulo">
                <p>Precio: $ {precio}</p>
                <p>Stock disponible: {stock}</p>
            </div>
            <footer className="FooterArticulo">
                <Link to={`/item/${id}`} className="VerDetalleArticulo">Ver detalle</Link>
            </footer>
        </div>
    )
}
export default Item;