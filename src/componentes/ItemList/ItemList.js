import Item from "../Item/Item";

const ItemList = ({articulos}) =>{
    return (
        <div className="ListGroup">
            {articulos.map (articulo => <Item key={articulo.id} {...articulo}/>)}
        </div>
    )
}

export default ItemList;