import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import EmailList from './EmailList'
import Mail from './Mail'
import {Routes,Route,useNavigate} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<EmailList/>}/>
          <Route path='/mail' element={<Mail/>}/>
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
      
    </div>
  );
}

export default App;
