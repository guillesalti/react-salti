import { useState } from "react";
import './CheckoutForms.css'

const CheckoutForms = ({onConfirm}) =>{
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState ('');
    const [email, setEmail] = useState ('');

    const handleConfirm = (event) =>{
        event.preventDefault ()

        const userData = {
            nombre, telefono, email
        }

        onConfirm(userData)
    }

    return (
        <div className="contenedorForm control">
            <form className='form' onSubmit={handleConfirm}>
                <label>Nombre                    
                    <input 
                        className="inputForm input" 
                        type="text" 
                        placeholder="Nombre"
                        value={nombre}
                        onChange={({target})=> setNombre(target.value)}>
                    </input>
                </label>
                <label>Número de Telefono
                    <input 
                        className="inputForm input" 
                        for="phone"
                        type="tel"                        
                        placeholder="Teléfono" 
                        value={telefono}
                        onChange={({target})=> setTelefono(target.value)}
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required >
                    </input>
                    <small> cod.Area sin 0 - Numero sin 15</small>
                </label>
                <label>Email
                    <input 
                        className="inputForm input" 
                        type="email" 
                        placeholder="Ejemplo@email.com"
                        value={email}
                        onChange={({target})=> setEmail(target.value)}>
                    </input>
                </label>
                <div >
                    <button className="buttomForm" type="submit" >Crear orden de pedido</button>
                </div>
            </form>
        </div>
    )}
export default CheckoutForms;