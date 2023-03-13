import './App.css'
import Navbar from './components/navbar';
import ItemListContainer from './components/itemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return(
    
    <div>
      <Navbar />
      <div>
      <ItemListContainer greeting={"Hola"}/>
      </div>
    </div>
    
  );
}

export default App
