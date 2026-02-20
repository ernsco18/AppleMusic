import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NuoviRadio = function () {
  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h2
        style={{
          fontSize: "28px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        nuovi episodi radio <i className="bi bi-chevron-right"></i>
      </h2>

      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          gap: "20px",
          paddingBottom: "10px",
        }}
      >
        <div style={{ minWidth: "180px", textAlign: "left" }}>
          <img
            src="../images/2a.png"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <p style={{ fontSize: "14px", color: "#cccccc", marginTop: "8px" }}>
            Prologo con Abuelo
          </p>
        </div>

        <div style={{ minWidth: "180px", textAlign: "left" }}>
          <img
            src="../images/2b.png"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <p style={{ fontSize: "14px", color: "#cccccc", marginTop: "8px" }}>
            The Wanderer
          </p>
        </div>

        <div style={{ minWidth: "180px", textAlign: "left" }}>
          <img
            src="../images/2c.png"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <p style={{ fontSize: "14px", color: "#cccccc", marginTop: "8px" }}>
            Michael Bublé & Carly Pearce
          </p>
        </div>

        <div style={{ minWidth: "180px", textAlign: "left" }}>
          <img
            src="../images/2d.png"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <p style={{ fontSize: "14px", color: "#cccccc", marginTop: "8px" }}>
            Sthephan Moccio: The Zane Lowe Interview
          </p>
        </div>

        <div style={{ minWidth: "180px", textAlign: "left" }}>
          <img
            src="../images/2e.png"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <p style={{ fontSize: "14px", color: "#cccccc", marginTop: "8px" }}>
            Chart Spotlight: Julia Michaels
          </p>
        </div>

        <div style={{ minWidth: "180px", textAlign: "left" }}>
          <img
            src="../images/2f.png"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <p style={{ fontSize: "14px", color: "#cccccc", marginTop: "8px" }}>
            Lorem ipsum, dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
};
export default NuoviRadio;
