import React, { useState } from "react";

import { Button, Space, Table } from "antd";
import { DeleteTwoTone, EditTwoTone, CaretDownOutlined } from '@ant-design/icons';

import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

import {useDeleteUserMutation, useGetUsersQuery, useSortUsersQuery} from "../store/services/users";

import Popup from "./Popup";

import { UserInterface } from "../Interface/UserInterface";
import {ColumnsType} from "antd/es/table";

dayjs.extend(relativeTime);

const actionStyle = {
    fontSize: '16px'
}

const getAge = (birthDateString: string): number => {
    const date: dayjs.Dayjs = dayjs(birthDateString);
    const birth: string = dayjs(date).format('YYYY-MM-DD');

    return parseInt(dayjs(birth).fromNow(true));
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

    const { data, error, isLoading } = useGetUsersQuery();

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

    const columns: ColumnsType<UserInterface> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a: UserInterface, b: UserInterface): number => a.name.length - b.name.length,
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
            sorter: (a: UserInterface, b: UserInterface): number => a.surname.length - b.surname.length,
        },
        {
            title: 'Date of birth',
            dataIndex: 'dateOfBirth',
            key: 'dateOfBirth',
            sorter: (a: UserInterface, b: UserInterface): number => {
                const aAge: number = getAge(a.dateOfBirth as string);
                const bAge: number = getAge(b.dateOfBirth as string);

                return aAge - bAge;
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a: UserInterface, b: UserInterface): number => a.email.length - b.email.length,
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
                columns={columns}
            />
        </div>
    )
}

export default UserTable;