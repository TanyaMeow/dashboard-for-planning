import {Button, Space, Table} from "antd";
import {DeleteTwoTone, EditTwoTone} from '@ant-design/icons';
import relativeTime from 'dayjs/plugin/relativeTime';

import {useDeleteUserMutation, useGetUsersQuery} from "../store/services/users";
import Popup from "./Popup";
import {useState} from "react";
import {UserInterface} from "../Interface/UserInterface";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

const actionStyle = {
    fontSize: '16px'
}

const getAge = (birthDateString: string): number => {
    const date = dayjs(birthDateString);
    const birth = dayjs(date).format('YYYY-MM-DD');

    return parseInt(dayjs(birth).fromNow(true));
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
        const date = dayjs(user.dateOfBirth);

        // @ts-ignore
        setCurrentUser({...user, dateOfBirth: date});

        setPopupInfo(action);
    }

    const columns: any = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a: UserInterface, b: UserInterface) => a.name.length - b.name.length,
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
            sorter: (a: UserInterface, b: UserInterface) => a.surname.length - b.surname.length,
        },
        {
            title: 'Date of birth',
            dataIndex: 'dateOfBirth',
            key: 'dateOfBirth',
            sorter: (a: UserInterface, b: UserInterface) => {
                const aAge = getAge(a.dateOfBirth);
                const bAge = getAge(b.dateOfBirth);

                return aAge - bAge;
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a: UserInterface, b: UserInterface) => a.email.length - b.email.length,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Roles',
            dataIndex: 'roles',
            key: 'roles',
            filters: [
                {
                    text: 'Admin',
                    value: 'admin',
                },
                {
                    text: 'Manager',
                    value: 'manager',
                },
                {
                    text: 'User',
                    value: 'user',
                }
            ],
            onFilter: (value: string, record: UserInterface) => record.roles.indexOf(value) === 0,
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
                size={"middle"}
                dataSource={data}
                columns={columns}
            />
        </div>
    )
}

export default UserTable;