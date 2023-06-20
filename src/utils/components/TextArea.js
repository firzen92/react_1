/* 

THIS IS A MIMIC READ-ONLY TEXT AREA, IT IS USED UNDER ADDRESS SECTION UNDER CUSTOMER INFO 

*/

import React from 'react'

import classes from './TextArea.module.scss';


const TextArea = ({ children }) => {
  return (
    <div className={classes.container} tabIndex={0}>
        {children}
    </div>
  )
}

export default TextArea