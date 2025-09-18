export function InputDefault({onChange, value, type}) {
    return (
        <input
            placeholder="Введите че хотите"
            className='p-2 shadow-xl rounded-xl dark:bg-base-text bg-base-text'
            value={value} onChange={onChange} type={type}
        />
    )
}