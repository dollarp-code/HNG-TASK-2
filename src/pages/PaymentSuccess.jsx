import { Link } from 'react-router-dom';
import { Header } from '../components';

const PaymentSuccess = () => {
  return (
    <div className="Payment-success-container">
      <Header />
      <div className="payment-success-container-inner">
        <div className="success-container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2 style={{ marginBottom: '20px' }}>Payment Success</h2>
            <img src="public\images\Vector.svg" alt="success" />
          </div>
          <Link to={'/'}>
            <button className="success-button">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PaymentSuccess;
