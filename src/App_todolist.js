import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';
// import { Globalstyle } from './assets/js/style_global';
import './assets/css/reset.css';
import './assets/scss/todolist.scss';

function Control(props) {
  const { addTodo } = props;
  const inputRef = useRef();
  return (
    <div className="control-wrapper">
      <input ref={inputRef} type="text" placeholder="请输入新的 todo 项" className="todo-input" />
      <button onClick={() => { addTodo(inputRef.current.value); inputRef.current.value = ''; }}>添加</button>
    </div>
  );
}

function Todos(props) {
  const { list, removeTodo, toggleTodo } = props;
  return (
    <ul className="todos-wrapper">
      {
        list.map((item) => (
            <li key={item.id} className="todo-item">
              <input onChange={() => { toggleTodo(item); }} type="checkbox" checked={item.complete} />
              <span className={item.complete ? 'complete' : ''}>{item.value}</span>
              <button onClick={() => { removeTodo(item); }}>删除</button>
            </li>
        ))
      }

    </ul>
  );
}

function TodoList() {
  const [list, setList] = useState([]);
  const addTodo = useCallback((value) => {
    setList([...list, {
      id: list.length + 1,
      value,
      complete: false,
    }]);
  });

  const removeTodo = useCallback((todo) => {
    const newList = list.filter((item) => todo.id !== item.id);
    setList([...newList]);
  });

  const toggleTodo = useCallback((todo) => {
    const newList = list.map((item) => ({
      ...item,
      complete: item.id === todo.id ? !item.complete : item.complete,
    }));
    setList([...newList]);
  });

  return (
    <div className="todo-list-wrapper">
      <Control addTodo={addTodo}></Control>
      <Todos list={list} removeTodo={removeTodo} toggleTodo={toggleTodo}></Todos>
    </div>
  );
}

function App() {
  return (
    <div>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
