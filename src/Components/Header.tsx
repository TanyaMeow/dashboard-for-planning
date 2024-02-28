import {  AutoComplete, Input  } from 'antd';

import mail from '../images/mail.svg';
import notification from '../images/notification.svg';
import adminIcon from '../images/Frame 14.svg';

const Header = () => {
    return (
        <div>
            <div>
                <AutoComplete>
                    <Input.Search placeholder="Search..." />
                </AutoComplete>
            </div>

            <div>
                <img src={mail} alt=""/>
                <img src={notification} alt=""/>

                <div>
                    <img src={adminIcon} alt=""/>
                    <div>
                        <p>Alexandra C.</p>
                        <p>Admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;