import {useState} from "react";
import {InputDefault} from "../../../components/InputDefault.jsx";
import {ButtonDefault} from "../../../components/ButtonDefault.jsx";

export default function UpdTaskForm({tasks, setTasks, task,setIsOpen}) {
    const [formText, setFormText] = useState(task.text)
    const [empty, setEmpty] = useState(true)


    const validation = (textData) => {
        if (textData.length >= 3) {
            setEmpty(false)
        }
    }

    const handleAddText = (e) => {
        const text = e.target.value
        setFormText(text)
        validation(text)
    }

    const handleUpdateTask = (e) => {
        e.preventDefault()
        validation(formText)
        const updatedTask = {...task, text: formText};
        const newTasks = tasks.map((t) => (t.i === task.i ? updatedTask : t))
        setTasks(newTasks);
        setIsOpen(false);
    }

    return (
        <div>
            <form className='m-1 flex flex-col justify-center gap-1 mb-4'>
                <InputDefault
                    type={'text'}

                    onChange={handleAddText} value={formText}/>
                <ButtonDefault onClick={handleUpdateTask} disabled={empty} className='m-2 p-2 shadow rounded-lg'>
                    Update task
                </ButtonDefault>
            </form>
        </div>
    )
};