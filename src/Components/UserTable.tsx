import {Table} from "antd";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Surname',
        dataIndex: 'surname',
        key: 'surname'
    },
    {
        title: 'Date of birth',
        dataIndex: 'dateOfBirth',
        key: 'dateOfBirth'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone'
    },
    {
        title: 'Roles',
        dataIndex: 'roles',
        key: 'roles'
    },
];
const data = [
    {
        name: 'Tanya',
        surname: 'Khonyakina',
        dateOfBirth: '06/09/2002',
        email: 'faafafa@email.com',
        phone: "+79999999999",
        roles: ['admin', ', user']
    }
]

const UserTable = () => {
    return (
        <div className='table_block'>
            <Table
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default UserTable;