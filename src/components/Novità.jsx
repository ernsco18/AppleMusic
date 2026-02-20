import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Novità = function () {
  return (
    <div style={{ color: "#e9edee", padding: "20px" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Novità</h2>

      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          gap: "20px",
          paddingBottom: "10px",
        }}
      >
        <Card
          style={{
            minWidth: "260px",
            backgroundColor: "#3A3A3A",
            border: "none",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <Card.Body style={{ padding: "0px" }}>
            <p
              style={{
                color: "#e9edee",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              NUOVA STAZIONE RADIO
            </p>
            <h3
              style={{
                color: "#e9edee",
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
            </h3>

            <img
              src="../images/1a.png"
              alt="Chill Radio"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Card.Body>
        </Card>

        <Card
          style={{
            minWidth: "260px",
            backgroundColor: "#3A3A3A",
            border: "none",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <Card.Body style={{ padding: "0px" }}>
            <p
              style={{
                color: "#e9edee",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              NUOVA STAZIONE RADIO
            </p>
            <h3
              style={{
                color: "#e9edee",
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
            </h3>

            <img
              src="../images/1b.png"
              alt="Chill Radio"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Card.Body>
        </Card>

        <Card
          style={{
            minWidth: "260px",
            backgroundColor: "#3A3A3A",
            border: "none",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <Card.Body style={{ padding: "0px" }}>
            <p
              style={{
                color: "#e9edee",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              NUOVA STAZIONE RADIO
            </p>
            <h3
              style={{
                color: "#e9edee",
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              Lorem ipsum dolor sit amet commmmmmmmmm
            </h3>

            <img
              src="../images/1c.png"
              alt="Chill Radio"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Novità;
