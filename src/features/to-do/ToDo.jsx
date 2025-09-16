import {useState} from "react";
import Modalka from "./Modalka.jsx";
import AddTaskForm from "./forms/AddTaskForm.jsx";
import UpdTaskForm from "./forms/UpdTaskForm.jsx";
import {ButtonDefault} from "../../components/ButtonDefault.jsx";
import {useLocation} from "react-router";

export default function ToDo() {
    const location = useLocation();
    console.log(location.pathname)
    const [tasks, setTasks] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [modalChildren, setModalChildren] = useState()

    const handleRemoveTask = (e) => {
        const [id] = findParentInfo(e)
        setTasks([...tasks.filter((task) => task.i !== id)]);
    }

    function findParentInfo(e) {
        e.preventDefault()
        const target = e.target.parentNode;
        const id = Number(target.dataset.id);
        const status = target.dataset.status
        const text = target.dataset.text
        return [id, status, text];
    }

    const handleAddTaskForm = () => {
        setModalChildren(<AddTaskForm
            tasks={tasks}
            setTasks={setTasks}
            setIsOpen={setIsOpen}/>)
        setIsOpen(true)
    }

    const handleUpdTaskForm = (task) => {
        setModalChildren(<UpdTaskForm
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            setIsOpen={setIsOpen}/>)
        setIsOpen(true)
    }

    return (
        <div
            className='flex items-center w-full md:w-2/4 justify-center flex-col md:flex-row p-20 md:rounded-2xl shadow-lg dark:bg-primary bg-pinky text-base-text dark:secondary-text'>
            <div className='m-1 flex items-center justify-center gap'>
                <ul className='m-2 flex flex-col items-center justify-center'>
                    {tasks.map((task, i) => (
                        <li key={i} data-id={task.i} data-status={task.status} data-text={task.text}>{task.text}
                            <ButtonDefault onClick={handleRemoveTask}>del</ButtonDefault>
                            <ButtonDefault onClick={() => handleUpdTaskForm(task)}>edit </ButtonDefault>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <ButtonDefault onClick={handleAddTaskForm}>Add task</ButtonDefault>
            </div>

            <Modalka isOpen={isOpen} children={modalChildren} onClose={() => setIsOpen(false)}>
            </Modalka>
        </div>
    )
}