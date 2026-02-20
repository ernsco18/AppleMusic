import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar";
import MyNavbarXs from "./components/MyNavbarXs";
import { Col, Row } from "react-bootstrap";
import PlayerLg from "./components/PlayerLg";

function App() {
  return (
    <Row className="p-0 max-vh-100 g-0">
      <Col xs={12} lg={2}>
        <MyNavbar />
        <MyNavbarXs />
      </Col>
      <Col xs={12} lg={10}>
        <PlayerLg />
        <Home />
      </Col>
    </Row>
  );
}

export default App;
