import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { cart } from '../data';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartitems] = useState(cart);
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    // if (cartItems.id === id)
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div style={{ background: '#F6F6F5' }}>
        <Header />
        <section className="cart-container">
          <div className="cart-container-left">
            <div className="shopping">
              <h3>Shopping Cart</h3>
              <Link
                to="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: '#000',
                  gap: '10px',
                }}
              >
                <img src="\images\arrow-left.svg" alt="" />
                <h5>Continue Shopping</h5>
              </Link>
            </div>
            <div>
              {cartItems.map((item) => {
                const { image, id, title, price, quantity, color } = item;
                return (
                  <article key={id} className="cart-items-container">
                    <div className="box">
                      <img src={image} alt={title} className="image" />
                    </div>
                    <div className="cart-desc">
                      <div className="description">
                        <h3 style={{ fontSize: '1.1rem' }}>{title}</h3>
                        <div className="color">
                          <h4>Select Color:</h4>
                          <div>
                            <img src={color} alt={title} />
                          </div>
                        </div>
                        <div className="shuffle-container">
                          <img src="/images/shuffle.svg" alt="icon" />
                          <h6>Compare with similar items </h6>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '5px',
                          alignItems: 'center',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            gap: '5px',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <button
                            type="button"
                            style={{
                              width: '15px',
                              height: '15px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                            }}
                            onClick={decrementCounter}
                          >
                            -
                          </button>
                          <h5>{counter}</h5>
                          <button
                            type="button"
                            style={{
                              width: '15px',
                              height: '15px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                            }}
                            onClick={incrementCounter}
                          >
                            +
                          </button>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'red',
                            gap: '2px',
                            cursor: 'pointer',
                          }}
                        >
                          <img src="public\images\trash.svg" alt="trash" />
                          <h6>Remove</h6>
                        </div>
                      </div>
                      <div className="amount">{price}</div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="cart-container-right">
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="cost-price ">
                <div className="subtotal">
                  <h5>Subtotal</h5>
                  <h4>$1,120.00</h4>
                </div>
                <div className="shipping">
                  <h5>Shipping Fee</h5>
                  <h4>$300.00</h4>
                </div>
                <div className="line line-order-summary"></div>
                <div className="total">
                  <h5>Total</h5>
                  <h4>$1,1420</h4>
                </div>
              </div>
              <Link to="/checkout">
                <button type="button" className="order-button">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
            <div></div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default Cart;
