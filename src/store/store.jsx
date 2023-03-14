import { configureStore } from "@reduxjs/toolkit";
import { apiTodo } from "./sliceApi/sliceTodoApi";
import { sliceTodo } from "./sliceTodoState/silceTodo";


const store = configureStore({
    reducer: {
        [sliceTodo.name]: sliceTodo.reducer,
        [apiTodo.reducerPath]: apiTodo.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiTodo.middleware),

})

export default store