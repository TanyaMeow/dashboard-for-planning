import {Controller, useForm} from "react-hook-form";

import {Button, Input, Select} from "antd";
import {DatePicker} from "antd/lib";

import { CloseOutlined } from '@ant-design/icons';
import Form from "./Form";
import {useUpdateUserMutation} from "../store/services/users";
import {UserInterface} from "../Interface/UserInterface";

interface FormData {
    name: string,
    surname: string,
    dateOfBirth: string,
    email: string,
    phone: string,
    roles: string
}

const SVGStyle = {
    color: '#1f0067',
    fontSize: '20px'
};
const optionsSelect = [
    {
        value: 'user',
        label: 'User'
    },
    {
        value: 'admin',
        label: 'Admin'
    },
    {
        value: 'manager',
        label: 'Manager'
    }
]

const forms = [
    {
        name: 'name',
        formFieldType: 'input',
        props: {
            placeholder: 'Enter your name...'
        }
    },
    {
        name: 'surname',
        formFieldType: 'input',
        props: {
            placeholder: 'Enter your surname...'
        }
    },
    {
        name: 'dateOfBirth',
        formFieldType: 'datePicker',
        props: {
            format: 'DD/MM/YYYY'
        }
    },
    {
        name: 'email',
        formFieldType: 'input',
        props: {
            placeholder: 'Enter your email...'
        }
    },
    {
        name: 'phone',
        formFieldType: 'input',
        props: {
            defaultValue: '+7'
        }
    },
    {
        name: 'roles',
        formFieldType: 'select',
        props: {
            placeholder: 'Select a role',
            options: optionsSelect
        }
    }
]

const Popup = () => {
    const { control, handleSubmit } = useForm<FormData>()
    const [updateUser, result] = useUpdateUserMutation();

    // const updatedUser = (modifiedUser: UserInterface) => {
    //     result.map((user: UserInterface): UserInterface => {
    //         if (user.id === modifiedUser.id) {
    //             return modifiedUser;
    //         }
    //         return user;
    //     });
    // }

    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div className='popup_block' >
            <div className='popup_container'>
                <CloseOutlined style={SVGStyle}/>

                <form className='popup_field'  onSubmit={onSubmit}>
                        {forms.map((form) => (
                            <Form
                                control={control}
                                name={form.name}
                                formFieldType={form.formFieldType}
                                {...form.props}
                            />
                        ))}
                        <button type='submit'>Добавить</button>
                </form>
            </div>
        </div>
    )
}

export default Popup;