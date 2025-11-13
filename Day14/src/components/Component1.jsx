import React from 'react'
import {useContext} from 'react'
import { TimeContext } from '../context/TimeContext';
import { useEffect } from 'react';

const Component1 = () => {

    const [time, setTime] = useContext(TimeContext);

    // useEffect(() => {
    //     setTimeout(() => {
    //         updateTime();
    //     }, 1000);
    // }, [time]);

    // const updateTime = () => {
    //     setTime(new Date().toLocaleTimeString());
    // };


  return (
    <div>
        <h1 className='font-bold text-5xl'>Component1: {time}</h1>
    </div>
  )
}

export default Component1
