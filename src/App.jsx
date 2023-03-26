import '../funko.json'
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer'
import Navbar from './components/navbar'
import ItemDetailContainer from './components/itemDetailContainer';

function App(){

  return(
    
    <div>
    <Navbar />
    <Routes>
    <Route path='/404' element={<h2>No es lo que estas buscando (404)</h2>}></Route>
      <Route path="/" element={<Navigate to="home"/>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path='/products' element={<ItemListContainer/>}></Route>
      <Route path='/products/:category' element={<ItemListContainer/>}></Route>
      <Route path='/products/:category/item/:handle' element={<ItemDetailContainer/>}></Route>
    </Routes>
    </div>
      
  );
}

export default App
