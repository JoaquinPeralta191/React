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
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Link to="/cart">
              <p className='numeroCarritoNav'><CartWidget /></p>
            </Link>
          </Container>
        </Navbar>
      );
    }

export default navbar