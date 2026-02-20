import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Altro = () => {
  const links = [
    "Esplora per genere",
    "worldWide",
    "Video musicali",
    "Decenni",
    "Classifiche",
    "Nuovi artisti",
    "Attività e stati d'animo",
    "Audio spaziale",
    "Hit del passato",
  ];

  return (
    <section className="my-5">
      <Container>
        <h2 className="mb-4">Altro da esplorare</h2>
        <Row className="g-3">
          {links.map((text, idx) => (
            <Col xs={6} md={4} key={idx}>
              <a
                href="#"
                className="d-flex align-items-center justify-content-between p-3"
                style={{
                  backgroundColor: "#2A2A2A",
                  borderRadius: "12px",
                  color: "#F9586A",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                <span>{text}</span>
                <i className="bi bi-chevron-right" style={{ color: "#F9586A" }}></i>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Altro;
