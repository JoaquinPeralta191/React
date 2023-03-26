import CardP from '../Card';
import '../../../funko.json';
import { useEffect } from 'react';
import { useState } from 'react';

const itemListContainer = () => {
  const[productos, setProductos] = useState([])
  
  useEffect(() => {
  fetch('../../../funko.json')
    .then(response => response.json())
    .then(data =>{
      setProductos(data)
    })
}, [])
  
  
  
  return (
      <div>  
        <div className='productos'>
            {productos.map((productos) =>{
            return(
            <CardP key={productos.handle} productos={productos}/>
      )
    })}
    </div>
      </div>
    );
  };

  export default itemListContainer;