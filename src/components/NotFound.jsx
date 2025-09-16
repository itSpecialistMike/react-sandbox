import {useLocation} from 'react-router'

export function NotFound() {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div className='flex flex-col items-center justify-center bg-primary text-accent p-20 rounded-2xl'>
            <h1 className='text-xl'>Тут ничего нет!</h1>
            <p className='text-4xl'>404</p>
        </div>
    )
}