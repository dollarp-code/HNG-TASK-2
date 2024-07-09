import Navlinks from './Navlinks';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <Navlinks />
        <h2>VEECKER</h2>
        <div className="icons-container">
          <div className="icons">
            <Link
              to="/cart"
              style={{
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50px',
              }}
            >
              <img src="/images/shopping-cart.svg" alt="cart" />
            </Link>
            <img src="/images/search-normal.svg" alt="search" />
          </div>
          <button className="login">Login</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
