import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotes } from "./todoSlice";

const AddNotes = ({ todo }) => {
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();

  const handleAddNotes = () => {
    dispatch(addNotes({ id: todo.id, notes }));
  };

  return (
    <div>
      <h3>{todo.text}</h3>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      <button onClick={handleAddNotes}>Add Notes</button>
    </div>
  );
};

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default AddNotes;