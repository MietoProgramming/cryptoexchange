import logo from "./logo.svg";
import "./styles/App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsGraphUp } from "react-icons/bs";
import { GoGlobe, GoRocket } from "react-icons/go";

function App() {
  return (
    //<Header />
    <Router>
      <div className="App bg-dark">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <IconContext.Provider value={{ className: "text-warning" }}>
                <BsGraphUp />
              </IconContext.Provider>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMain"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="/top" className="nav-link" aria-current="page">
                    TOP 10
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/calculator"
                    className="nav-link"
                    aria-current="page"
                  >
                    Calculator
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link" aria-current="page">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <div className="bg-dark">
              <img src="./img/stats.jpg" alt="" className="img-fluid" />
              <div className="fs-1 text-over-img">Success is only one</div>
              <div className="fs-6 text-over-img mt-5">
                We ease your life quickly
              </div>
            </div>
            <div className="container">
              <div className="col">
                <div className="row my-4">
                  <div className="col-6 text-end my-auto text-white">
                    <IconContext.Provider
                      value={{ style: { fontSize: "64px" } }}
                    >
                      <GoGlobe />
                    </IconContext.Provider>
                  </div>
                  <div className="col-6 fs-4 text-white">
                    Check prices of cryptocurrencies from entire world.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="./img/btc.jpg" alt="" className="img-fluid" />
            </div>
            <div className="container">
              <div className="col">
                <div className="row my-4">
                  <div className="col-6 fs-4 text-end text-white">
                    Have the best information faster.
                  </div>
                  <div className="col-6 my-auto text-white">
                    <IconContext.Provider
                      value={{ style: { fontSize: "64px" } }}
                    >
                      <GoRocket />
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/top">
            <div>
              <h1>person</h1>
            </div>
          </Route>
          <Route exact path="/calculator">
            <div>
              <h1>person</h1>
            </div>
          </Route>
          <Route exact path="/about">
            <div>
              <h1>person</h1>
            </div>
          </Route>
        </Switch>
        <footer>
          <div className="col text-center bg-dark bg-gradient py-4">
            <div className="text-light">Copyright &copy; 2020</div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
