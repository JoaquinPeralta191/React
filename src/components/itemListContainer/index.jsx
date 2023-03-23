import Card from 'react-bootstrap/Card'

const itemListContainer = ({productos}) => {
    return (
      <div>
        <div className='productos'>
            {productos.map((producto) =>{
            return(
            <Card clasName="card" style={{ width: '18rem'}}>
            <Card.Img variant="top" src= {producto.imageName} />
            <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>
            {producto.series}
          </Card.Text>
        </Card.Body>
      </Card>
      )
    })}
    </div>
      </div>
    );
  };

  export default itemListContainer;