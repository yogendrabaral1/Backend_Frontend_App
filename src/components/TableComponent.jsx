import React from 'react';
import MaterialTable from 'material-table';

class TableData extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'First Name', field: 'firstName' },
                { title: 'Last Name', field: 'lastName' },
                { title: 'Email ID', field: 'emailID' },
                { title: 'Phone', field: 'phoneNumber' },
                { title: 'Age', field: 'age' },
                { title: 'Nationality', field: 'nationality' },
                { title: 'Blood Group', field: 'bloodGroup' },
                { title: 'Date of Birth', field: 'dob', cellStyle: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: 100 } },
                { title: 'Address', field: 'address', cellStyle: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: 100 } }
            ]
        };
    }

    handleRowClick = (e, rowData) => {
        console.log(e.target, rowData);
        window.location = '/' + rowData._id;
    }

    render() {
        return (
            <MaterialTable
                title="Sundarsath List"
                columns={this.state.columns}
                data={this.props.data}
                options={{
                    pageSize: 10,
                    pageSizeOptions: [20, 50, 100],
                    draggable: true
                }}
                onRowClick={this.handleRowClick}
            />
        );
    }
}

export default TableData;