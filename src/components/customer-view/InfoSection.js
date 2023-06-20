/*

UPPER SECTION UNDER CUSTOMER VIEW, IT CONSISTS OF CUSTOMER INFO AND SUBSCRIBER INFO

*/

import React, {useState} from 'react'
import CustomerInfo from './info-section/CustomerInfo';
import SubscriberInfo from './info-section/SubscriberInfo';

import classes from './InfoSection.module.scss';

const InfoSection = ({infoData}) => {

  const [tabActive, setTabActive] = useState('customer'); // customer, subscriber
  const isCustomer = tabActive === 'customer'?true:undefined;
  const isSubscriber = tabActive === 'subscriber'?true:undefined;


  return (
    <>
      <coral-tab-bar className={classes['tab-bar']}>
        <coral-tab label="CUSTOMER INFO" active={isCustomer} onClick={() => setTabActive('customer')}></coral-tab>
        <coral-tab label="SUBSCRIBER INFO" active={isSubscriber} onClick={() => setTabActive('subscriber')}></coral-tab>
      </coral-tab-bar>
      <section className={classes.content}>
        {isCustomer && <CustomerInfo infoData={infoData}/>}
        {isSubscriber && <SubscriberInfo infoData={infoData}/>}
      </section>
    </>
  )
}

export default InfoSection