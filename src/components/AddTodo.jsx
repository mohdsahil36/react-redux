import React,{useState} from 'react';
import { addTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

export default function AddTodo(){
    const [input,setInput]=useState(''); 
    const dispatch=useDispatch();

    function addTodoHandler(e){
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
    return(
        <div>
            <form onSubmit={addTodoHandler}>
                <input type="text" placeholder='Add Todo' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>Add To List</button>
            </form>
        </div>
    )
}