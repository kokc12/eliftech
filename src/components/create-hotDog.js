import React, { Component } from 'react';
import "firebase/database";

class CreateHotDog extends Component {
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