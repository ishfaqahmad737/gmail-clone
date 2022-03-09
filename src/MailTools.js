import React from 'react'
import './MailTools.css'
import {IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete'; 
import EmailIcon from '@mui/icons-material/Email' 
import WatchLaterIcon from '@mui/icons-material/WatchLater' 
import CheckCircleIcon from '@mui/icons-material/Check' 
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVert from '@mui/icons-material/MoreVert' 
import { useNavigate } from 'react-router-dom';
function MailTools() {
    let navigate = useNavigate();
  return (
    <div className="mail__tools">
    <div className="mail__toolsLeft">
        <IconButton onClick={()=>{navigate('/')}}>
          <ArrowBackIcon className="iconstyles"/>
        </IconButton>
        <IconButton>
          <MoveToInboxIcon className="iconstyles"/>
        </IconButton>
        <IconButton>
          <ErrorIcon className="iconstyles"/>
        </IconButton>
        <IconButton>
          <DeleteIcon className="iconstyles"/>
        </IconButton>
        <IconButton>
          <EmailIcon className="iconstyles"/>
        </IconButton>
        <IconButton>
          <WatchLaterIcon className="iconstyles"/>
        </IconButton>
        <IconButton>
          <CheckCircleIcon className="iconstyles"/>
        </IconButton>
        <IconButton>
          <LabelImportantIcon className="iconstyles"/>
        </IconButton>
        <IconButton>
          <MoreVert className="iconstyles"/>
        </IconButton>

    </div>
    <div className="mail__toolsRight">

    </div>
  </div> 

  )
}

export default MailTools