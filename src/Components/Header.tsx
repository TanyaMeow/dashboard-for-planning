import {  AutoComplete, Input  } from 'antd';

import {SearchOutlined} from '@ant-design/icons';

import mail from '../images/mail.svg';
import notification from '../images/notification.svg';
import adminIcon from '../images/Frame 14.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className='header_search'>
                <AutoComplete>
                    <Input addonBefore={<SearchOutlined />} placeholder="Search..." className={'search'}/>
                </AutoComplete>
            </div>

            <div className='header_user'>
                <img src={mail} alt=""/>
                <img src={notification} alt=""/>

                <div className='user_account'>
                    <img src={adminIcon} alt=""/>
                    <div className='username'>
                        <p>Alexandra C.</p>
                        <p>Admin</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;