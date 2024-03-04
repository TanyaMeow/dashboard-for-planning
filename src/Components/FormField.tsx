import {Controller, useForm} from "react-hook-form";
import {Input, Select, Form} from "antd";
import {DatePicker} from "antd/lib";

interface FormProps {
    title: string,
    formFieldType: string,
    control: any,
    name: string,
    defaultValue: string,
    propsItem: any
}

const fieldType = {
    select: Select,
    input: Input,
    datePicker: DatePicker
}
const FormField = ({ control, name, title, formFieldType, defaultValue, propsItem, ...restProps }: FormProps) => {
    // @ts-ignore
    const {form} = useForm();
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