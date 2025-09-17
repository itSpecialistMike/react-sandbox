import {useState} from "react";
import {ButtonDefault} from "../../../components/ButtonDefault.jsx";
import {InputDefault} from "../../../components/InputDefault.jsx";
import {useDispatch} from "react-redux";
import {addTodo} from "../todoSlice.js";

export default function AddTaskForm({setIsOpen}) {
    const [formText, setFormText] = useState('')
    const [empty, setEmpty] = useState(true)
    const dispatch = useDispatch();

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
        const id = Number(Date.now())
        const taskData = {id: id, text: formText, status: 'to-do'}
        dispatch(addTodo(taskData))
        setFormText('')
        setEmpty(true)
        setIsOpen(false)
    };


    return (<div>
            <form className='m-1 flex flex-col justify-center gap-1 mb-4'>
                <InputDefault
                    onChange={handleAddText}
                    value={formText}
                    type='text'
                />
                <ButtonDefault onClick={(e) => handleAddTask(e)} disabled={empty}>
                    add task
                </ButtonDefault>
            </form>
        </div>)
};