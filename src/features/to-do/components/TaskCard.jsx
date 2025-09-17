import {ButtonDefault} from "../../../components/ButtonDefault.jsx";

export default function TaskCard({children, task, handleRemoveTask, handleUpdTaskForm}) {
    return (
        <div
             className="m-1 flex justify-center flex-col gap-2">
            <div className="p1 flex items-center justify-center">
                {children}
            </div>
            <div className="flex justify-center">
                <ButtonDefault onClick={()=> handleRemoveTask(task)}>del</ButtonDefault>
                <ButtonDefault onClick={() => handleUpdTaskForm(task)}>edit </ButtonDefault>
            </div>

        </div>
    )
}