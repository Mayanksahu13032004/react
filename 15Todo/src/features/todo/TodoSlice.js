import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[{id:1,text:"hello world",notes:"This is a notes 1"},
    {id:2,text:"hello",notes:"This is a notes 2"}]
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
        addNotes: (state, action) => {
            const { id, notes } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
              todo.notes = notes; // updating notes field
            }
          },
    }
})


export const {addTodo,removeTodo,addNotes}=todoSlice.actions

export default todoSlice.reducer