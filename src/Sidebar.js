import { Button } from '@mui/material';
import React from 'react';
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add'
function Sidebar() {
  return (<div class="sidebar">'
  <Button startIcon={<AddIcon />}
    className='sidebar__compose'>
      Compose
  </Button>
    </div>)
}

export default Sidebar;