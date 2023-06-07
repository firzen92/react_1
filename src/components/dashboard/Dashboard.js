import React from 'react'
import { useContext } from 'react'
import Dummy from '../../store/dummyContext';
import { useEffect } from 'react';
import ComponentA from './ComponentA';

const Dashboard = () => {
    const dummy = useContext(Dummy);
    useEffect(() => {
        console.log('inside the effect');
        const timer = setTimeout(()  => {
            console.log('yes effect\'s setTimeout');
            dummy.name = 'Jamie';
        }, 5000);

        return () => clearTimeout(timer)
    }, [])
  return (
    <div>
        this is ads logs
        {dummy.name}
        <ComponentA></ComponentA>
    </div>
  )
}

export default Dashboard