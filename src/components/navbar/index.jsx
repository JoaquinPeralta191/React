import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (   
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link to="/home" className='link'>
            <Navbar.Brand>Peralta's Funko</Navbar.Brand>
            </Link>
            <Link to="/products" className='link1'>
              <p>Productos</p>
            </Link>
            <Link to="/products/Figuras" className='link2'>
            <p>Figuras</p>
            </Link>
            <Link to="/products/Vestimenta" className='link3'>
            <p>Vestimenta</p>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Link to="/cart">
              <div>          
              <CartWidget/>
              </div>
            </Link>
          </Container>
        </Navbar>
      );
    }

export default navbar