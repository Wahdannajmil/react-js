import { Col, Container, Row} from "react-bootstrap"
import "../style/landingpage.css"
const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">YOGYAKARTA</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro