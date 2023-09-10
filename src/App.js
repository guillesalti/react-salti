import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <ItemListContainer saludo={'Mejora tus entrenamientos, sé tu mejor versión'}/>  
    </div>
  );
}

export default App;
