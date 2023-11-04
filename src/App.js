import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import 'bulma/css/bulma.css';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart/Cart';
import "./App.css"
import Checkout from "./componentes/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/> 
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element ={<Checkout/>} />
            <Route path='*' element={
              <article class="message is-danger">
                <div class="message-header">
                  <p>404 NOT FOUND</p>
                </div>
                <div class="message-body">
                  <strong>UPS... Parece que algo salió mal</strong>
                </div>
              </article>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
