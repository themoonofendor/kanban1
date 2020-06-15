import React, {useState} from "react";
import plus from "../images/plus.svg";
import menu from "../images/menu.svg";
import CreateTaskModal from "./modals/CreateTaskModal";

function TopBar(props) {

    const [isCreateTaskMode, setCreateTaskMode] = useState(false);

    const onClickCreateTask = () => {
        setCreateTaskMode(true);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 p-0">
                    <h1 className="h1">Board</h1>
                </div>

                <div className="col-9 align-content-end text-right pr-0">
                    <CreateTaskModal isCreateTaskMode={isCreateTaskMode} setCreateTaskMode={setCreateTaskMode} createTask={props.createTask}/>
                    <div className="container-fluid pr-0">
                        <button type="button" className="btn btn-light my-button" onClick={() => onClickCreateTask()}>
                            Create <img src={plus} alt="Create"/>
                        </button>
                        <a href='/#'><img className='priority-ic ml-4' src={menu} alt='Menu'/></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopBar;