import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/IconButton';

class Sundarsath extends Component {
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
            bloodGroup: '',
            disabled: true
        };
    }

    componentDidMount() {
        this.sundarsathFetch();
    }

    sundarsathFetch() {
        axios.get('http://localhost:5000/sundarsath/' + this.props.match.params.id)
            .then(res => {
                console.log(res.data);
                let date = res.data.dob;
                date = date.split('T');
                this.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    emailID: res.data.emailID,
                    phoneNumber: res.data.phoneNumber,
                    dob: date[0],
                    age: res.data.age,
                    address: res.data.address,
                    nationality: res.data.nationality,
                    bloodGroup: res.data.bloodGroup,
                    disabled: true
                });
            })
            .catch(error => console.log(error));
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

    handleEdit = (e) => {
        e.preventDefault();
        this.setState({
            disabled: !this.state.disabled
        });
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
        axios.post('http://localhost:5000/sundarsath/update/' + this.props.match.params.id, info)
            .then(res => console.log(info, res))
            .catch(error => console.log(error));
        setTimeout(() => {
            this.sundarsathFetch();
        }, 1000);
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.sundarsathFetch();
    }

    render() {
        const name = this.state.firstName + ' ' + this.state.lastName;
        return (
            <div className="container">
                <div style={{ padding: 30, boxSizing: "border-box" }}>
                    <div>
                        <div className="logo" style={{ padding: 10, boxShadow: "3px 5px 10px #aaaaaa", width: 220 }}>
                            <img src="/logo.png" alt="Pranam" width="200" height="200" />
                        </div>
                        <br />
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <h3>{name}</h3>
                        </div>
                        <div className="col-4">
                            <a href="/">Home</a> / <a href="" onClick={this.handleEdit}>Edit</a>
                        </div>
                    </div>
                    <div className="row">
                        <div style={{ width: "100%" }}>
                            <hr />
                            <h5>Detail Information</h5>
                            <br />
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="form-group col-12 col-md-6">
                                        <label>First Name *</label>
                                        <input type="text" value={this.state.firstName} className="form-control" onChange={this.handleChange} name="firstName" id="firstName" placeholder="First Name" disabled={this.state.disabled} required />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label>Last Name *</label>
                                        <input type="text" value={this.state.lastName} className="form-control" onChange={this.handleChange} name="lastName" id="lastName" placeholder="Last Name" disabled={this.state.disabled} required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <label>Email Address</label>
                                        <input type="email" value={this.state.emailID} className="form-control" onChange={this.handleChange} name="emailID" id="emailID" disabled={this.state.disabled} placeholder="Email ID" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <label>Phone Number *</label>
                                        <input type="tel" value={this.state.phoneNumber} className="form-control" onChange={this.handleChange} name="phoneNumber" id="phoneNumber" placeholder="Phone Number" disabled={this.state.disabled} required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12 col-md-6">
                                        <label>Date of Birth *</label>
                                        <input type="date" value={this.state.dob} className="form-control" onChange={this.handleChange} name="dob" id="dob" placeholder="Date of Birth" disabled={this.state.disabled} required />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label>Age</label>
                                        <input type="number" value={this.state.age} className="form-control" onChange={this.handleChange} name="age" id="age" disabled={this.state.disabled} placeholder="Age" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <label>Address *</label>
                                        <input type="text" value={this.state.address} className="form-control" onChange={this.handleChange} name="address" id="address" placeholder="Address" disabled={this.state.disabled} required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12 col-md-6">
                                        <label>Nationality *</label>
                                        <input type="text" value={this.state.nationality} className="form-control" onChange={this.handleChange} name="nationality" id="nationality" placeholder="Nationality" disabled={this.state.disabled} required />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label>Blood Group *</label>
                                        <select className="form-control" name="bloodGroup" value={this.state.bloodGroup} id="bloodGroup" onChange={this.handleChange} disabled={this.state.disabled} required>
                                            <option selected disabled>Select Blood Group</option>
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
                                    <div className="form-group col-12 col-md-3">
                                        <input type="submit" className="form-control btn btn-primary" name="submit" id="submit" value="Submit" disabled={this.state.disabled} />
                                    </div>
                                    <div className="form-group col-12 col-md-3">
                                        <input type="reset" className="form-control btn btn-danger" onClick={this.handleCancel} name="cancel" id="cancel" value="Cancel" disabled={this.state.disabled} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sundarsath;