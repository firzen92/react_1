import React from 'react'
import FpCard from '../utils/components/FpCard'
import InfoSection from '../components/customer-view/InfoSection'
import DetailsSection from '../components/customer-view/DetailsSection'

import classes from './CustomerViewPage.scss'

const CustomerViewPage = () => {
  return (
    <div className={classes.container}>
        <InfoSection></InfoSection>
        <DetailsSection></DetailsSection>
    </div>
  )
}

export default CustomerViewPage