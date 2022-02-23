import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import EmailList from './EmailList'
function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__body'>
        <Sidebar />
        <EmailList />
      </div>
      
    </div>
  );
}

export default App;
