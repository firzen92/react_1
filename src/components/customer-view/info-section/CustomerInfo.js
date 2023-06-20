import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

//components
import FpCard from '../../../utils/components/FpCard'
import InputInline from '../../../utils/components/InputInline';
import ContactsGrid from './ContactsGrid';
import TextArea from '../../../utils/components/TextArea';

//styles
import classes from './CustomerInfo.module.scss';

const CustomerInfo = ({infoData: info}) => {
  const [infoDetails, setInfoDetails] = useState([]);
  
  console.log('infoData ', info);

  //destructure data
  const  {data: {contacts}}  = info;
  const  {data: details} = info;
  
  useEffect(async () => {
    setInfoDetails(infoDetails);
  }, [infoDetails]);

  return (
    <div className={classes.container}>
        <FpCard title='DETAILS'>
          <InputInline title='Customer Name' value={details.customerName}/>
          <InputInline title='Location Account' value={details.locationAccount}/>
          <InputInline title='Parent Customer' value={details.parentCustomer}/>
        </FpCard>
        <FpCard title='ADDRESS'>
          <div className={classes['address-container']}>
            <div className={classes.label}>
              Installation Address
            </div>
            <TextArea>
              {details.address.join('\n')}
            </TextArea>
          </div>
        </FpCard>
        <FpCard title='CONTACTS'>
          <ContactsGrid contacts={contacts}/>
        </FpCard>
    </div>
  )
}

export default CustomerInfo