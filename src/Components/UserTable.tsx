import {Button, Space, Table} from "antd";
import {DeleteTwoTone, EditTwoTone} from '@ant-design/icons'

import {useGetUsersQuery, useUpdateUserMutation} from "../store/services/users";

const actionStyle = {
    fontSize: '16px'
}

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
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (_: any, record: any) => (
            <Space size={"middle"}>
                <DeleteTwoTone style={actionStyle}/>
                <EditTwoTone style={actionStyle}/>
            </Space>
        )
    }
];

const UserTable = () => {
    const { data, error, isLoading } = useGetUsersQuery();

    return (
        <div className='table_block'>
            <div className='button_add-block'>
                <Button >Add user</Button>
            </div>
            <Table
                dataSource={data}
                columns={columns}
            />
        </div>
    )
}

export default UserTable;