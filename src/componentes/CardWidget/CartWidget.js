import IconoCarrito from'./img/bag.png';
import {useContext} from'react';
import {CartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';
import './CartWidget.css'

const CardCarrito = () => {
    const {totalQuantity} = useContext(CartContext);
    
    return (
        <div className='navbar-end navbar-item cardWidget'>
            <Link to='/cart' >
                <div className='totalQuiantityDiv'>
                    <img src={IconoCarrito} alt='IconoCarrito'/>
                    <p className='totalQuiantity' >
                        {totalQuantity}
                    </p>
                </div>         
            </Link>
        </div>
    )
}
export default CardCarrito;