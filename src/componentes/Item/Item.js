//CARD DE CADA ARTICULO
import { Link } from 'react-router-dom';
import './Item.css'

const Item =({id, nombre, img, precio, descripcion}) => {
    return(
        <div className="CardArticulo">
            <picture >
                <img src={img} alt={nombre} className="ImgArticulo"/>
            </picture>            
            <div className="InfoArticulo">
                <h2 className="NombreArticulo">{nombre}</h2>
                <p className='precioArt'>Precio: $ {precio}</p>
                
            </div>
            <footer className="FooterArticulo">
                <Link to={`/item/${id}`} className="VerDetalleArticulo">Ver detalle</Link>
            </footer>
        </div>
    )
}
export default Item;