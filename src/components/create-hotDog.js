import React, {Component} from 'react';

class CreateHotDog extends Component {
    state = {
        id: '',
        title: '',
        description: '',
        img: ''
    };

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    createFormSubmit = (e) => {
        e.preventDefault();

        this.setState({
            id: '',
            title: '',
            description: '',
            img: ''
        })
    };

    render() {
        return(
            <div className="m-5">
                <h2>Add New Hot Dog</h2>
                <form onSubmit={this.createFormSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
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