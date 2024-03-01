import {Button, Space, Table} from "antd";
import {DeleteTwoTone, EditTwoTone} from '@ant-design/icons'

import {useGetUsersQuery, useDeleteUserMutation} from "../store/services/users";
import Popup from "./Popup";
import {useState} from "react";
import {UserInterface} from "../Interface/UserInterface";
import dayjs from "dayjs";

const actionStyle = {
    fontSize: '16px'
}

const UserTable = () => {
    const [openPopup, setOpenPopup] = useState<boolean>(false);
    const [action, setAction] = useState('');
    const [currentUser, setCurrentUser] = useState<UserInterface>({
        dateOfBirth: "",
        email: "",
        id: "",
        name: "",
        phone: "",
        roles: "",
        surname: ""
    });

    const { data, error, isLoading } = useGetUsersQuery();
    const [deleteUser, resultDelete] = useDeleteUserMutation();

    const setPopupInfo = (action: string) => {
        setAction(action);

        setOpenPopup(true)
    }
    const setUserInfo = (user: UserInterface, action: string) => {
        const date = dayjs(user.dateOfBirth, 'DD/MM/YYYY');

        // @ts-ignore
        setCurrentUser({...user, dateOfBirth: date});

        setPopupInfo(action);
    }

    const columns: any = [
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
                    <DeleteTwoTone
                        onClick={() => deleteUser({id: record.id})}
                        style={actionStyle}
                    />
                    <EditTwoTone
                        onClick={() => setUserInfo(record, 'Change user' )}
                        style={actionStyle}
                    />
                </Space>
            )
        }
    ];

    return (
        <div className='table_block'>
            {openPopup &&
                <Popup
                    user={currentUser}
                    action={action}
                    onClose={(state: boolean) => setOpenPopup(state)}
                />
            }

            <div className='button_add-block'>
                <Button onClick={() => {
                    setPopupInfo('Add user')
                    setCurrentUser({
                        dateOfBirth: "",
                        email: "",
                        id: "",
                        name: "",
                        phone: "",
                        roles: "",
                        surname: ""
                    });
                }}>Add user</Button>
            </div>
            <Table
                dataSource={data}
                columns={columns}
            />
        </div>
    )
}

export default UserTable;