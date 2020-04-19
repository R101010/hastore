import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AddNotePage extends Component {
    state = {
        invalidForm: true,
        formData: {
            title: '',
            date: '',
            description: '',

        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddNote(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <React.Fragment>
                <h1>Add Note</h1>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title (required)</label>
                        <input
                            className="form-control"
                            name="title"
                            value={this.state.formData.title}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Current Date</label>
                        <input 
                            className="form-control"
                            name="currentDate"
                            value={this.state.formData.currentDate}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input 
                            className="form-control"
                            name="description"
                            value={this.state.formData.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="btn"
                        disabled={this.state.invalidForm}
                    >
                        ADD NOTE
                    </button>
                    <Link to='/'>CANCEL</Link>
                </form>
            </React.Fragment>
        );
    }
}

export default AddNotePage;