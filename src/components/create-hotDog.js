import React, { Component } from 'react';
import "firebase/database";

class CreateHotDog extends Component {
    state = {
        checkInput: ''
    };

    checkIfEmpty = (e) => {
        this.setState({
            checkInput: e.target.value
        })
    };

    addHotDog = (e) => {
        e.preventDefault();

        let title = this.refs.title.value;
        let description = this.refs.description.value;

        this.props.db.push().set({
            title: title,
            description: description});

        window.location.replace("https://kokc12.github.io/eliftech");
    };

    render() {
        return(
            <div className="main-box">
                <div className="box-item">
                    <h2>Add New Hot Dog</h2>
                    <form onSubmit={this.addHotDog}>
                        <label>Title:</label>
                        <input type="text" onChange={this.checkIfEmpty} ref="title"/>
                        <label>Description:</label>
                        <input type="text" onChange={this.checkIfEmpty} ref="description"/>
                        <input type="submit" className="btn-item" disabled={!this.state.checkInput} value="Add New" />
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateHotDog;