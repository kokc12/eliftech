import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "firebase/app";
import { firebaseConfig } from "./conf/firebaseConfig";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/hot-dog.png";
import HotDogsList from "./components/hotDogs-list";
import EditHotDog from "./components/edit-hotDog";
import CreateHotDog from "./components/create-hotDog";

class App extends Component {
    constructor(props) {
        super(props);

        this.app = firebase.initializeApp(firebaseConfig);
        this.db = this.app.database().ref().child('hotDogs');

        this.state = {
            hotDogsList: [],
        }

    };

    componentDidMount() {
        this.getHotDogs();
    }

    getHotDogs = () => {
        const hotDogs = [];

        this.db.once('value', snap => {
            snap.forEach ( (child) => {
                hotDogs.push(
                    {
                        description: child.val().description,
                        id: child.key,
                        title: child.val().title
                    });
            });
        }).then(() => {
            this.setState({hotDogsList: hotDogs});
        });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link className="navbar-brand" to="/eliftech">
                                <img src={logo} alt="hot-dog" height="32" width="32" />
                            </Link>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="navbar-item">
                                        <Link className="nav-link" to="/eliftech/create">Add New</Link>
                                    </li>
                                    <li className="navbar-item">
                                        <Link className="nav-link" to="/eliftech/list">List</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <Route path="/eliftech" exact component={() => <HotDogsList hotDogsList={this.state.hotDogsList} db={this.db} getHotDogs={this.getHotDogs}/>} />
                        <Route path="/list" component={() => <HotDogsList hotDogsList={this.state.hotDogsList} db={this.db} getHotDogs={this.getHotDogs}/>} />
                        <Route path="/edit/:id" component={EditHotDog} />
                        <Route path="/create" component={() => <CreateHotDog db={this.db}/>} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
