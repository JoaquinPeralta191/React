import CardP from '../Card';
import '../../../funko.json';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const[productos, setProductos] = useState([])
  const { category } = useParams()

    useEffect(() => {
      fetch('../../../funko.json')
        .then(response => response.json())
        .then(data =>{
          if(category == undefined){
            setProductos(data)
          }else{
            const funkoCategory = data.filter((f) => f.category === category)
            setProductos(funkoCategory)
          }
        })
    }, [category])

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

  export default ItemListContainer;