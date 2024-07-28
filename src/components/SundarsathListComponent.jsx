import React, { Component } from 'react';
import Form from './FromComponent';
import Table from './TableComponent';
import axios from 'axios';

class SundarsathList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.dataFetch();
    }

    storeFormData = (info) => {
        //console.log(info);
        axios.post('http://localhost:5000/sundarsath/add', info)
            .then(res => console.log(info, res))
            .catch(error => console.log(error));
        setTimeout(() => {
            this.dataFetch();
        }, 1000)
    }

    dataFetch() {
        axios.get('http://localhost:5000/sundarsath/')
            .then(res => {
                this.setState({
                    data: res.data
                });
                console.log('Backend responded with', res.data);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="row" style={{ width: "100%" }}>
                <div className="col-lg-4 col-12 form">
                    <Form storeFormData={this.storeFormData} />
                </div>
                <div className="col-lg-8 col-12 table" style={{ paddingLeft: 30 }}>
                    <br />
                    <Table data={this.state.data} />
                </div>
            </div>
        );
    }
}

export default SundarsathList;