import './App.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router'
import {lazy, Suspense, useState} from "react";
import Loading from "./components/Loading.jsx";
import {persistor, store} from "./store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {ThemeToggle} from "./features/theme/ThemeTougle.jsx";
import {Gallery} from "./features/UI-Sandbox/Galery/Gallery.jsx";


function App() {
    const [selectedBox, setSelected] = useState('');
    const handleNavLink = (text) => {
        setSelected(text);
    };

    const ToDo = lazy(() => import("./features/to-do/ToDo.jsx"));
    const UISandbox = lazy(() => import("./features/UI-Sandbox/UISandbox.jsx"));
    const NotFound = lazy(() => import("./components/NotFound.jsx"));


    return (
        <Provider store={store}>
            <PersistGate loading={<Loading/>} persistor={persistor}>

                <BrowserRouter>
                    <header
                        className="flex justify-center items-center">
                        <div
                            className="w-full md:h-50 flex
                            flex-col md:flex-row justify-center items-center gap-4 lg:gap-40 shadow-lg p-20">
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
                            <ThemeToggle/>
                        </div>
                    </header>



                    <div className="flex justify-center items-center gap-5 flex-col mt-5">
                        <h1 className='text-2xl'>Sandbox {selectedBox}</h1>
                        <Suspense fallback={<Loading/>}>
                            <Routes>
                                <Route path="/todo" element={<ToDo/>}/>
                                <Route path='/ui-sandbox' element={<UISandbox/>}/>
                                <Route path='/galery' element={<Gallery name={'Галерея'}/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </BrowserRouter>
            </PersistGate>
        </Provider>


    )
        ;
}

export default App
