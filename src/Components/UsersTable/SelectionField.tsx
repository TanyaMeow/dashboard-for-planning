import { NavLink, Route, Routes } from "react-router-dom";

import Description from "../Description";
import Board from "../Board/Board";
import Notes from "../Notes";
import UserTable from "./UserTable";

import reboot from '../../images/reboot.svg';
import increase from '../../images/increase.svg';
import setting from '../../images/setting.svg';

const SelectionField = () => {
    return (
        <div className='selection_block'>
            <div className='selection_board-block'>
                <nav className='selection_navigation'>
                    <NavLink to='/' className='select_nav'>Description</NavLink>
                    <NavLink to='/board' className='select_nav'>Board</NavLink>
                    <NavLink to='/notes' className='select_nav'>Notes</NavLink>
                    <NavLink to='/table' className='select_nav'>Table</NavLink>
                </nav>
                <div className='settings'>
                    <img src={reboot} alt=""/>
                    <img src={increase} alt=""/>
                    <img src={setting} alt=""/>
                </div>
            </div>

            <div className='board_content'>
                <Routes>
                    <Route
                        path='/'
                        element={<Description/>}
                    />
                    <Route
                        path='/board'
                        element={<Board/>}
                    />
                    <Route
                        path='/notes'
                        element={<Notes/>}
                    />
                    <Route
                        path='/table'
                        element={<UserTable/>}
                    />
                </Routes>
            </div>
        </div>
    )
}

export default SelectionField;