import { Link } from 'react-router-dom';
import { Header } from '../components';
import { cart } from '../data';

const Checkout = () => {
  return (
    <div style={{ background: '#f6f6f5' }}>
      <section className="checkout">
        <Header />
        <section className="checkout-container">
          <div className="checkout-container-left">
            <div className="check-contain">
              <div style={{ marginBottom: '3rem' }}>
                {/* <a href="#">Back to cart</a> */}
                <Link to="/cart">Back to cart</Link>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <h4>Checkout</h4>
                <h6>pay for the things you are buying here</h6>
              </div>
              <form action="#" className="left-form">
                <h5 style={{ marginBottom: '2rem' }}>1. Contact Information</h5>
                <div className="two-column">
                  <div>
                    <label htmlFor="name" className="left-label">
                      First name
                    </label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div>
                    <label htmlFor="lname" className="left-label">
                      Last name
                    </label>
                    <input type="text" name="lname" id="lname" />
                  </div>
                </div>
                <div className="two-column">
                  <div>
                    <label htmlFor="number" className="left-label">
                      Phone Number
                    </label>
                    <input type="text" name="number" id="number" />
                  </div>
                  <div>
                    <label htmlFor="email" className="left-label">
                      Email Address
                    </label>
                    <input type="text" name="email" id="email" />
                  </div>
                </div>

                <h5>2. Delivery Method</h5>
                <div className="radio-container">
                  <div className="radio">
                    <input type="radio" />
                    <h6>same-day</h6>
                  </div>
                  <div className="radio">
                    <input type="radio" />
                    <h6>Express</h6>
                  </div>
                  <div className="radio">
                    <input type="radio" />
                    <h6>Normal</h6>
                  </div>
                </div>
                <h5>3. Payment Method</h5>
                <div className="radio-container">
                  <div className="radio">
                    <input type="radio" />
                    <h6>Gpay</h6>
                  </div>
                  <div className="radio">
                    <input type="radio" />
                    <h6>paypal</h6>
                  </div>
                  <div className="radio">
                    <input type="radio" />
                    <h6>applepay</h6>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="checkout-container-right">
            <div className="checkout-summary">
              <h3>Payment Information</h3>
              <form
                className="right-form"
                action="
            #"
              >
                <div className="two-column">
                  <div>
                    <label htmlFor="name" className="right-label">
                      First Name
                    </label>
                    <input
                      className="right-input"
                      type="text"
                      placeholder="Enter your first name"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="right-label">
                      Last Name
                    </label>
                    <input
                      className="right-input"
                      type="text"
                      placeholder="Enter your last name"
                      id="lastname"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="card" className="right-label">
                    Card Number
                  </label>
                  <input
                    className="right-input"
                    type="number"
                    placeholder="Enter card number"
                    id="card"
                    name="card"
                  />
                </div>
                <div className="two-column">
                  <div>
                    <label htmlFor="date" className="right-label">
                      Expiry Date
                    </label>
                    <input
                      className="right-input"
                      type="text"
                      placeholder="Enter card expiry date"
                      name="date"
                      id="date"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="right-label">
                      CVV
                    </label>

                    <input
                      type="number"
                      placeholder="Enter card cvv"
                      id="cvv"
                      className="right-input"
                    />
                  </div>
                </div>
              </form>
              <button className="order-button">Proceed to Payment</button>
            </div>
            <div></div>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Checkout;
