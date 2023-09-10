
const ItemListContainer = ({saludo}) =>{
    return (
        <article className="message is-success column is-half is-offset-one-quarter"> 
        <div className="message-header ">
            <p>Hola!!</p>
            <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
            <h1>{saludo}</h1>
        </div>    
        </article>
        
    )
}
export default ItemListContainer;