import React, { Suspense } from 'react'
import { defer, useLoaderData, Await } from 'react-router-dom'

//components
import InfoSection from '../components/customer-view/InfoSection'
import DetailsSection from '../components/customer-view/DetailsSection'

import classes from './CustomerViewPage.scss'

const CustomerViewPage = () => {
  const { info } = useLoaderData();

  return (
    <Suspense fallback={<amber-loader></amber-loader>}>
      <Await resolve={info}>
        {(infoData) => {
          return (
            <div className={classes.container}>
              <InfoSection infoData={infoData}></InfoSection>
              <DetailsSection></DetailsSection>
            </div>
          )
        }}
      </Await>
    </Suspense>
  )
}

const infoLoader = async () => {
  const response = await fetch('https://fullpicture-cf824-default-rtdb.firebaseio.com/info.json');
  const responseData = response.json();

  return responseData;
}

export const loader = () => {
  return defer({
    info: infoLoader()
  });
}

export default CustomerViewPage