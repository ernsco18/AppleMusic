import Novità from "./Novità";
import NuoveUscite from "./NuoveUscite";
import NuoviRadio from "./NuoviRadio";
import Altro from "./Altro";
import PlayerXs from "./PlayerXs";
import MyFooter from "./MyFooter";
import { Row, Col, Container } from "react-bootstrap";

const Home = function () {
  return (
    <>
      <Row className="g-0 bg-dark">
        <Col xs={12} lg={12} className="p-0">
          <PlayerXs />
          <Novità />
          <NuoviRadio />
          <NuoveUscite />
          <Altro />
          <MyFooter />
        </Col>
      </Row>
    </>
  );
};
export default Home;
