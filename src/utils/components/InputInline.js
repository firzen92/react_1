import React from "react";

import classes from './InputInline.module.scss';

const InputInline = ({title, value}) => {
  return (
    <div className={classes['form-input']}>
      <div className={classes['label']}>{title}</div>
      <coral-input readonly value={value}></coral-input>
    </div>
  );
};

export default InputInline;
