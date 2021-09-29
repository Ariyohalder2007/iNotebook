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
        <h1 className="text-center my-2">iNotebook</h1>
        <div className="container">
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
