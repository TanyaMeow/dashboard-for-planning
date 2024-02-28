import {Menu} from "antd";

import logo from '../images/logo.svg';
import layoutBlock from '../images/layout-block.svg';
import layout from '../images/layout.svg';
import document from '../images/document.svg';
import commercial from '../images/comercial.svg';
import chat from '../images/chat.svg';
import dark_theme from '../images/dark_theme.svg';
import remove from '../images/remove.svg';

const Navigation = () => {
    return (
        <div>
            <img src={logo} alt=""/>

            <nav className='navigation'>
                <Menu>
                    <img src={layoutBlock} alt=""/>
                    <img src={layout} alt=""/>
                    <img src={document} alt=''/>
                    <img src={commercial} alt=""/>
                    <img src={chat} alt=""/>
                    <img src={dark_theme} alt=""/>
                </Menu>
            </nav>

            <img src={remove} alt=""/>
        </div>
    )
}

export default Navigation;