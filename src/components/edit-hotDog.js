import React, { Component } from 'react';
import firebase from "firebase/app";
import "firebase/database";

class EditHotDog extends Component {
    state = {
        hotDog: [],
        id: ''
    };

    componentDidMount() {
        const editHotDog = [];
        firebase.database().ref('/hotDogs/' + this.props.match.params.id).once('value', snapshot => {
            const title = snapshot.val().title;
            const description = snapshot.val().description;
            const id = snapshot.key;
            editHotDog.push(title, description);
            this.setState({hotDog: editHotDog, id: id});
        });
    }

    editHotDog = (e) => {
        e.preventDefault();
        let title = this.refs.title.value;
        let description = this.refs.description.value;

        firebase.database().ref().child('/hotDogs/' + this.state.id).update({ title: title, description: description });

        window.location.replace("https://kokc12.github.io/eliftech");
    };

    render() {
        return(
            <div className="main-box">
                <div className="box-item">
                    <h2>Edit Hot Dog</h2>
                    <form onSubmit={this.editHotDog}>
                        <label>Title:</label>
                        <input type="text" ref="title"/>
                        <label>Description:</label>
                        <input type="text" ref="description"/>
                        <input type="submit" className="btn-item" value="Edit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default EditHotDog;