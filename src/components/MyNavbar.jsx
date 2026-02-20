import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function MyNavbar() {
  return (
    <Navbar
      className="d-none d-lg-flex flex-column p-3"
      style={{
        backgroundColor: "#2E2E2E",
        height: "100%",
      }}
    >
      <Navbar.Brand href="#" className="mb-4 d-flex align-items-center gap-2">
        <img src="../logos/apple.svg" alt="logo" width="24px" />
        <span style={{ color: "white", fontWeight: "500" }}>Music</span>
      </Navbar.Brand>

      <Form className="w-100 mb-4 position-relative">
        <i
          className="bi bi-search"
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            color: "#FA586A",
          }}
        ></i>
        <FormControl
          type="text"
          placeholder="Cerca"
          style={{
            backgroundColor: "#1F1F1F",
            border: "1px solid #FA586A",
            color: "white",
          }}
        />
      </Form>

      <Nav className="flex-column gap-3">
        <Nav.Link href="#" style={{ color: "#FA586A" }}>
          <i className="bi bi-house-door-fill"></i> Home
        </Nav.Link>
        <Nav.Link href="#" style={{ color: "#FA586A" }}>
          <i className="bi bi-grid"></i> Novità
        </Nav.Link>
        <Nav.Link href="#" style={{ color: "#FA586A" }}>
          <i className="bi bi-broadcast"></i> Radio
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
