import { Link } from 'react-router-dom';
import { Header } from '../components';
import { cart } from '../data';

const Checkout = () => {
  return (
    <section className="checkout">
      <Header />
      <section className="checkout-container">
        <div className="checkout-container-left">
          <div>
            {/* <a href="#">Back to cart</a> */}
            <Link to="/cart">Back to cart</Link>
          </div>
          <div>
            <h4>Checkout</h4>
            <p>pay for the things you are buying here</p>
          </div>
        </div>
        <div className="checkout-container-right">
          <div className="checkout-summary">
            <h3>Payment Information</h3>
            <form
              action="
            #"
            >
              <div className="two-column">
                <div>
                  <label htmlFor="name">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    name="name"
                    id="name"
                  />
                </div>
                <div>
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    id="lastname"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="card">Card Number</label>
                <input
                  type="number"
                  placeholder="Enter card number"
                  id="card"
                  name="card"
                />
              </div>
              <div className="two-column">
                <div>
                  <label htmlFor="date">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="Enter card expiry date"
                    name="date"
                    id="date"
                  />
                </div>
                <div>
                  <label htmlFor="cvv">CVV</label>
                  <input type="number" placeholder="Enter card cvv" id="cvv" />
                </div>
              </div>
            </form>
            <button className="order-button">Proceed to Payment</button>
          </div>
          <div></div>
        </div>
      </section>
    </section>
  );
};
export default Checkout;
