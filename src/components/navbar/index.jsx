import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';

const navbar = () => {
  return (   
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Peralta's Funko</Navbar.Brand>
            <a href="#" className='link1'>Productos</a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <a href="#" className='numeroCarritoNav'><CartWidget /></a>
          </Container>
        </Navbar>
      );
    }

export default navbar