//this is our reducer
import { CREATE_TODO, REMOVE_TODO } from "./actions";

//reducer is a function. in this case, todo is the reducer
//everytime when any action is fired in the application, reducer get called.
//at that time the 2 arguments that passed to the reducer, is the current state of whatever resouce that reducer managing(in this case array of todo items), 2.action that is triggered. which is an object with type and payload.
export const todos = (state =[], action)=>{//setting default value to a reducer by passing empty array
    const{type, payload} = action;//get type and properties from the action argument

     //have a switch block and decide what to do based on that.
    switch(type){
        case CREATE_TODO:{
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO:{
            const { text } = payload;            
            return state.filter(todo => todo.text !== text);
        }
        default: 
            return state;//return the unchanged state if reducer doesnt make any change

    }   
}