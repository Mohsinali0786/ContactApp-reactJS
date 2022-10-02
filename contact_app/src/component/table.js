import { Divider, Radio, Table } from 'antd';
const columns = [
    {
        title: 'FirstName',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'LastName',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Date_Of_Birth',
        dataIndex: 'date_Of_Birth',
        key: 'date_Of_Birth',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },

];
export default function MyTable({ contacts }) {
    console.log('contactsta', contacts)

    return (

        <Table dataSource={contacts} columns={columns}  />
    )

}