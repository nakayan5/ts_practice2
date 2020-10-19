import React, {useRef} from 'react'

type NewTodoProops = {
    // 型は関数で戻り値はvoid
    onAddTodo: (todoText: string) => void;
}

// type でも interface どちらでも問題なく動作する
// interface NewTodoProops {
//     onAddTodo: (text: string) => void;
// }

const NewTodo: React.FC<NewTodoProops> = (props) => {

    // submitされた時にこのDOM(input)にアクセスしてユーザーの入力値を取得する方法
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value
        props.onAddTodo(enteredText);
    }

    // ref={textInputRef} でrefオブジェクトとDOMを関連付けれる
    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">TODO内容</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit" >TODO追加</button>
        </form>
    )
}

export default NewTodo;