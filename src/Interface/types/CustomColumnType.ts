import {ColumnType} from "antd/es/table/interface";

type CustomColumnType<T> = Omit<ColumnType<T>, 'sorter'>

export type CustomColumnsType<T> = CustomColumnType<T> & { sorter?: () => void }