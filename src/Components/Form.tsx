import {Controller} from "react-hook-form";
import {Input, Select} from "antd";
import {DatePicker} from "antd/lib";

interface FormProps {
    formFieldType: string,
    control: any,
    name: string
}

const fieldType = {
    select: Select,
    input: Input,
    datePicker: DatePicker
}
const Form = ({ control, name, formFieldType, ...restProps }: FormProps) => {
    // @ts-ignore
    const Component = fieldType[formFieldType];

    return (
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <Component
                    {...field}
                    {...restProps}
                />
            )}
        />
    )
}

export default Form;