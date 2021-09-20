import './App.css';
import TodoList from './todos/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';//adding bootstrap to a react project --> npm install react-bootstrap bootstrap

const App = ()=>(
  <div className="App">
    <TodoList/>
  </div>
);

export default App;
