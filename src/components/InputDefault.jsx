export function InputDefault({onChange, value, type}) {
    return (
        <input
            className='p-2 shadow rounded-xl bg-dark-primary text-base-text'
            value={value} onChange={onChange} type={type}
        />
    )
}