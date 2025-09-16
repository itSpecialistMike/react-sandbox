import './App.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router'
import {useState, lazy, Suspense} from "react";
import Loading from "./components/Loading.jsx";


function App() {
    const [selectedBox, setSelected] = useState('');
    const handleNavLink = (text) => {
        setSelected(text);
    };

    const ToDo = lazy(()=> import("./features/to-do/ToDo.jsx"));
    const UISandbox = lazy(() => import("./features/UI-Sandbox/UISandbox.jsx"));
    const NotFound = lazy(() => import("./components/NotFound.jsx"));

    return (
        <BrowserRouter>
            <header
                className="flex justify-center items-center bg-primary dark:bg-dark-primary text-base-text dark:secondary-text">
                <div
                    className="w-full h-50 flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-40 shadow-lg">
                    <Link to="/todo"
                          onClick={(e) => handleNavLink(e.target.textContent)}
                          className={`transition-all duration-300 ease-in-out transform 
                          ${selectedBox === 'Список задач' ? 'text-3xl' : ''}`}>
                        Список задач
                    </Link>
                    <Link to="/calculator"
                          onClick={(e) => handleNavLink(e.target.textContent)}
                          className={`transition-all duration-300 ease-in-out transform 
                          ${selectedBox === 'Калькулятор' ? 'text-3xl' : ''}`}>
                        Калькулятор
                    </Link>
                    <Link to="/galery"
                          onClick={(e) => handleNavLink(e.target.textContent)}
                          className={`transition-all duration-300 ease-in-out transform 
                          ${selectedBox === 'Галерея' ? 'text-3xl' : ''}`}>
                        Галерея
                    </Link>
                    <Link to="/ui-sandbox"
                          onClick={(e) => handleNavLink(e.target.textContent)}
                          className={`transition-all duration-300 ease-in-out transform 
                          ${selectedBox === 'UI песочница' ? 'text-3xl' : ''}`}>
                        UI песочница
                    </Link>
                </div>
            </header>

            <div className="flex justify-center items-center gap-5 flex-col mt-5">
                <h1 className='text-2xl text-dark-primary'>Sandbox {selectedBox}</h1>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/todo" element={<ToDo/>}/>
                        <Route path='/ui-sandbox' element={<UISandbox/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Suspense>

            </div>

        </BrowserRouter>


    );
}

export default App
