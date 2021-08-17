import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import './Home.css'
import { homeImg } from '../constant'

function Home(props) {
  const [showBtn, setShowBtn] = useState(false)

  function ShowLocation() {
    const lat = Number((props.userCoordinates.latitude).toFixed(5))
    const long = Number((props.userCoordinates.longitude).toFixed(5))
    return (
      <div className="location mb-2">

        {lat > 1 ?
          <div>
            <div> <span className="lat-long">קו רחב :</span>{' '}{lat}</div>
            <div> <span className="lat-long">אורך גיאוגרפי :</span>{' '} {long}</div>
            <div>
              <Row> <div>למצוא את כל האטרקציות בלחיצה אחת בלבד</div></Row>
              <Link to="/attractions"><button className="btnsHome btn btn-outline-secondary mt-1">
                מצא אטרקציות בסביבתי </button> </Link>
            </div>
          </div>
          : <div>המיקום שלך לא תקין ,תנסה שוב ממקום אחר</div> }
      </div>
    )
  }
  return (
    <div>
      <Container className="text-center home">
        <Row> <div>ברוכים הבאים לאטרקציות <span className="lat-long">יד2</span></div></Row>

        <img className="img-attractions mt-3" alt="img" src={homeImg} />
        <Row><div className="smoll">לא צריך לחפש יותר ... כל האטרקציות נמצאים במקום אחד </div></Row>
        <Row> <div><button className="btnsHome btn btn-outline-secondary m-3" onClick={() => setShowBtn(!showBtn)}>הצג מיקום </button></div> </Row>
        <Row> <div>{(showBtn) ? <ShowLocation /> : ""}</div> </Row>
      </Container>
    </div>
  );
}

export default Home;









