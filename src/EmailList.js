import React from 'react'
import EmailRow from "./EmailRow"
import {IconButton,Checkbox} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import './EmailList.css';
import Section from './Section'
function EmailList() {
    
  return (
    <div className="emailList" >
        <div className="emailList__settings">
            <div class="emailList__settings__left">
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
            <div class="emailList__settings__right">
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
        <div className="emailList__section">
            <Section Icon={InboxIcon} title='Primary' color='red' selected='true'/>
            <Section Icon={PeopleIcon} title='Social' color='#1A73E8'/>
            <Section Icon={LocalOfferIcon} title='Promotions' color='green'/>
        </div>

        <div className="emailList__list">
            <EmailRow  title='Twitch' subject='Hey fellow streamer!!loremloremloremloremlorem' description='This is a test' time='10pm' />
            <EmailRow  title='Twitch' subject='Hey fellow streamer!!' description='This is a test testtesttesttesttest' time='10pm' />
            <EmailRow  title='Twitch' subject='Hey fellow streamer!!' description='This is a test' time='10pm' />
            
        </div>
       
    </div>
  )
}

export default EmailList