import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

export default function Todos(){
    const todos= useSelector(state=>state.todos);
    const dispatch=useDispatch();
    return(
        <>
            <div>
                <h2>Todos</h2>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </div>
        </>
    )
}