import { Col } from "react-bootstrap";

const AlbumCard1 = ({ trackTitle, artistName, imageUrl, className }) => {
  return (
    <Col xs={6} md={4} lg={2} className={`mb-4 ${className}`}>
      <div
        className="album-card-content"
        style={{
          overflow: "hidden",
          textAlign: "left",
        }}
      >
        <div
          style={{
            width: "100%",
            paddingTop: "100%",
            position: "relative",
            marginBottom: "8px",
          }}
        >
          <img
            src={imageUrl}
            alt={trackTitle}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>

        <p
          className="text-truncate text-muted"
          style={{
            fontSize: "0.9rem",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
          title={artistName}
        >
          {artistName}
        </p>

        <h3
          className="text-truncate text-light"
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
          title={trackTitle}
        >
          <i className="bi bi-h-square-fill me-1"></i>
          {trackTitle}
        </h3>
      </div>
    </Col>
  );
};

export default AlbumCard1;
