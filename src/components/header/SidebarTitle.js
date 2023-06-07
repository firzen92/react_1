import React from 'react'

import './SidebarTitle.scss'; 

const SidebarTitle = (props) => {
  return (
    <div className='sidebar'>
        <coral-icon icon='align-justify' onClick={props.layoutHandler}></coral-icon>
        <span>FullPicture Cloud</span>
    </div>
  )
}

export default SidebarTitle