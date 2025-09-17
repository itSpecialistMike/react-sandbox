import {useState} from "react";
import Modalka from "./Modalka.jsx";
import AddTaskForm from "./forms/AddTaskForm.jsx";
import UpdTaskForm from "./forms/UpdTaskForm.jsx";
import {ButtonDefault} from "../../components/ButtonDefault.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo} from "./todoSlice.js";
import TaskCard from "./components/TaskCard.jsx";

export default function ToDo() {
    const [isOpen, setIsOpen] = useState(false)
    const [modalChildren, setModalChildren] = useState()
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch();

    const handleRemoveTask = (task) => {
        dispatch(deleteTodo(task))
    }

    const handleAddTaskForm = () => {
        setModalChildren(<AddTaskForm
            tasks={todos}
            setIsOpen={setIsOpen}/>)
        setIsOpen(true)
    }

    const handleUpdTaskForm = (task) => {
        setModalChildren(<UpdTaskForm
            task={task}
            setIsOpen={setIsOpen}/>)
        setIsOpen(true)
    }

    return (
        <div
            className='flex items-center w-full md:w-2/4 justify-center flex-col md:flex-row p-20 md:rounded-2xl shadow-lg dark:bg-primary bg-pinky text-base-text dark:secondary-text'>
            <div className='m-1 flex items-center justify-center gap'>
                <div className='m-2 flex flex-col items-center justify-center'>
                    {todos.map((task, id) => (
                        <TaskCard key={id} task={task} handleRemoveTask={handleRemoveTask}
                                  handleUpdTaskForm={handleUpdTaskForm}>
                            <div className="flex flex-col items-center justify-center gap-2 text-center">
                                <h1 className='text-xl text-base-text'> {task.text}</h1>
                                <p className='text-3xl text-accent '>{task.status}</p>
                            </div>

                        </TaskCard>
                    ))}
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <ButtonDefault onClick={handleAddTaskForm}>Add task</ButtonDefault>
            </div>

            <Modalka isOpen={isOpen} children={modalChildren} onClose={() => setIsOpen(false)}>
            </Modalka>
        </div>
    )
}