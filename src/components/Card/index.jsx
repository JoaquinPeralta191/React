import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import '../../App.css'

const CardP = ({productos}) => {
  return (
    <Link className="links" to={`${productos.category}/item/${productos.handle}`}>
        <Card className="card" style={{ width: '18rem'}}>
            <Card.Img variant="top" src= {productos.imageName} />
            <Card.Body>
                <Card.Title>{productos.title}</Card.Title>
                <Card.Text>
                    ${productos.price} ARS
                </Card.Text>
            </Card.Body>
        </Card>
    </Link>
  )
}

export default CardP