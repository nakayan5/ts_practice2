
import React from 'react'

interface TodoListProps {
    items: { id: string, text: string }[];
    onDeleteTodo: (id: string) => void;
}

// この関数はジェネリック型
const TodoList: React.FC<TodoListProps> = (props) => {
    // const todos = [{id: 't1', text: 'tyescript'}];

    return (
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>
                    <span>
                        {todo.text}
                    </span>
                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>削除</button>
                </li>
            ))}
        </ul>
    )
};

export default TodoList