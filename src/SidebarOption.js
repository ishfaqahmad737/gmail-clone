import React from 'react';
import './SidebarOption.css';
function SidebarOption({Icon, title, number,focused}) {
  return (
    <div className={`sidebar_option ${focused && 'sidebarOption--active'}`} >
     <Icon/>
     <h4>{title}</h4>
     <p>{number}</p>
    </div>
  )
}

export default SidebarOption