import './App.css'
import ToDo from "./features/to-do/ToDo.jsx";
import {BrowserRouter, Link, Route, Routes, useParams} from 'react-router'
import {NotFound} from "./components/NotFound.jsx";

function App() {
    return (
        <BrowserRouter>
            <header
                className="flex justify-center items-center bg-primary dark:bg-dark-primary text-base-text dark:secondary-text">
                <div
                    className="w-full h-50 flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-40 shadow-lg">
                    <Link to="/todo">Список задач</Link>
                    <Link to="/calculator">Калькулятор</Link>
                    <Link to="/galery">Галерея</Link>
                    <Link to="/ui-sandbox">UI песочница</Link>
                </div>
            </header>

            <div className="flex justify-center items-center gap-5 flex-col mt-5">
                <h1 className='text-2xl text-dark-primary'>Sandbox </h1>
                <Routes>
                    <Route path="/todo" element={<ToDo/>}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </div>

        </BrowserRouter>


    );
}

export default App
