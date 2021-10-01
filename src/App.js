import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/NoteState";
import './App.css'
import Alert from "./components/Alert";

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="Potty Kha"/>
        <h1 className="text-center my-2">iNotebook <i className="fas fa-apple-alt"/> </h1>
        <div className="container">
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route>
              <img className=" my-2" style={{width: '30%', display: "block", margin: 'auto'}} src="https://i.imgur.com/A040Lxr.png" alt="Lost" srcset="" />
              <h3 className="text-center my-3">Page Not Found, Got Lost huh? Wanna Go <Link to="/">Home</Link>  </h3>
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
