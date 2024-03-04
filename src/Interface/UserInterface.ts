import dayjs from "dayjs";

export interface UserInterface {
    id: string,
    name: string,
    surname: string,
    dateOfBirth: string | dayjs.Dayjs,
    email: string,
    phone: string,
    roles: string
}