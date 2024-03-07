import { useForm } from "react-hook-form";

import dayjs from "dayjs";

import { Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons';



import { useAddUserMutation, useUpdateUserMutation} from "../../store/services/users";
import { UserInterface } from "../../Interface/UserInterface";
import FormField from "../FormField";

interface PopupProps {
    action: string,
    onClose: (state: boolean) => void,
    user: UserInterface
}

const SVGStyle = {
    color: '#1f0067',
    fontSize: '20px'
};
const optionsSelect: Record<string, string>[] = [
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
        },
        propsItem: {
            rules: [
                {
                    required: true,
                    message: 'Please input your name!',
                    whitespace: true,
                },
            ]
        }
    },
    {
        name: 'surname',
        formFieldType: 'input',
        title: 'Surname',
        props: {
            placeholder: 'Enter your surname...'
        },
        propsItem: {
            rules: [
                {
                    required: true,
                    message: 'Please input your surname!',
                    whitespace: true,
                },
            ]
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
            placeholder: 'Enter your email...',
        },
        propsItem: {
            rules: [
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
            ]
        }
    },
    {
        name: 'phone',
        formFieldType: 'input',
        title: 'Phone',
        props: {
            type: "tel"
        },
        propsItem: {
            rules: [
                {
                    type: 'tel',
                    message: 'The input is not valid phone!',
                }
            ]
        }
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
];

const Popup = ({action, onClose, user}: PopupProps) => {
    const {control, handleSubmit} = useForm<UserInterface>();

    const userInfo: string[] = Object.values(user);

    const [addUser, resultAdd] = useAddUserMutation();
    const [updateUser, resultUpdate] = useUpdateUserMutation();

    const onSubmit = handleSubmit((data: UserInterface): void => {
        switch (action) {
            case 'Add user':
                data.id = crypto.randomUUID();
                data.dateOfBirth = dayjs(data.dateOfBirth).format('YYYY/MM/DD');

                addUser(data);

                break;
            case 'Change user':
                data.dateOfBirth = dayjs(data.dateOfBirth).format('YYYY/MM/DD');

                updateUser({id: userInfo[0], data: data});

                break;
        }

        onClose(false);
    });

    return (
        <div className='popup_block'>
            <div className='popup_container'>
                <CloseOutlined onClick={() => onClose(false)} style={SVGStyle}/>

                <form className='popup_field' onSubmit={onSubmit}>
                    {forms.map((form, index: number) => (
                        <FormField
                            title={form.title}
                            control={control}
                            name={form.name}
                            formFieldType={form.formFieldType}
                            defaultValue={userInfo[index + 1]}
                            propsItem={form.propsItem}

                            {...form.props}
                        />
                    ))}
                    <Button type='primary' htmlType={"submit"}>
                        {action}
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Popup;