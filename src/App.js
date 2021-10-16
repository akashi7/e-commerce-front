import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Cart } from './Pages/Cart';
import { Computers } from './Pages/Computers';
import { Dashboard } from './Pages/Dashboard';
import { Home } from './Pages/Home';
import { MakePayment } from './Pages/MakePayment';
import { NotFound } from './Pages/NotFound';
import { Phones } from './Pages/Phones';
import { Sign } from './Pages/Sign';
import { ViewProduct } from './Pages/ViewProduct';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={ViewProduct} exact />
        <Route path="/products/cart" component={Cart} exact />
        <Route path="/sign" component={Sign} exact />
        <Route path="/dash" component={Dashboard} exact />
        <Route path="/phones" component={Phones} exact />
        <Route path="/comp" component={Computers} exact />
        <Route path="/pay" component={MakePayment} exact />
        <Route path="*" component={NotFound} exact />
      </Switch>
    </Router>
  );
}

export default App;
