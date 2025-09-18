
import {ButtonDefault} from "../../components/ButtonDefault.jsx";
import {useDispatch, useSelector} from "react-redux";
import {toggleTheme} from "./themeSlice.js";
import {useEffect} from "react";

export const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.value);

    const handleDark = () => {
        dispatch(toggleTheme('dark'));
        console.log(theme);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const handleLight = () => {
        dispatch(toggleTheme('light'));
    }

    return (
        <div>
            <ButtonDefault onClick={() => handleDark()}>Темная</ButtonDefault>
            <ButtonDefault onClick={() => handleLight()}>Светлая</ButtonDefault>
        </div>
    )
}