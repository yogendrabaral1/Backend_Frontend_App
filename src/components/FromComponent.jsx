import React, { PureComponent } from 'react';

const hi = [1, 2, 3];
class Form extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailID: '',
            phoneNumber: '',
            dob: '',
            age: '',
            address: '',
            nationality: '',
            bloodGroup: ''
        };
    }

    handleChange = e => {
        let id = e.target.id;
        if (id === "firstName") {
            this.setState({
                firstName: e.target.value
            })
        }
        else if (id === "lastName") {
            this.setState({
                lastName: e.target.value
            })
        }
        else if (id === "emailID") {
            this.setState({
                emailID: e.target.value
            })
        }
        else if (id === "phoneNumber") {
            this.setState({
                phoneNumber: e.target.value
            })
        }
        else if (id === "dob") {
            this.setState({
                dob: e.target.value
            })
        }
        else if (id === "age") {
            this.setState({
                age: e.target.value
            })
        }
        else if (id === "address") {
            this.setState({
                address: e.target.value
            })
        }
        else if (id === "nationality") {
            this.setState({
                nationality: e.target.value
            })
        } else if (id === "bloodGroup") {
            this.setState({
                bloodGroup: e.target.value
            })
        } else {
            console.log("Nothing changed");
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const info = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailID: this.state.emailID,
            phoneNumber: this.state.phoneNumber,
            dob: this.state.dob,
            age: this.state.age,
            address: this.state.address,
            nationality: this.state.nationality,
            bloodGroup: this.state.bloodGroup,
        };
        //console.log(info);
        this.setState({
            firstName: '',
            lastName: '',
            emailID: '',
            phoneNumber: '',
            dob: '',
            age: '',
            address: '',
            nationality: '',
            bloodGroup: ''
        });
        this.props.storeFormData(info);
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.setState({
            firstName: '',
            lastName: '',
            emailID: '',
            phoneNumber: '',
            dob: '',
            age: '',
            address: '',
            nationality: '',
            bloodGroup: ''
        });
    }

    render() {
        console.log(this.hi);
        return (
            <div style={{ padding: 30, boxSizing: "border-box" }}>
                <div className="row">
                    <div className="logo" style={{ borderRadius: "50%", backgroundColor: "#dcf7f5", padding: 10, boxShadow: "3px 5px 10px #aaaaaa" }}>
                        <img src="/logo.png" alt="Pranam" width="70" height="70" />
                    </div>
                    <div style={{ paddingTop: 30, paddingLeft: 10 }}>
                        <h3>Pranam Sundarsath Ji</h3>
                    </div>
                </div>
                <div className="row">
                    <div style={{ width: "100%" }}>
                        <hr />
                        <h6>Please fill out the form</h6>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-12 col-md-6">
                                    <label>First Name *</label>
                                    <input type="text" value={this.state.firstName} className="form-control" onChange={this.handleChange} name="firstName" id="firstName" placeholder="First Name" required />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label>Last Name *</label>
                                    <input type="text" value={this.state.lastName} className="form-control" onChange={this.handleChange} name="lastName" id="lastName" placeholder="Last Name" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <label>Email Address</label>
                                    <input type="email" value={this.state.emailID} className="form-control" onChange={this.handleChange} name="emailID" id="emailID" placeholder="Email ID" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <label>Phone Number *</label>
                                    <input type="tel" value={this.state.phoneNumber} className="form-control" onChange={this.handleChange} name="phoneNumber" id="phoneNumber" placeholder="Phone Number" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12 col-md-6">
                                    <label>Date of Birth *</label>
                                    <input type="date" value={this.state.dob} className="form-control" onChange={this.handleChange} name="dob" id="dob" placeholder="Date of Birth" required />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label>Age</label>
                                    <input type="number" value={this.state.age} className="form-control" onChange={this.handleChange} name="age" id="age" placeholder="Age" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <label>Address *</label>
                                    <input type="text" value={this.state.address} className="form-control" onChange={this.handleChange} name="address" id="address" placeholder="Address" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12 col-md-6">
                                    <label>Nationality *</label>
                                    <input type="text" value={this.state.nationality} className="form-control" onChange={this.handleChange} name="nationality" id="nationality" placeholder="Nationality" required />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label>Blood Group *</label>
                                    <select className="form-control" name="bloodGroup" id="bloodGroup" onChange={this.handleChange} required>
                                        <option selected disabled value="">Select Blood Group</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12 col-md-6">
                                    <input type="submit" className="form-control btn btn-primary" name="submit" id="submit" value="Submit" />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <input type="reset" className="form-control btn btn-danger" onClick={this.handleCancel} name="cancel" id="cancel" value="Cancel" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;