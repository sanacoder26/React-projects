

import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container className="py-4 text-center">
        <h5 className="fw-bold">MyShop</h5>
        <p className="text-muted small mb-1">
          Modern ecommerce store built with React.
        </p>
        <p className="small mb-0">© 2026 MyShop. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
