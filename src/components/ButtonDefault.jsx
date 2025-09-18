export function ButtonDefault({children, disabled, onClick}) {
    return (
        <button className={"m-2 p-2 shadow rounded-lg hover:bg-pink-400 text-white transition duration-500 bg-primary-400 dark:bg-primary"} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}