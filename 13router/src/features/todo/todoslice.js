import { createSlice,nanoid } from "@reduxjs/toolkit";

// fisrt initial state

const initialState={
    todos:[{id:1,text:"hello world"}]
}

export const todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            // state updated
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !=action.payload)
        },
    }
})

export  const {addTodo,removeTodo}=todoslice.actions
export default todoslice.reducer
