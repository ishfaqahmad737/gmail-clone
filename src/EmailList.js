import React, { useEffect,useState } from 'react';
import EmailRow from "./EmailRow";
import {IconButton,Checkbox} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {db} from'./firebase'
import {   getFirestore,
    collection,
    query,
    orderBy,
    limit,
    onSnapshot,
    getDocs
 } from "firebase/firestore";
import './EmailList.css';
import Section from './Section';
import 'firebase/firestore';
function EmailList() {
    const[emails,setEmails] = useState([])
    async function getData(){
        const q = query(collection(db, "emails"));
        onSnapshot(q, (querySnapshot) => {
                let emailsArray = [];
                 querySnapshot.forEach((doc)=>(
                   emailsArray.push
                   ({id:doc.id,
                    data:doc.data()}
                    )))
                    setEmails(emailsArray)
                

        });  };

        useEffect(getData,[])
        console.log('ishfaq',emails)
        
        let emailRow = emails.map(({id,data:{To,Subject,Message,timeStamp}})=>{
            return <EmailRow key={id} id={id} title={To} subject={Subject} description={Message} time='10pm' />
        })  
        
  return (
    <div className="emailList" >
        <div className="emailList__settings">
            <div className="emailList__settings__left">
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
            <div className="emailList__settings__right">
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
       
            {emailRow}
            
        </div>
       
    </div>
  )
}

export default EmailList