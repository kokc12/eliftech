import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/hot-dog.png";
import HotDogsList from "./components/hotDogs-list";
import EditHotDog from "./components/edit-hotDog";
import CreateHotDog from "./components/create-hotDog";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="/" target="_self">
                                <img src={logo} alt="hot-dog" height="32" width="32" />
                            </a>
                            <Link className="navbar-brand" to="/">Hot Dog App</Link>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="navbar-item">
                                        <Link className="nav-link" to="/create">Add New</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <Route path="/" exact component={HotDogsList} />
                        <Route path="/edit/:id" component={EditHotDog} />
                        <Route path="/create" component={CreateHotDog} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
