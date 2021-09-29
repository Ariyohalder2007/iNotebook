import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About'


function App() {

  return (
    <Router>
      <Navbar/>
      <h1>iNotebook</h1>
      <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>


    </Router>
  );
}

export default App;
