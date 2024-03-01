import {Controller} from "react-hook-form";
import {Input, Select} from "antd";
import {DatePicker} from "antd/lib";

interface FormProps {
    formFieldType: string,
    control: any,
    name: string,
    title: string,
    defaultValue: string
}

const fieldType = {
    select: Select,
    input: Input,
    datePicker: DatePicker
}
const Form = ({ title, control, name, formFieldType, defaultValue, ...restProps }: FormProps) => {
    // @ts-ignore
    const Component = fieldType[formFieldType];

    return (
        <div>
            <p className='title_form'>{title}</p>

            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <Component
                        defaultValue={defaultValue ? defaultValue : ''}
                        {...field}
                        {...restProps}
                    />
                )}
            />
        </div>
    )
}

export default Form;