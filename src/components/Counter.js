import React from 'react'
import Button from '@material-ui/core/Button';
import {useSelector, useDispatch} from 'react-redux'

import {increment, decrement} from '../redux/counter/counterSlice'

function Counter() {
  const countValue = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{countValue}</h1>
      <Button variant="outlined" color="secondary" onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button variant="outlined" color="primary" onClick={() => dispatch(increment())}>Increment</Button>
    </div>
  )
}

export default Counter