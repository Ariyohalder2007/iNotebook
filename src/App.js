import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/NoteState";

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
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
    </NoteState>
  );
}

export default App;
