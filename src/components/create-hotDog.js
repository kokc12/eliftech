import React, {Component} from 'react';

class CreateHotDog extends Component {
    state = {
        hotDogsList: []
    };

    addHotDog = (e) => {
        e.preventDefault();

        let title = this.refs.title.value;
        let description = this.refs.description.value;

        this.state.hotDogsList.push({title, description});

        this.setState({
            hotDogsList: this.state.hotDogsList
        });
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