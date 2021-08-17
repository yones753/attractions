
import {Link} from 'react-router-dom'
import { logoYad2 } from './constant'
import './Home/Home.css'
function Header() {

    return (
        <div className="title mb-4">
           <h3>
           <Link to="/"> <img src={logoYad2} alt="logo" width="60px" height="40px" /> </Link> 
                 אטרקציות{' '}
            </h3>
        </div>
    );
}

export default Header;