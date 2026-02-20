import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function MyNavbarXs() {
  return (
    <Navbar
      expand="lg"
      className="px-3 border-bottom d-lg-none"
      style={{
        backgroundColor: "#2E2E2E",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 999,
      }}
    >
      <NavDropdown title={<i className="bi bi-list" style={{ color: "#FA586A", fontSize: "28px" }}></i>} id="basic-nav-dropdown" menuVariant="dark">
        <div className="px-3 py-2" style={{ backgroundColor: "#2E2E2E", color: "white" }}>
          <Form className="d-flex align-items-center mb-3">
            <i className="bi bi-search me-2" style={{ color: "#FA586A" }}></i>
            <FormControl type="search" placeholder="Cerca" className="me-2 bg-dark text-white border-0" />
          </Form>

          <div className="d-flex align-items-center mb-3">
            <i className="bi bi-house-door me-2" style={{ color: "#FA586A" }}></i>
            <span>Home</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <i className="bi bi-grid me-2" style={{ color: "#FA586A" }}></i>
            <span>Novità</span>
          </div>

          <div className="d-flex align-items-center">
            <i className="bi bi-broadcast me-2" style={{ color: "#FA586A" }}></i>
            <span>Radio</span>
          </div>
        </div>
      </NavDropdown>

      <Navbar.Brand href="#" className="mx-auto d-flex align-items-center gap-2">
        <img src="./images/apple.svg" alt="logo" width="24px" />
        <span style={{ color: "white", fontWeight: "500" }}>Music</span>
      </Navbar.Brand>

      <Nav className="ms-auto">
        <Nav.Link href="#" style={{ color: "#FA586A" }}>
          Accedi
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
