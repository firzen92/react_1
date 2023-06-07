import React from 'react'
import { useContext } from 'react'
import Dummy from '../../store/dummyContext'

const ComponentA = () => {
    const dummy = useContext(Dummy);
  return (
    <div>ComponentA has a name here
        {dummy.name}
    </div>
  )
}

export default ComponentA