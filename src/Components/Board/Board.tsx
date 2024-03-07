import {Avatar, Form, List} from "antd";
import { UserOutlined } from '@ant-design/icons';

interface DataUserInterface {
    address: string
}

const data: DataUserInterface[] = [
    {
        address: '5 OG Heinrich-Brüning-Str. 1, Schön Thilo, BY 06442'
    },
    {
        address: 'Suite 512 636 Wilkinson Prairie, Felishahaven, NH 98039'
    },
    {
        address: 'Barranco Elsa 9, Leganés, Nav 74979'
    },
    {
        address: 'Barranco Elsa 9, Leganés, Nav 74979'
    }
]

const Board = () => {
    return (
        <div className='board_block'>
            <div className='user_account-address'>
                <Avatar icon={ <UserOutlined /> } />
                <p className='username'>User</p>
            </div>

            <List
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <p className='adress'>address {index + 1}</p>
                        <List.Item.Meta
                            key={index}
                            title={<p>{item.address}</p>}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Board;