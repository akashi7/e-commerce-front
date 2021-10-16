import { Header } from '../components/Header';
import { useHistory } from 'react-router-dom';
import m1 from '../images/m1.png';
import m3 from '../images/m3.png';
import mk4 from '../images/mk4.png';
import mk5 from '../images/mk5.png';
import mk6 from '../images/mk6.png';

export const Dashboard = () => {

  const history = useHistory();

  return (
    <div>
      <Header />
      <div className="grid-container">
        <main className='main'>
          <div className="content">
            <ul className="products">
              <li>
                <div className="product">
                  <img src={m1} className="pro-image" alt="product" />
                  <div className="name">
                    <p onClick={() => history.push('/product')}>itel 200</p>
                  </div>
                  <div className="brand"></div>
                  <div className="price">200,000 RWF</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img src={m3} className="pro-image" alt="product" />
                  <div className="name">
                    <p onClick={() => history.push('/product')}>iphone 11</p>
                  </div>
                  <div className="brand"></div>
                  <div className="price">900,000 RWF</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img src={mk4} className="pro-image" alt="product" />
                  <div className="name">
                    <p onClick={() => history.push('/product')}>hp pro</p>
                  </div>
                  <div className="brand"></div>
                  <div className="price">500,000 RWF</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img src={mk5} className="pro-image" alt="product" />
                  <div className="name">
                    <p onClick={() => history.push('/product')}>dell xy</p>
                  </div>
                  <div className="brand"></div>
                  <div className="price">400,000 RWF</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img src={m1} className="pro-image" alt="product" />
                  <div className="name">
                    <p onClick={() => history.push('/product')}>tecno pro max</p>
                  </div>
                  <div className="brand"></div>
                  <div className="price">300,000 RWF</div>
                </div>
              </li>
              <li>
                <div className="product">
                  <img src={mk6} className="pro-image" alt="product" />
                  <div className="name">
                    <p onClick={() => history.push('/product')}>lenovo</p>
                  </div>
                  <div className="brand"></div>
                  <div className="price">500,000 RWF</div>
                </div>
              </li>
            </ul>
          </div>
        </main>
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
    </div>
  );
};
