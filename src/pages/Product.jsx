import { Link } from 'react-router-dom';
import { Footer, Header } from '../components';

const Product = () => {
  return (
    <>
      <Header />
      <div>
        <div className="container">
          <div className="back-link">
            <Link to={'/'}>
              <span>&larr; Back</span>
            </Link>
            <span>Catalogue &gt; Mide Chair &gt; Red Oval Mide Chair</span>
          </div>

          <div className="product-section">
            <div className="product-image">
              <img
                src="path/to/red-oval-mide-chair.jpg"
                alt="Red Oval Mide Chair"
              />
            </div>
            <div className="product-info">
              <h1>Red Oval Mide Chair</h1>
              <div className="product-rating">
                <span>&#9733; 4.5k</span>
                <span>15k+ Reviews</span>
              </div>
              <p>
                The Red Oval Mide Chair is a stunning blend of contemporary
                design and exceptional comfort. Its bold color and unique oval
                shape make it a standout piece in any room, offering both visual
                appeal and practical seating.
              </p>
              <h2>$260.00</h2>
              <button>Add to Cart</button>
              <div className="product-colors">
                <span>Colors</span>
                <div className="color-options">
                  <span className="color red"></span>
                  <span className="color orange"></span>
                  <span className="color blue"></span>
                </div>
              </div>
              <div className="product-details">
                <button>Product Details</button>
                <button>Packaging Details</button>
                <button>Shipping Details</button>
              </div>
              <div className="product-size">
                <div>
                  <span>Height</span>
                  <span>28 inches</span>
                </div>
                <div>
                  <span>Width</span>
                  <span>24 inches</span>
                </div>
              </div>
              <div className="product-make">
                <div>
                  <span>Seat</span>
                  <span>Upholstery</span>
                </div>
                <div>
                  <span>Legs</span>
                  <span>Sturdy Iron</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reviews-section">
            <h2>Reviews & Ratings</h2>
            <div className="review">
              <div className="review-user">
                <img src="path/to/user1.jpg" alt="User" />
                <div>
                  <span>Fae_Vour</span>
                  <span>10 June 2024</span>
                </div>
              </div>
              <div className="review-content">
                <p>
                  "I absolutely love the Red Oval Mide Chair! It has completely
                  transformed the look of my living room. The vibrant red color
                  adds such a lively touch, and the unique oval shape makes it a
                  real conversation piece. It's not just beautiful to look at –
                  it's incredibly comfortable too. The padding is just right,
                  and the fabric feels very high-quality. The iron legs are
                  sturdy and give it a solid feel. I've received so many
                  compliments from friends and family. Definitely worth the
                  purchase!"
                </p>
              </div>
              <div className="review-rating">&#9733; 4.5k</div>
            </div>

            <div className="review">
              <div className="review-user">
                <img src="path/to/user2.jpg" alt="User" />
                <div>
                  <span>Kefe</span>
                  <span>24 June 2024</span>
                </div>
              </div>
              <div className="review-content">
                <p>
                  "The Red Oval Mide Chair is a fantastic addition to my home
                  office. I was looking for something stylish yet comfortable,
                  and this chair fits the bill perfectly. The design is modern
                  and sleek, and the red color really pops. It's comfortable to
                  sit in for long periods, which is a big plus for me since I
                  work from home. The iron legs provide great stability, and the
                  overall construction feels very durable. My only slight gripe
                  is that I wish it were a tad bit taller, but it works well
                  with my desk setup. Overall, I'm very happy with this
                  purchase!"
                </p>
              </div>
              <div className="review-rating">&#9733; 4.5k</div>
            </div>
          </div>

          <div className="similar-products">
            <h2>Similar Products</h2>
            <div className="product-card">
              <img
                src="path/to/hector-velvet-mide-chair.jpg"
                alt="Hector Velvet Mide Chair"
              />
              <div className="product-card-info">
                <h3>Hector Velvet Mide Chair</h3>
                <div className="product-rating">
                  <span>&#9733; 4.5k</span>
                  <span>10k+ Reviews</span>
                </div>
                <p>$200.00</p>
                <button>View Details</button>
              </div>
            </div>

            <div className="product-card">
              <img
                src="path/to/hayneadle-mide-chair.jpg"
                alt="Hayneadle Mide Chair"
              />
              <div className="product-card-info">
                <h3>Hayneadle Mide Chair</h3>
                <div className="product-rating">
                  <span>&#9733; 4.5k</span>
                  <span>10k+ Reviews</span>
                </div>
                <p>$200.00</p>
                <button>View Details</button>
              </div>
            </div>

            <div className="product-card">
              <img
                src="path/to/waffle-mide-chair.jpg"
                alt="Waffle Mide Chair"
              />
              <div className="product-card-info">
                <h3>Waffle Mide Chair</h3>
                <div className="product-rating">
                  <span>&#9733; 4.5k</span>
                  <span>10k+ Reviews</span>
                </div>
                <p>$200.00</p>
                <button>View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Product;
