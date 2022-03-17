import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Nav from "./components/Nav";
import Products from "./pages/Products";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";
import Error from "./pages/404";

import "./App.css";

function UnAuthApp() {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route path="/login">
        <Signin />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
    </Switch>
  );
}

function AuthApp() {
  return (
    <Switch>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/">
        <Products />
      </Route>
    </Switch>
  );
}

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <Nav />

      {!user ? <UnAuthApp /> : <AuthApp />}
    </div>
  );
}

export default App;
