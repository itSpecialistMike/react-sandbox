import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./counterSlice.js";
import {ButtonDefault} from "../../../components/ButtonDefault.jsx";

export default function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className='rounded-2xl bg-primary p-2 w-full'>
            <h1>
                Счетчик
            </h1>
            <div className='p-20 flex items-center justify-center text-base w-full'>
                <ButtonDefault onClick={() => dispatch(increment())}>+</ButtonDefault>
                <div className='text-center w-10'>{count}</div>
                <ButtonDefault onClick={() => dispatch(decrement())}>-</ButtonDefault>
            </div>


        </div>
    )
}