
import { useParams } from "react-router-dom";
import products from "../data/products";
import { Container, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <Container className="my-4">
      <h2>{product.name}</h2>
      <img src={product.image} width="300" />
      <p className="mt-3">{product.description}</p>
      <h4>${product.price}</h4>

      <Button
        variant="success"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </Container>
  );
}

export default ProductDetail;
