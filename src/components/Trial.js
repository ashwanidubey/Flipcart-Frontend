import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../State/actions';
export default function Trial() {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();
  return (
    <div>
         <p>Count: {count}</p>
         <button onClick={() => dispatch(increment())}>Add 1</button>
        <button onClick={() => dispatch(decrement())}>Subtract 1</button>
    </div>
    )
}
