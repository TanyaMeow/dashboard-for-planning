import {Progress} from "antd";
import SelectionField from "./SelectionField";

const SettingBoard = () => {
    return (
        <div>
            <div>
                <h1>🏙️</h1>
                <Progress type={"line"} percent={68}/>
            </div>
            <div>
                <div>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <div>
                        +1
                    </div>
                    <button>+ Add board</button>
                </div>
            </div>
            <SelectionField />
        </div>
    )
}

export default SettingBoard;