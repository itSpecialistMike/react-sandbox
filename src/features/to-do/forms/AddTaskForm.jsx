import {useState} from "react";
import {ButtonDefault} from "../../../components/ButtonDefault.jsx";
import {InputDefault} from "../../../components/InputDefault.jsx";

export default function AddTaskForm({tasks, setTasks, setIsOpen}) {
    const [formText, setFormText] = useState('')
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

    const handleAddTask = (e) => {
        e.preventDefault()
        const id = tasks.length + 1
        const taskData = {i: id, text: formText, status: 'to-do'}
        setTasks([...tasks, taskData])
        setFormText('')
        setEmpty(true)
        setIsOpen(false)
    };



    return (
        <div>
            <form className='m-1 flex flex-col justify-center gap-1 mb-4'>
                <InputDefault
                    onChange={handleAddText}
                    value={formText}
                    type='text'
                />
                <ButtonDefault onClick={handleAddTask} disabled={empty}>
                    add task
                </ButtonDefault>
            </form>
        </div>
    )
};