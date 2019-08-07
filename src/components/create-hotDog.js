import React, {Component} from 'react';
import "firebase/database";
import {firebaseConfig} from "../conf/firebaseConfig";
import firebase from "firebase/app";

class CreateHotDog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotDogsList: []
        };

        this.app = firebase.initializeApp(firebaseConfig);
        this.db = this.app.database().ref().child('hotDog');
    }

    componentWillMount() {
        const hotDogs = this.state.hotDogsList;
        this.db.on('child_added', snap => {
            hotDogs.push({
                id: snap.key,
                title: snap.val().title,
                description: snap.val().description
            });
        });

        this.setState({
            hotDogsList: hotDogs
        });
    };

    addHotDog = (e) => {
        e.preventDefault();

        let title = this.refs.title.value;
        let description = this.refs.description.value;

        this.db.push().set({title: title, description: description});
    };

    render() {
        return(
            <div className="m-5">
                <h2>Add New Hot Dog</h2>
                <form onSubmit={this.addHotDog}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" ref="title"/>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" className="form-control" ref="description"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-warning" value="Add New" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateHotDog;