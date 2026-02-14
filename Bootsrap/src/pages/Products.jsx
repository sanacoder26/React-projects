
import products from "../data/products";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products() {
  return (
    <Container className="my-5">
      <h2 className="mb-4 fw-bold">Featured Products</h2>

      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} sm={6} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "250px", objectFit: "cover" }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted">
                  ${product.price}
                </Card.Text>

                <Button
                  as={Link}
                  to={`/product/${product.id}`}
                  variant="outline-dark"
                  className="mt-auto"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
