import React, {useState} from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import {Todo} from './todo.model'　// exportされたインターフェース


const App: React.FC = () => {
  // useStateの空の配列はnever型として推測される。そのためどういう型であるかを明確に指定する必要がある
  // useStateはジェネリック型の関数なのでジェネリック型を使って型指定できる
  // const [todos, setTodos] = useState<{id: string, text: string}[]>([]);
  //上の書き方でも問題はないがこの型を別のところでも利用したい場合は別ファイルにインターフェースとして定義し、exportする
  
  // 元々 const todos = [{id: 't1', text: 'tyescript'}];
  const [todos, setTodos] = useState<Todo[]>([]);
  // const [todos, setTodos] = useState([]);
  // ↑　ではTypeScriptは常に空の[]と推論してしまう
  // useStateはジェネリック型の関数なのでジェネリック型<>で型を指定できる


  const todoAddHandler = (text: string) => {
    //スプレッド構文用いてtodosを更新することも可能だが、reactはstateの更新を非同期で行うのでtodosの値が常に最新であるとは限らない
    // setTodos([...todos, {id: Math.random().toString(), text: text}]);
    setTodos((prevTodos) => [
      ...prevTodos, 
      {id: Math.random().toString(), text: text}
    ]);
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}


export default App;
