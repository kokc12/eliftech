import React, { Component } from 'react';
import firebase from "firebase/app";
import "firebase/database";
import { Link } from "react-router-dom";

class HotDogsList extends Component {

    deleteHotDog = (id) => {
        firebase.database().ref(`/hotDogs/${id}`).remove();
        this.props.getHotDogs();
    };

    render() {
        return(
            <div className="m-5">
                <ul className="list-group list-group-flush">
                    {this.props.hotDogsList.map((hotDog) =>
                        <li className="list-group-item" key={hotDog.id}>
                            <h3>{hotDog.title}</h3>
                            <p>{hotDog.description}</p>
                            <button className="btn btn-danger" onClick={() => this.deleteHotDog(hotDog.id)}>Delete</button>
                            <Link to={"/edit/" + hotDog.id}><button className="btn btn-primary m-2">Edit</button></Link>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default HotDogsList;