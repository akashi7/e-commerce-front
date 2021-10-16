import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { useHistory } from 'react-router-dom';

export const Sign = () => {
  const history = useHistory();
  const initialState = {
    check: false
  };
  const [state, setState] = useState(initialState);

  const handleSignIn = (e) => {
    e.preventDefault();
    let token = '3263t72t3782t3782t874rt7824';
    localStorage.setItem('token', token);
    history.push('/dash');
  };

  useEffect(() => {
    document.title = "Sign in or sign up";
  }, []);

  return (
    <div>
      <Header />
      {state.check ?
        <div className="signIn">
          <form onSubmit={handleSignIn}>
            <label>Sign Up</label>
            <br></br>
            <br></br>
            <input placeholder="Email" type="text" className="inputType" />
            <input placeholder="Password" type="password" className="inputType" />
            <input placeholder="Confirm password" type="password" className="inputType" />
            <button className="signIn-btn">Sign Up</button>
            <label onClick={() => setState({ ...state, check: false })} className="signIn-lb">Have account?</label>
          </form>
        </div> :
        <div className="signIn">
          <form onSubmit={handleSignIn}>
            <label>Sign in</label>
            <br></br>
            <br></br>
            <input placeholder="Email" type="text" className="inputType" />
            <input placeholder="Password" type="password" className="inputType" />
            <button className="signIn-btn">Sign in</button>
            <label onClick={() => setState({ ...state, check: true })} className="signIn-lb">Do not have account?</label>
          </form>
        </div>}
    </div>
  );
};
