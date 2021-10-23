// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="Nav-Header">
    <div className="Blog-Container">
      <ul className="Nav-menu">
        <li className="li-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="Wave-image"
          />
          <span className="Wave-heading">Wave</span>
        </li>

        <li className="li-Home">
          <Link to="/" className="Home">
            Home
          </Link>
        </li>
        <li className="li-About">
          <Link to="/about" className="About">
            About
          </Link>
        </li>
        <li className="Contact">
          <Link to="/contact" className="Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
