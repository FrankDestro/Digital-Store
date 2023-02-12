import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import ProductDetails from 'pages/ProductDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/games" exact>
          <Catalog />
        </Route>
        <Route path="/games/:gamesId">
          <ProductDetails />
        </Route>
           
        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
