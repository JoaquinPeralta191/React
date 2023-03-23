import '../funko.json'
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer'
import Navbar from './components/navbar'
import { useState } from 'react';
import { useEffect } from 'react';

function App(){
  const[productos, setProductos] = useState([])

    useEffect(() => {
    fetch('../funko.json')
      .then(response => response.json())
      .then(data =>{
        setProductos(data)
      })
  }, [])
  
  return(
    
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="home"/>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path='/products' element={<ItemListContainer  productos={productos}/>}></Route>
    </Routes>
    </div>
      
  );
}

export default App
