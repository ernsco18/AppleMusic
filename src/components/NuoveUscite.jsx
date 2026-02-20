import { useState, useEffect } from "react";
import { Container, Row, Spinner, Alert } from "react-bootstrap";
import AlbumCard1 from "./AlbumCard1";

const NuoveUscite = function () {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const API_QUERY = "queen";
  const API_ENDPOINT = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${API_QUERY}`;

  const fetchNewReleases = function () {
    setLoading(true);
    setError(false);

    fetch(API_ENDPOINT)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("Errore nella response: " + response.status);
      })
      .then((data) => {
        setTracks(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("errore", err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    fetchNewReleases();
  }, []);

  const firstRow = tracks.slice(0, 5);
  const secondRow = tracks.slice(5, 10);

  return (
    <Container className="my-5">
      <h2 className="text-light mb-4">
        Nuove uscite{" "}
        <i className="bi bi-chevron-right" style={{ fontSize: "1rem" }}></i>
      </h2>

      {loading && (
        <div className="text-center mb-3">
          <Spinner animation="border" variant="success" />
        </div>
      )}

      {!loading && error && (
        <Alert variant="danger">Errore nel caricamento</Alert>
      )}

      {!loading && !error && tracks.length === 0 && (
        <Alert variant="warning">
          Nessun risultato trovato per "{API_QUERY}".
        </Alert>
      )}

      <Row>
        {firstRow.map((track, index) => (
          <AlbumCard1
            key={track.id}
            trackTitle={track.title_short || track.title}
            artistName={track.artist.name}
            imageUrl={track.album.cover_medium}
            className={index >= 6 ? "d-none d-lg-block" : ""}
          />
        ))}
      </Row>

      <Row className="d-none d-lg-flex mt-3">
        {secondRow.map((track) => (
          <AlbumCard1
            key={track.id}
            trackTitle={track.title_short || track.title}
            artistName={track.artist.name}
            imageUrl={track.album.cover_medium}
          />
        ))}
      </Row>
    </Container>
  );
};

export default NuoveUscite;
