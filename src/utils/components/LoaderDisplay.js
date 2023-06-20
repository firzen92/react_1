/*
    Loading Screen before customer route
    This component fetches the data as well
*/

import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomerViewContext } from '../../store/customerViewContext';

const LoaderDisplay = () => {
    const navigate = useNavigate();
    const {storeData} = useContext(CustomerViewContext);

    useEffect(() => {
        const fetchInfo = async () => {
            const response = await fetch('https://fullpicture-cf824-default-rtdb.firebaseio.com/info.json');
            const responseData = await response.json();
            
            //storeData is coming from CustomerViewContext, once the data is stored it 
            //can be used by any component that wishes to use this data
            storeData(responseData);

            //now navigate to customer away from the loading screen
            navigate('customer');
        }

        fetchInfo();
    }, []);
  return (
    <>
        <amber-loader></amber-loader>
    </>
  )
}

export default LoaderDisplay