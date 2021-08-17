import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Attractions from './components/Attractions/Attractions'
import './App.css';

function App() {
  const userCoordinates ={ latitude: parseFloat(localStorage.getItem("latitude")), longitude: parseFloat(localStorage.getItem("longitude")) }
 
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <Home userCoordinates={userCoordinates} /> } />
        <Route exact path="/attractions" render={() => <Attractions userCoordinates={userCoordinates} />} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;

