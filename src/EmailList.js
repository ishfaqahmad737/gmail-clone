import React from 'react'
import {IconButton,Checkbox} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import './EmailList.css';
function EmailList() {
  return (
    <div className="emailList">
        <div className="emailList__settings">
            <div class="emailList__right">
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div class="emailList__right">
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
            </div>  
          
        </div>
        
    </div>
  )
}

export default EmailList