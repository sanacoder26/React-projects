
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cartItems } = useCart();

  const count = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">MyShop</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto gap-3">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>

            <Nav.Link as={Link} to="/cart">
              Cart <Badge bg="dark">{count}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
