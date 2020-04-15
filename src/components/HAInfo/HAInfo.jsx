import React, { component } from 'react';

class HAInfo extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            phoneNum: '',
            homeAddress: 'House number stree name',
            city: '',
            state: '',
            zipcode: '',

        }
    };
    
    formRef = React.createRef();
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddPersonal(this.state.formData);
    };
    
    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return(
           <React.Fragment>
               <h1>Add Personal Information (All Fields Required)</h1>
               <form ref={this.formRef} autoComplete="off"  onSubmit={this.handleSubmit}>
                   <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                       />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            className="form-control"
                            name="phoneNum"
                            value={this.state.formData.phoneNum}
                            onChange={this.handleChange}
                            required
                       />
                    </div>
                    <div className="form-group">
                        <label>Home Address</label>
                        <input
                            className="form-control"
                            name="homeAddress"
                            value={this.state.formData.homeAddress}
                            onChange={this.handleChange}
                            required
                       />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input
                            className="form-control"
                            name="city"
                            value={this.state.formData.city}
                            onChange={this.handleChange}
                            required
                       />
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input
                            className="form-control"
                            name="state"
                            value={this.state.formData.state}
                            onChange={this.handleChange}
                            required
                       />
                    </div>
                    <div className="form-group">
                        <label>Zip Code</label>
                        <input
                            className="form-control"
                            name="zipcode"
                            value={this.state.formData.zipcode}
                            onChange={this.handleChange}
                            required
                       />
                    </div>
                    <button
                        type="submit"
                        className="btn"
                        disabled={this.state.invalidForm}
                        >
                            Add Personal Information
                    </button>
               </form>
           </React.Fragment> 
        );
    }
}

export default HAInfo;