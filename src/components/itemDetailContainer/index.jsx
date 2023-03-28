import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../../funko.json';
import '../../App.css'

function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const { handle } = useParams()

	useEffect(() => {
		fetch(`../../../funko.json`)
		  .then((response) => response.json())
		  .then((data) => {
			const funko = data.find((f) => f.handle === handle);
			setProducto(funko);
		  });
	  }, [handle])

	return (
		<div>
			<div className="product">
			<div className="product-image">
				<img src={producto.imageName} ></img>
			</div>
			<div className="product-details">
				<h1>{producto.title}</h1>
				<h3>${producto.price} ARS</h3>
				<button>Comprar</button>
				<h4 className='descripcionTitulo'>Descripcion</h4>
				<div className='contDescripcion'>
				Pertenece a la categoria: {producto.category}
				</div>
				</div>
			
			</div>
		
		</div>
  )
}

export default ItemDetailContainer;