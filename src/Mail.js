import React from 'react'
import './Mail.css'
import { useNavigate } from 'react-router-dom';
import MailTools from './MailTools'
import MailDescription from './MailDescription'
function Mail() {
  return (
    <div className="mail">
      <MailTools/>
      <MailDescription/>
    </div>
  )
}

export default Mail