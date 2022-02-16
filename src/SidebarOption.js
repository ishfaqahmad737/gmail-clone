import React from 'react';
import './SidebarOption.css';
function SidebarOption({Icon, title, number}) {
  return (
    <div className="sidebar_option">
     <Icon/>
     <h4>{title}</h4>
     <p>{number}</p>
    </div>
  )
}

export default SidebarOption