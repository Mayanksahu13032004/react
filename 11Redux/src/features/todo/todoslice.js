import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[{id:1,text:"hello world"}]
}

// slice  reducer ka version hai

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    // reducers me property or function aate hai
    reducers:{
        // state or action ka hamesha access rahega state always the access of objects 
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
})


export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer