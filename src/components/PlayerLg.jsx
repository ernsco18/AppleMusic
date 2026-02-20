import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const PlayerLg = () => {
  return (
    <div
      className="d-none d-lg-block"
      style={{
        backgroundColor: "#252525",
        zIndex: 10,
      }}
    >
      <Row className=" d-flex align-items-center">
        <Col xs="auto" className="d-flex gap-2">
          <i className="bi bi-shuffle" style={{ color: "white", fontSize: "1.5rem" }}></i>
          <i className="bi bi-skip-backward-fill" style={{ color: "white", fontSize: "1.5rem" }}></i>
          <i className="bi bi-play-fill" style={{ color: "white", fontSize: "1.5rem" }}></i>
          <i className="bi bi-skip-forward-fill" style={{ color: "white", fontSize: "1.5rem" }}></i>
          <i className="bi bi-arrow-counterclockwise" style={{ color: "white", fontSize: "1.5rem" }}></i>
        </Col>

        <Col className="d-flex justify-content-center">
          <div
            style={{
              backgroundColor: "#4D4D4D",
              padding: "8px 250px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="../logos/apple.svg" alt="Apple" style={{ height: "32px" }} />
          </div>
        </Col>

        <Col xs="auto" className="d-flex align-items-center gap-2">
          <i className="bi bi-volume-down-fill" style={{ color: "white", fontSize: "1.5rem" }}></i>
          <Button
            style={{
              backgroundColor: "#FA586A",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "4px 12px",
              borderRadius: "8px",
            }}
          >
            <i className="bi bi-person-fill"></i> Accedi
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default PlayerLg;
