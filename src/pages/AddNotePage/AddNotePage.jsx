import React, { Component } from 'react';

class AddNotePage extends Component {
    state = {
        invalidForm: true,
        formData: {
            title: '',
            date: '',
            description: '',
            batteryAge: '',
            cleaned: ''
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
                    <div className="form-group">
                        <label>Days since battery change?</label>
                        <input 
                            className="form-control"
                            name="batteryAge"
                            value={this.state.formData.batteryAge}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Is the Hearing Aid clean?</label>
                        <input 
                            className="form-control"
                            name="cleaned"
                            value={this.state.formData.cleaned}
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
                </form>
            </React.Fragment>
        );
    }
}

export default AddNotePage;