import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
function SendMail() {
  return (
    <div className='sendMail'>
         <div className="sendMail_header">
             New message
            <CloseIcon/>
         </div>
         <div className="sendMail_information">
             <form className='sendMail_form'>
             <input className='sendMail_input' type="email" placeholder="To"/>
             <input className='sendMail_input' type="text" placeholder="Subject"/>
             <input className='sendMail_input' type="text" placeholder='Message'/>
             </form>
         </div>
         <div class="sendMail__options">
             <button>
                 Send
             </button>
         </div>
    </div>
  )
}

export default SendMail