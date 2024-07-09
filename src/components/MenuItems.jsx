import { Link } from 'react-router-dom';
const MenuItems = ({ id, title, desc, price, reviews, image }) => {
  return (
    <article className="menu-container">
      <img src={image} alt={title} />
      <span className="love-icon">
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1214 29.2143L21.1184 29.2159C21.082 29.2355 21.0413 29.2458 21 29.2458C20.9587 29.2458 20.918 29.2355 20.8816 29.2159L20.8786 29.2144C20.6884 29.1136 18.1898 27.7517 15.7464 25.6119C13.2766 23.449 11.0001 20.61 11 17.5628C11.0017 16.1543 11.5619 14.8039 12.5579 13.8079C13.5539 12.8119 14.9043 12.2517 16.3128 12.25C18.1025 12.2501 19.6446 13.0172 20.6002 14.2899L21 14.8224L21.3998 14.2899C22.3554 13.0172 23.8975 12.2501 25.6872 12.25C27.0957 12.2517 28.4461 12.8119 29.4421 13.8079C30.4381 14.804 30.9984 16.1544 31 17.5631C30.9997 20.6101 28.7233 23.4491 26.2536 25.6119C23.8102 27.7517 21.3116 29.1136 21.1214 29.2143Z"
            stroke="#202020"
          />
        </svg>
      </span>
      <div className="line"></div>
      <div>
        <div className="desc-container">
          <h5 className="title">{title}</h5>
          <span className="review">
            <span style={{ color: '#FFD700' }}>
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
            {reviews}
          </span>
          <p className="text">{desc}</p>
          <div className="price-container">
            <div>
              <h5 className="price">price</h5>
              <span className="d-price">${price}.00</span>
            </div>
            <Link to="/product">
              <button className="btn-view">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
export default MenuItems;
