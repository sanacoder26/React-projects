import { Container, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQty, total } = useCart();

  return (
    <Container className="my-5">
      <h2 className="mb-4 fw-bold">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center border-bottom py-3"
            >
              <div>
                <h6>{item.name}</h6>
                <p className="mb-1">${item.price}</p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) =>
                    updateQty(item.id, Number(e.target.value))
                  }
                  style={{ width: "60px" }}
                />

                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}

          <h4 className="mt-4">Total: ${total}</h4>

          <Button variant="dark" className="mt-2">
            Checkout
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;
