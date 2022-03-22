import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import EmailList from './EmailList'
import Mail from './Mail'
import SendMail from './SendMail'
import {Routes,Route} from "react-router-dom";
import {useSelector} from 'react-redux'
import{selectComposeFormState} from './features/mailSlice'
function App() {
  let composeFormState = useSelector(selectComposeFormState);
 console.log(composeFormState);
  return (
    <div className="app">
      <Header />
      <div className='app__body'>
              <Sidebar />
              <Routes>
                
                <Route path='/' element={<EmailList/>}/>
                <Route path='/mail' element={<Mail />}/>
                <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
            />
              </Routes>
             
      </div>
      {composeFormState && <SendMail/>}
    </div>
  );
}

export default App;
