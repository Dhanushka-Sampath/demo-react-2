import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';//import another component
import NewToDoForm from './NewToDoForm';
import { removeTodo } from './actions';
import './TodoList.css';
import { displayAlert } from './thunks' 

const TodoList = ({todos=[], onRemovePressed, onDisplayAlertClicked})=>(
    <div className="list-wrapper">
        <NewToDoForm/>
        {todos.map(todo => <TodoListItem 
            todo={todo} 
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onDisplayAlertClicked}/>)}
    </div>

);

const mapStateToProps = state =>({
    todos: state.todos,
});

const mapDispatchToProps = dispatch =>({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onDisplayAlertClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);