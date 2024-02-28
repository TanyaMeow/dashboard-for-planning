import {Progress, Avatar, Button} from "antd";
import SelectionField from "./SelectionField";

const SettingBoard = () => {
    return (
        <div className='setting_block'>
            <div className='boards_block'>
                <div className='progress_bar'>
                    <div className='board_icon'>
                        <h1>🏙️</h1>
                    </div>
                    <Progress
                        type={"line"}
                        className={'indicator'}
                        percent={68}
                        strokeColor={'#6E6AF0'}
                    />
                    <p className='complete'>complete</p>
                </div>
                <div className='users_board'>
                    <div className='users'>
                        <Avatar.Group>
                            <Avatar className='user_icon'>A</Avatar>
                            <Avatar className='user_icon'>Б</Avatar>
                            <Avatar className='user_icon'>В</Avatar>
                            <Avatar className='user_icon'>Г</Avatar>
                            <Avatar className='user_icon'>+1</Avatar>
                        </Avatar.Group>
                        <Button className='board_button'>+ Add board</Button>
                    </div>
                </div>
            </div>
            <SelectionField/>
        </div>
    )
}

export default SettingBoard;