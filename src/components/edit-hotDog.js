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

        window.location.replace("/list");
    };

    render() {
        return(
            <div className="m-5">
                <h2>Edit Hot Dog</h2>
                <form onSubmit={this.editHotDog}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" ref="title"/>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" className="form-control" ref="description"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-warning" value="Edit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditHotDog;