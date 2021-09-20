import React, { useState } from 'react';
import './NewToDoForm.css';
import Button from "react-bootstrap/Button";//need to import a bootstrap button
import { connect } from 'react-redux';// need to import connect component
import { createTodo } from './actions';


const NewToDoForm = ({todos, onCreatePressed})=>{
    const [inputValue, setInputValue] = useState('');
    return(
        <div className="new-todo-form">
            <input className="new-todo-input" 
                   type="text"
                   placeholder="Type your new todo here"
                   value={inputValue}
                   onChange={e => setInputValue(e.target.value)}/> 
            <Button 
                onClick={()=>{
                    const isDuplicateText = todos.some(todo => todo.text === inputValue)
                    if(!isDuplicateText){
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }                   
                }}
                className="btn btn-danger">
                Create Todo
            </Button>
        </div>
    );  //e is the event
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);
