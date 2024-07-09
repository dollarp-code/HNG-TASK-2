import { Link } from 'react-router-dom';

const Navlinks = () => {
  return (
    <ul className="nav-links">
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <li style={{ marginBottom: 'none' }}>
          <a href="#">Home</a>
        </li>
      </Link>
      <Link to={'/product'} style={{ textDecoration: 'none' }}>
        <li style={{ marginBottom: 'none' }}>
          <a href="#">Discounted products</a>
        </li>
      </Link>
    </ul>
  );
};
export default Navlinks;
