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
        <div className='navigation_block'>
            <div className='navigation_container'>
                <img className='logo' src={logo} alt=""/>

                <nav className='navigation'>
                    <Menu className={'navigation'}>
                        <div className='nav'>
                            <img src={layoutBlock} alt=""/>
                        </div>
                        <div className='nav current'>
                            <img src={layout} alt=""/>
                        </div>
                        <div className='nav'>
                            <img  src={document} alt=''/>
                        </div>
                        <div className='nav'>
                            <img  src={commercial} alt=""/>
                        </div>
                        <div className='nav'>
                            <img  src={chat} alt=""/>
                        </div>
                        <div className='nav'>
                            <img  src={dark_theme} alt=""/>
                        </div>
                    </Menu>
                </nav>
            </div>

            <img src={remove} alt=""/>
        </div>
    )
}

export default Navigation;