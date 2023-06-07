import React from 'react'
import { useContext } from 'react'
import Dummy from '../../store/dummyContext';

const AdsLogs = () => {
    const dummy = useContext(Dummy);
  return (
    <div>
        this is ads logs
        {dummy.name}
    </div>
  )
}

export default AdsLogs