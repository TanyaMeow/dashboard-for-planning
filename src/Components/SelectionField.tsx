import {NavLink, Route, Routes} from "react-router-dom";

import Description from "./Description";
import Board from "./Board";
import Notes from "./Notes";
import UserTable from "./UserTable";

import reboot from '../images/reboot.svg';
import increase from '../images/increase.svg';
import setting from '../images/setting.svg';

const SelectionField = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Description</NavLink>
                <NavLink to='/board'>Board</NavLink>
                <NavLink to='/notes'>Notes</NavLink>
                <NavLink to='/table'>Table</NavLink>
            </nav>
            <div className='settings'>
                <img src={reboot} alt=""/>
                <img src={increase} alt=""/>
                <img src={setting} alt=""/>
            </div>

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
    )
}

export default SelectionField;