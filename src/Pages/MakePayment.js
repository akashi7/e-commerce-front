import { useState } from 'react';
import { Header } from '../components/Header';


export const MakePayment = () => {



  const [mobile, setMobile] = useState(false);

  const togglePayment = () => {
    if (mobile) {
      setMobile(false);
    }
    else setMobile(true);
  };

  return (
    <div>
      <Header />
      {mobile ? (
        <>
          <div className="payment-div">
            <div className="text-div">Mobile payment</div>
            <form>
              <input placeholder="Telephone" className="inputJ" />
              <input placeholder="Town/city" className="inputJ" />
              <input placeholder="Address" className="inputJ" />
              <button className="pay-button">Make payment</button>
              <button className="pay-button" onClick={() => togglePayment()} >Use Visa</button>
            </form>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </>
      ) : (
        <>
          <div className="payment-div">
            <div className="text-div">Visa payment</div>
            <form>
              <input placeholder="Visa-card" className="inputJ" />
              <input placeholder="Owner-name" className="inputJ" />
              <input placeholder="cvv" className="inputJ" />
              <input placeholder="Expiry-date" className="inputJ" />
              <button className="pay-button">Make payment</button>
              <button className="pay-button" onClick={() => togglePayment()} >Use mobile</button>
            </form>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </>
      )}
      <footer className="footer" id="footer">
        <div className="about">
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="info">
          <h3>info</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="help">
          <h3>Contact us</h3>
          <form>
            <input placeholder="Email" className="inputX" />
            <input placeholder="Elaborate" className="inputZ" />
            <button className="sendButton">Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
};
