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
            <main>
                <div className="main-box">
                    {this.props.hotDogsList.map((hotDog) =>
                        <div className="box-item" key={hotDog.id}>
                            <div className="item-wrap">
                                <div className="item-title">
                                    <h4>{hotDog.title}</h4>
                                </div>
                                <div className="item-text">
                                    <p>{hotDog.description}</p>
                                </div>
                            </div>
                            <div className="box-btn">
                                <button className="btn-item" onClick={() => this.deleteHotDog(hotDog.id)}>Delete</button>
                                <Link to={"/edit/" + hotDog.id}><button className="btn-item">Edit</button></Link>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        )
    }
}

export default HotDogsList;