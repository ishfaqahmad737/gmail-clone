import React from 'react'
import './MailDescription.css'
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
function MailDescription() {
  return (
    <div className="mailDescription">
        <div className="mailDescription__header">
            <h4>
                Hey Fellow streamer!!!
            </h4>
            <LabelImportantIcon/>
            <p className="subject">Twitch</p>
            <p className='time'>10pm</p>
        </div>
        <div class="mailDescription__message">
            This is a test
        </div>

    </div>
  )
}

export default MailDescription