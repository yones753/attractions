import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Attraction from './Attraction'
import './Attractions.css'
import { Col, Container, Row } from 'react-bootstrap'
import { getBestType } from '../../helper/getBestType'
import { url } from '../constant'
import Swal from 'sweetalert2'


function Attractions(props) {
  const [attractions, setAttractions] = useState([])
  const [attractionsBtns, setAttractionsBtns] = useState([])
  const [attractionsByCategory, setAttractionsByCategory] = useState([])
  const [btnFirst, setBtnFirst] = useState(true)

  useEffect(() => {
    const user = props.userCoordinates
    axios.get(`${url}?longitude=${user.longitude}&latitude=${user.latitude}`)
      .then(res => {
        setAttractions(res.data)
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          title: "תנסה שוב",
          showConfirmButton: false,
          timer: 1500
        })
      })
  }, [])

  useEffect(() => {
    const attractinsBtn = [...new Set(getBtnName())]
    setAttractionsBtns(attractinsBtn)
    setAttractionsByCategory(attractions.filter(a => a.attraction_type === getBestType(getBtnName())))
  }, [attractions])

  const getBtnName = () => attractions.reduce((acc, attraction) => [...acc, attraction.attraction_type], [])

  const handleShow = (e) => {
    setBtnFirst(false)
    setAttractionsByCategory(attractions.filter(a => a.attraction_type === e.target.name))
  }

  return (
    <div className="attractions">
      <Container >
        <Row className="d-flex justify-content-around m-auto">{attractionsBtns.map((a, index) =>
          <Col key={index} xs={6} sm={6} md={4} lg={2}>
            <button className={`btnType btn btn-outline-secondary ${(a === getBestType(getBtnName()) && btnFirst) ? "selected" : ""}`} name={a} onClick={handleShow}> {a} </button>
          </Col>)}
        </Row>
      </Container>
      <Container className="mt-3">
        <hr />
        {attractionsByCategory.map(a => { return <Attraction key={a._id} attraction={a} /> })}
      </Container>
    </div>
  )
}

export default Attractions;
