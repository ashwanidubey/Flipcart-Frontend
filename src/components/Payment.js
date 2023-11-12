import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../State/actions';
export default function Payment() {
    const count = useSelector((state) => state);
    const dispatch = useDispatch(); 
    //onClick={() => dispatch(increment())}   
  return (
    <div>Payment</div>
  )
}
