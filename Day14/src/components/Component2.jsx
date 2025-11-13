import React from 'react'
import {useContext} from 'react'
import { TimeContext } from '../context/TimeContext';

const Component2 = (props) => {
    const time = useContext(TimeContext);
  return (
    <div>
        <h2 className='text-3xl'>Component2: {time}</h2>
    </div>
  )
}

export default Component2
