import React from 'react'
import {useContext} from 'react'
import { TimeContext } from '../context/TimeContext';

const Component3 = (props) => {
    const time = useContext(TimeContext);
  return (
    <div>
        <h3 className='text-xl'>Component3: {time}</h3>
    </div>
  )
}

export default Component3
