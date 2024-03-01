import {useForm} from "react-hook-form";

import { CloseOutlined } from '@ant-design/icons';
import Form from "./Form";
import {useAddUserMutation, useUpdateUserMutation} from "../store/services/users";
import { UserInterface } from "../Interface/UserInterface";

interface PopupProps {
    action: string,
    id: string,
    onClose: (state: boolean) => any,
    user: UserInterface
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
        title: 'Name',
        props: {
            placeholder: 'Enter your name...'
        }
    },
    {
        name: 'surname',
        formFieldType: 'input',
        title: 'Surname',
        props: {
            placeholder: 'Enter your surname...'
        }
    },
    {
        name: 'dateOfBirth',
        formFieldType: 'datePicker',
        title: 'Date of birth',
        props: {
            format: 'DD/MM/YYYY'
        }
    },
    {
        name: 'email',
        formFieldType: 'input',
        title: 'Email',
        props: {
            placeholder: 'Enter your email...'
        }
    },
    {
        name: 'phone',
        formFieldType: 'input',
        title: 'Phone'
    },
    {
        name: 'roles',
        formFieldType: 'select',
        title: 'Role',
        props: {
            placeholder: 'Select a role',
            options: optionsSelect
        }
    }
]

const Popup = ({action, id, onClose, user}: PopupProps) => {
    const { control, handleSubmit } = useForm<UserInterface>();

    const userInfo = Object.values(user);

    const [addUser, resultAdd] = useAddUserMutation();
    const [updateUser, resultUpdate] = useUpdateUserMutation();

    const onSubmit = handleSubmit((data: UserInterface) => {
        switch (action) {
            case 'Add user':
                data.id = crypto.randomUUID();
                data.dateOfBirth = new Date(data.dateOfBirth)
                    .toLocaleString("en-GB")
                    .replace(', 00:00:00', '');

                addUser(data);
                break;
            case 'Change user':
                updateUser({id: userInfo[0], data: data});
                break;
        }

        onClose(false);

    });

    return (
        <div className='popup_block' >
            <div className='popup_container'>
                <CloseOutlined onClick={() => onClose(false)} style={SVGStyle}/>

                <form className='popup_field'  onSubmit={onSubmit}>
                        {forms.map((form, index) => (
                            <Form
                                defaultValue={userInfo[index + 1]}
                                title={form.title}
                                control={control}
                                name={form.name}
                                formFieldType={form.formFieldType}
                                {...form.props}
                            />
                        ))}
                        <button type='submit'>{action}</button>
                </form>
            </div>
        </div>
    )
}

export default Popup;