import { Container, Row, Col } from 'react-bootstrap'
import { FaPhoneSquareAlt, FaFacebookSquare, FaInstagramSquare, FaSnapchatSquare } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

function Footer() {
  return (
    <div className="footer mt-2 mb-2 pt-2 pb-2">
      <Container className="text-center">
        <Row>
          <Col xs={6} lg={4} className="icons "><MdLocationOn />{''}רמת גן,הרצל 88</Col>
          <Col xs={6} lg={4} className="icons"><FaPhoneSquareAlt />{' '}054-915-5448</Col>
          <Col xs={6} lg={4} className="icons"><MdEmail />{' '}yones@gmail.com</Col>
          <Col xs={6} lg={4} className="icons "><FaFacebookSquare />{' '}Facebook</Col>
          <Col xs={6} lg={4} className="icons"><FaSnapchatSquare />{' '}Snapchat</Col>
          <Col xs={6} lg={4} className="icons"><FaInstagramSquare />{' '}Instagram</Col>
        </Row>
        <Row className="text-center ml-0">
          <Col  className="icons">Accessibility statement</Col>
          <Col  className="icons">Terms&conditions</Col>
          <Col xs={12} lg={12} className="icons ">©️ Attractions yad2 2021 by Yones</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;