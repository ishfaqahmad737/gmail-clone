import React from 'react'
import {IconButton,Checkbox} from '@mui/material'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import "./EmailRow.css"
function EmailRow({title, subject, description, time}) {
  return (
    <div className="emailRow">
        <div className="emailRow__option">
            <Checkbox/>
            <IconButton>
                <StarOutlineIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantIcon/>
            </IconButton>
        </div>
        <h3 className="emailRow__subject">
            {title}
        </h3>
        <div className="emailRow__message">
            <h4>
                {subject}
            </h4><span className='emailRow__description'> - {description}
                </span>
        </div>
        <div className="emailRow__time">
            {time}
        </div>
    </div>
  )
}

export default EmailRow