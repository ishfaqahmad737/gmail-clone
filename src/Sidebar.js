import { Button ,IconButton } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StartIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import DuoIcon from '@mui/icons-material/Duo';
function Sidebar() {
  return (
  <div className="sidebar">
        <Button startIcon={<AddIcon />}
          className='sidebar__compose'>
            Compose
        </Button>
        
            <SidebarOption Icon={InboxIcon}title='Inbox' focused={true} number={54}/>
            <SidebarOption Icon={StartIcon}title='Starred' number={54}/>
            <SidebarOption Icon={AccessTimeIcon}title='Snoozed' number={54}/>
            <SidebarOption Icon={LabelImportantIcon}title='Important' number={54}/>
            <SidebarOption Icon={NearMeIcon}title='Sent' number={54}/>
            <SidebarOption Icon={NoteIcon}title='Drafts' number={54}/>
            <SidebarOption Icon={ExpandMoreIcon}title='More' number={54}/>
            
            <div className="sidebar__footer">
              <div className="sidebar__footerIcon">
                <IconButton>
                  <PersonIcon/>
                </IconButton>
                <IconButton>
                  <DuoIcon/>
                </IconButton>
                <IconButton>
                  <PhoneIcon/>
                </IconButton>
              </div>
            </div>
        
    </div>)
}


export default Sidebar;
