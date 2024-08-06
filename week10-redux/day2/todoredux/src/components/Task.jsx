import { useRef } from 'react';
import { addTask, deleteTask, updateTask } from "../redux/actions.js";
import { connect } from "react-redux";

const Task = (props) => {

    const taskRef = useRef()

    const newTask = () => {
        const name = taskRef.current.value;
        props.add({ name });
        taskRef.current.value = ''
    };

    const changeThisTask = (e, id) => {
        props.update({ id });
    };


    return (
        <>
            <h2>To-Do List</h2>

            <div>
                <input ref={taskRef} type="text" placeholder="Your task..." name="name" />
                <button onClick={newTask}>Add</button>
            </div>
            {
                props.tasks.map(task => {
                    return <div key={ task.id } className='task'>
                        <input type="checkbox" name="checkbox" id="" onChange={(e) => changeThisTask(e, task.id)}/>
                        <h3>{ task.name }</h3>
                        <button onClick={ () => { props.delete({ id: task.id }); } }>Delete</button>
                    </div>;
                })
            }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        tasks: state.todoReducer.tasks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (val) => dispatch(addTask(val)),
        delete: (id) => dispatch(deleteTask(id)),
        update: (isComplited) => dispatch(updateTask(isComplited))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);