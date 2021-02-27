import logo from "./logo.svg";
import "./styles/App.css";
import { Header } from "./components/Header";
import { Main } from "./components/homepage/Main";
import { Footer } from "./components/Footer";
import { About } from "./components/about/About";
import { Top } from "./components/top/Top";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IconContext } from "react-icons";

function App() {
  return (
    <Router>
      <div className="App bg-dark">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/top">
            <Top />
          </Route>
          <Route exact path="/calculator">
            <div>
              <h1>person</h1>
            </div>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
