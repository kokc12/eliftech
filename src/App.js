import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "firebase/app";
import { firebaseConfig } from "./conf/firebaseConfig";
import "./css/style.css";
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
                    <header className="header">
                        <div className="header-box">
                            <div className="header-wrap">
                                <h1><a href="/eliftech">Hot<span>DOG</span></a></h1>
                                <nav>
                                    <ul>
                                        <li><Link to="/create">Add New</Link></li>
                                        <li><Link to="/list">List</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </header>
                    <Route path="/eliftech" exact component={() => <HotDogsList hotDogsList={this.state.hotDogsList} db={this.db} getHotDogs={this.getHotDogs}/>} />
                    <Route path="/list" component={() => <HotDogsList hotDogsList={this.state.hotDogsList} db={this.db} getHotDogs={this.getHotDogs}/>} />
                    <Route path="/edit/:id" component={EditHotDog} />
                    <Route path="/create" component={() => <CreateHotDog db={this.db}/>} />
                </div>
            </Router>
        );
    }
}

export default App;
