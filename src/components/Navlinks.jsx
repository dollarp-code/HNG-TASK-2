import { Link } from 'react-router-dom';

const Navlinks = () => {
  return (
    <ul className="nav-links">
      <Link
        to={'/'}
        style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}
      >
        <li style={{ marginBottom: 'none' }}>
          <h4>Home</h4>
        </li>
      </Link>
      <Link
        to={'/product'}
        style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}
      >
        <li style={{ marginBottom: 'none' }}>
          <h4>Discounted products</h4>
        </li>
      </Link>
    </ul>
  );
};
export default Navlinks;
