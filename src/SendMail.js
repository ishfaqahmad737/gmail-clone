import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Button } from '@mui/material';
import {useForm} from 'react-hook-form'; 
import {closeComposeForm} from './features/mailSlice'
import {useDispatch} from 'react-redux';
function SendMail() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  function onSubmit(data){
    console.log(data)
  }
 
  let dispatch = useDispatch();
  return (
    <div className='sendMail'>
         <div className="sendMail_header">
             New message
            
            <CloseIcon onClick={()=>{dispatch(closeComposeForm())}}/>
         </div>
         <div className="sendMail_information">
             <form className='sendMail_form'  onSubmit={handleSubmit(onSubmit)}>
                <input className='sendMail_input'  type="email" placeholder={`To`} {...register("To", { required: true })}/>
                {errors.To && <p>Something is wrong</p>}
                <input className='sendMail_input'  type="text" placeholder={`To`} {...register("Subject", { required: true })}/>
                {errors.Message && <p>Something is wrong</p>}
                <input className='sendMail_input'  type="text" placeholder={`To`} {...register("Message", { required: true })}/>
                {errors.Subject && <p>Something is wrong</p>}
                <div className="sendMail__options">
                  <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      >
                      Send
                  </Button>
                </div>
             </form>
         </div>
         
    </div>
  )
}

export default SendMail