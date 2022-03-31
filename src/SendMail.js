import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Button } from '@mui/material';
import {useForm} from 'react-hook-form'; 
import {closeComposeForm} from './features/mailSlice'
import {useDispatch} from 'react-redux';
import { collection, addDoc } from "firebase/firestore";
import {db} from './firebase.js' 
import{serverTimestamp}from 'firebase/firestore';




function SendMail() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  async function sendMailInfo(To,Subject,Message){
    try {
      const docRef = await addDoc(collection(db, "emails"), {
        To: To,
        Subject: Subject,
        Message: Message,
        timeStamp: serverTimestamp()
      });
      ;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  function onSubmit(data){
    const {To,Subject,Message} = data;
    sendMailInfo(To,Subject,Message)
    dispatch(closeComposeForm());
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
                <input className='sendMail_input'  type="email" placeholder={`To ${errors.To ? 'is required!':''}`} {...register("To", { required: true })}/>
                
                <input className='sendMail_input'  type="text" placeholder={`Subject ${errors.Subject ? 'is required!':''}`} {...register("Subject", { required: true })}/>
                
                <input className='sendMail_input'  type="text" placeholder={`Message ${errors.Message ? 'is required!':''}`} {...register("Message", { required: true })}/>
                
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