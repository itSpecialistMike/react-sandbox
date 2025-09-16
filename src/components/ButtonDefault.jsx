export function ButtonDefault({children, disabled, onClick}) {
    return (
        <button className={"m-2 p-2 shadow rounded-lg bg-secondary text-base-text hover:bg-accent transition duration-500"} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}