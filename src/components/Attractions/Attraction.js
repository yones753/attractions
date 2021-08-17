import { Col, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
import Popup from 'reactjs-popup';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { url as URL } from '../constant'
import { useState } from "react";
import './Attraction.css'
import Swal from 'sweetalert2'

function Attraction(props) {
  const { attraction } = props
  const { isFavorites, attraction_id, address, opening_hours, distance, url, name } = attraction
  const [status, setStatus] = useState(isFavorites)
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);


  const changeLike = () => {
    const id = attraction._id
    axios.put(`${URL}`, { id })
      .then(res => {
          setStatus(!status)
          Swal.fire({
            icon: 'success',
            title: (res.data.msg),
            showConfirmButton: false,
            timer: 1200
          })
      }).catch((error) => {
          Swal.fire({
            icon: 'error',
            title: "הפעולה נכשלה  תנסה יותר מאוחר",
            showConfirmButton: false,
            timer: 1500
          })
      })
  }

  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <Row>
          <div className="popUpHours">
            <Col><h5 className="text-center">שעות הפעילות</h5></Col>
            <Col>{opening_hours.replace('</br>', ".")}</Col>
            <Col><button className="btnColse btn btn-outline-secondary" onClick={() => setOpen(o => !o)}>סגור</button></Col></div>
        </Row>
      </Popup>

      <Container key={attraction_id} className="attraction mt-2 mb-2 text-center p-auto">
        <Col ><div id="circle" onClick={changeLike}>{(status) ? <FcLike className="iconLike" /> : <FcLikePlaceholder className="iconLike" />}</div></Col>
        <Row className="m-2 pt-3 pb-3">
          <Col xs={6} md={2} lg={1}>{attraction_id}<br /><span className="names">מזהה</span></Col>
          <Col xs={6} md={2} lg={2}>{name}<br /><span className="names">שם</span></Col>
          <Col xs={12} md={2} lg={4}>{address}<br /><span className="names">כתובת</span></Col>
          <Col xs={6} md={2} lg={2}>{(opening_hours === "24/7") ? <div>24/7<br /><span className="names">שעות</span></div> : <button className="btnHours btn btn-outline-secondary" onClick={() => setOpen(o => !o)}>הצג שעות</button>}</Col>
          <Col xs={6} md={2} lg={1}>{distance}<br /><span className="names">מרחק ק"מ</span></Col>
          <Col xs={12} md={2} lg={2}><a href={url} rel="noreferrer" target="_blank"><button className="btnHours btn btn-outline-secondary"> בקר באתר</button></a></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Attraction;