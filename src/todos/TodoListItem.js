import React from 'react';
import './TodoListItem.css';
import Button from "react-bootstrap/Button";

const TodoListItem = ({todo, onRemovePressed})=>(
    <div className="todo-item-container">
        <h4 className="todo-text">{todo.text}</h4>
        <div className="buttons-container">
            <button className="completed-button">Mark as Completed</button>
            <Button 
                onClick={()=>onRemovePressed(todo.text)}//when ever click the button it should called the onRemovePressed function with the text of todo
                className="removed-button btn btn-secondary btn-sm">Remove</Button>
        </div> 
    </div>
);
//first one is a normal button. second one is a bootstap Button
export default TodoListItem;
