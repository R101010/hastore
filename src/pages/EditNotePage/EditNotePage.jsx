import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditNotePage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.note
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateNote(this.state.formData);
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
            <>
                <h1>Edit Note</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Note's Title (required)</label>
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
                            name="date"
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
                        className="btn btn-xs"
                        disabled={this.state.invalidForm}
                    >
                        SAVE NOTE
                    </button>&nbsp;&nbsp;
                    <Link to='/'>CANCEL</Link>
                </form>
            </>
        );
    }
}

export default EditNotePage;