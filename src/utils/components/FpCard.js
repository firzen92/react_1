import React from 'react'

import classes from './FpCard.module.scss';

const FpCard = ({title, height = 169, children}) => {
  return (
    <div className={classes.container} >
        <coral-header level="2">{title}</coral-header>
        <section className={classes.content}>{children}</section>
    </div>
  )
}

export default FpCard