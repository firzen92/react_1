import React from 'react'

import classes from './FpCard.scss';

const FpCard = ({title, children}) => {
  return (
    <div>
        <coral-header level="1">{title}</coral-header>
        <section>{children}</section>
    </div>
  )
}

export default FpCard