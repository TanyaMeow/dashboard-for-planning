import React, { useState } from "react";

import { Button, Space, Table } from "antd";
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

import { useDeleteUserMutation, useSortUsersQuery } from "../store/services/users";

import Popup from "./Popup";

import { UserInterface } from "../Interface/UserInterface";
import { ColumnsType } from "antd/es/table";
import { CustomColumnsType } from "../Interface/types/CustomColumnType";

dayjs.extend(relativeTime);

const actionStyle = {
    fontSize: '16px'
}

const UserTable = () => {
    const [openPopup, setOpenPopup] = useState<boolean>(false);
    const [action, setAction] = useState<string>('');
    const [currentUser, setCurrentUser] = useState<UserInterface>({
        id: '',
        name: '',
        surname: '',
        dateOfBirth: '',
        email: '',
        phone: '+7',
        roles: ''
    });

    const [order, setOrder] = useState<string>('');
    const { data, error, isLoading } = useSortUsersQuery({ order: order });

    const [deleteUser, resultDelete] = useDeleteUserMutation();

    const setPopupInfo = (action: string): void => {
        setAction(action);

        setOpenPopup(true);
    }
    const setUserInfo = (user: UserInterface, action: string): void => {
        const date: dayjs.Dayjs = dayjs(user.dateOfBirth);

        setCurrentUser({...user, dateOfBirth: date});

        setPopupInfo(action);
    }

    const sorterFn = (sortOrder: string): void => {
        setOrder(sortOrder);

        if (order === sortOrder) {
            setOrder('-' + sortOrder)
        }
    }

    const columns: CustomColumnsType<UserInterface>[] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: () => sorterFn('name'),
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
            sorter: () => sorterFn('surname')
        },
        {
            title: 'Date of birth',
            dataIndex: 'dateOfBirth',
            key: 'dateOfBirth',
            sorter: () => sorterFn('dateOfBirth')
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: () => sorterFn('email')
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            sorter: () => sorterFn('phone')
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
            onFilter: (value: boolean | React.Key, record: UserInterface): boolean => record.roles.indexOf(value as string) === 0,
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
                <Button onClick={(): void => {
                    setPopupInfo('Add user')
                    setCurrentUser({
                        id: '',
                        name: '',
                        surname: '',
                        dateOfBirth: '',
                        email: '',
                        phone: '+7',
                        roles: ''
                    });
                }}>Add user</Button>
            </div>
            <Table
                size={"middle"}
                dataSource={data}
                columns={columns as ColumnsType<UserInterface>}
            />
        </div>
    )
}

export default UserTable;