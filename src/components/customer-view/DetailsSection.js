import React, { useState } from 'react'

import classes from './DetailsSection.module.scss';

const DetailsSection = () => {
  const [tab, setTab] = useState('machineIds'); //machineIds and serviceAccounts

  const activeMachineIds = tab === 'machineIds'?true:undefined;
  const activeServiceAccounts = tab === 'machineIds'?undefined:true;


  return (
    <>
      <coral-tab-bar level='1'>
        <coral-tab label='MACHINE IDS' onClick={() => setTab('machineIds')} active={activeMachineIds}></coral-tab>
        <coral-tab label='SERVICE ACCOUNTS' onClick={() => setTab('serviceAccounts')} active={activeServiceAccounts}></coral-tab>
      </coral-tab-bar>
      <section className={classes.content}>
        {tab === 'machineIds' && 'machine bhai'}
        {tab === 'serviceAccounts' && 'service accounts bhai'}
      </section>
    </>
  )
}

export default DetailsSection