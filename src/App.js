import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import 'bulma/css/bulma.css';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemID' element={<ItemDetailContainer/>}/>
          <Route path='*' element={
            <article class="message is-danger">
              <div class="message-header">
                <p>404 NOT FOUND</p>
              </div>
              <div class="message-body">
                <strong>UPS... Parece que algo salió mal</strong>
              </div>
            </article>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
