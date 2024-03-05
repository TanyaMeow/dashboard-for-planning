import { Control, Controller } from "react-hook-form";

import { Input, Select, Form, FormInstance } from "antd";
import { DatePicker } from "antd/lib";

import { UserInterface } from "../Interface/UserInterface";

interface FormProps {
    title: string,
    formFieldType: string,
    control: Control<UserInterface, any, UserInterface>,
    name: any,
    defaultValue: string,
    propsItem: any
}

const fieldType = {
    select: Select,
    input: Input,
    datePicker: DatePicker
}
const FormField = ({ control, name, title, formFieldType, defaultValue, propsItem, ...restProps }: FormProps) => {
    const [form] = Form.useForm<FormInstance>();
    // @ts-ignore
    const Component = fieldType[formFieldType];

    return (
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <Form
                        form={form}
                        name="register"
                        scrollToFirstError
                    >
                        <Form.Item
                            label={title}
                            name={title}
                            {...propsItem}
                        >
                            <Component
                                defaultValue={defaultValue ? defaultValue : ''}
                                {...field}
                                {...restProps}
                            />
                        </Form.Item>
                    </Form>
                )}
            />
    )
}

export default FormField;