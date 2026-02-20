import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  const linkUrl = "https://it.wikipedia.org/wiki/Mani_pulite";

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="mb-2">
          <Col xs={12} className="d-flex gap-3">
            <a href={linkUrl} className="text-light text-decoration-none">
              Italia
            </a>
            <span>|</span>
            <a href={linkUrl} className="text-light text-decoration-none">
              English (UK)
            </a>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={12} style={{ fontSize: "0.85rem" }}>
            Copyright © 2025{" "}
            <a href={linkUrl} className="text-light text-decoration-none">
              Apple Inc.
            </a>{" "}
            Tutti i diritti riservati.
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="d-flex flex-wrap gap-3">
            <a href={linkUrl} className="text-light text-decoration-none">
              Condizioni e servizi
            </a>
            <span>|</span>
            <a href={linkUrl} className="text-light text-decoration-none">
              Apple Music e privacy
            </a>
            <span>|</span>
            <a href={linkUrl} className="text-light text-decoration-none">
              Avviso sui cookie
            </a>
            <span>|</span>
            <a href={linkUrl} className="text-light text-decoration-none">
              Supporto
            </a>
            <span>|</span>
            <a href={linkUrl} className="text-light text-decoration-none">
              Feedback
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
