import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./features/UI-Sandbox/Counter/counterSlice.js";
import todoReducer from "./features/to-do/todoSlice.js";
import themeReducer from "./features/theme/themeSlice.js";
import { persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";


const todoPersistConfig = {
    key: 'todo',
    storage,
}

const themePersistConfig = {
    key: 'theme',
    storage,
}

const persistedTodoReducer = persistReducer(todoPersistConfig, todoReducer);
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: persistedTodoReducer,
        theme: persistedThemeReducer
    }
})

export const persistor = persistStore(store)