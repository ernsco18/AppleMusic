import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const PlayerXs = () => {
  return (
    <div
      className="d-block d-lg-none fixed-bottom"
      style={{
        backgroundColor: "#252525",
        padding: "8px 12px",
        zIndex: 1050,
      }}
    >
      <Container fluid>
        <Row className="align-items-center">
          <Col xs="auto">
            <i className="bi bi-apple-music" style={{ color: "#F9586A", fontSize: "1.5rem" }}></i>
          </Col>

          <Col></Col>

          <Col xs="auto" className="d-flex gap-2">
            <i className="bi bi-play-fill" style={{ color: "#F9586A", fontSize: "1.5rem" }}></i>
            <i className="bi bi-skip-forward-fill" style={{ color: "#F9586A", fontSize: "1.5rem" }}></i>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlayerXs;
