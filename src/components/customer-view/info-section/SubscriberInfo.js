import React from 'react'
import FpCard from '../../../utils/components/FpCard'
import SubscriberGrid from './SubscriberGrid'

const SubscriberInfo = ({infoData}) => {
  return (
    <div style={{width: '50%'}}>
      <FpCard title='SUBSCRIBER LOCATIONS'>
        <SubscriberGrid infoData={infoData}/>
      </FpCard>
    </div>
  )
}

export default SubscriberInfo