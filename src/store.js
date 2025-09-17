import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./features/UI-Sandbox/Counter/counterSlice.js";
import todoReducer from "./features/to-do/todoSlice.js";
import { persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: persistedReducer,
    }
})

export const persistor = persistStore(store)