import { Link } from 'react-router-dom';
import { Footer, Header, Navbar } from '../components';

const Checkout = () => {
  return (
    <div style={{ background: '#f6f6f5' }}>
      <Header />
      <Navbar />
      <section className="checkout">
        <section className="checkout-container">
          <div className="checkout-container-left">
            <div className="check-contain">
              <div style={{ marginBottom: '3rem' }}>
                {/* <a href="#">Back to cart</a> */}
                <Link
                  to="/cart"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#000',
                    gap: '10px',
                  }}
                >
                  <img src="/images/arrow-left.svg" alt="" />
                  <h5>Back to cart</h5>
                </Link>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <h4
                  style={{
                    fontWeight: '700',
                    fontSize: '20px',
                    color: '#131D15',
                  }}
                >
                  Checkout
                </h4>
                <h6
                  style={{
                    fontWeight: '500',
                    fontSize: '20px',
                    color: '#A1A1A1',
                  }}
                >
                  pay for the things you are buying here
                </h6>
              </div>
              <div className="left-form">
                <h5 style={{ marginBottom: '2rem' }}>1. Contact Information</h5>
                <div className="two-column">
                  <div className="text-box">
                    <div
                      style={{
                        display: 'flex',
                        gap: '15px',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <img
                        style={{
                          borderRight: '1px solid #dcdcdc',
                          height: '20px',
                          paddingRight: '5px',
                        }}
                        src="/images/profile.svg.svg"
                        alt="profile"
                      />
                      <div>
                        <label htmlFor="name" className="left-label">
                          First name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="left-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-box">
                    <div
                      style={{
                        display: 'flex',
                        gap: '15px',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <img
                        style={{
                          borderRight: '1px solid #dcdcdc',
                          height: '20px',
                          paddingRight: '5px',
                        }}
                        src="/images/profile.svg.svg"
                        alt="profile"
                      />
                      <div>
                        <label htmlFor="lname" className="left-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lname"
                          id="lname"
                          className="left-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="two-column">
                  <div className="text-box">
                    <div
                      style={{
                        display: 'flex',
                        gap: '15px',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <select
                        name="select"
                        id="select"
                        style={{
                          border: 'none',
                          borderRight: '1px solid #dcdcdc',
                          height: '20px',
                          paddingRight: '5px',
                          width: '60px',
                        }}
                      >
                        <option value="">+234</option>
                      </select>
                      <div>
                        <label htmlFor="number" className="left-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="number"
                          id="number"
                          className="left-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-box">
                    <div
                      style={{
                        display: 'flex',
                        gap: '15px',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <img
                        style={{
                          borderRight: '1px solid #dcdcdc',
                          height: '20px',
                          paddingRight: '5px',
                        }}
                        src="/images/send-2.svg"
                        alt="profile"
                      />
                      <div>
                        <label htmlFor="email" className="left-label">
                          Email Address
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="left-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h5 style={{ marginBottom: '2rem' }}>2. Delivery Method</h5>
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
                <h5 style={{ marginBottom: '2rem' }}>3. Payment Method</h5>
                <div className="radio-container">
                  <div className="radio">
                    <input type="radio" />
                    <img src="\images\google.svg.svg" alt="google" />
                    <h6>pay</h6>
                  </div>
                  <div className="radio">
                    <input type="radio" />
                    <h6>paypal</h6>
                  </div>
                  <div className="radio">
                    <input type="radio" />
                    <img src="\images\apple.svg.svg" alt="apple" />
                    <h6>pay</h6>
                  </div>
                </div>
              </div>
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
              <Link to={'/payment'}>
                <button className="order-button">Proceed to Payment</button>
              </Link>
            </div>
            <div></div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};
export default Checkout;
