import Counter from "./Counter/Counter.jsx";

export default function UISandbox() {
    return (
        <div className="w-full md:w-3/4 text-center flex flex-col items-center justify-center h-full">
            <h1 className='text-xl mt-10 text-primary-800'>Тут полигон</h1>
            <div className='flex flex-col lg:flex-row justify-center'>
                <Counter/>
            </div>
        </div>
    )

}