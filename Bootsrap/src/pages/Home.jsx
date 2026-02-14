
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-light py-5">
      <Container className="text-center">
        <h1 className="fw-bold display-5">Shop Smarter. Live Better.</h1>
        <p className="text-muted mt-3">
          Discover premium products with fast delivery and secure checkout.
        </p>

        <Button
          as={Link}
          to="/products"
          variant="dark"
          size="lg"
          className="mt-3"
        >
          Browse Products
        </Button>
      </Container>
    </div>
  );
}

export default Home;

