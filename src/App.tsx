import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Modal from './components/Modal';
import { useState } from 'react';
import SignIn from './screens/SignIn';

function App() {
  const [openSignInModal, setOpenSignInModal] = useState("");

  return (
    <div className='app-container' style={{height: window.innerHeight}}>
      <NavBar onSignInClick={setOpenSignInModal}/>
      <Outlet />
      {openSignInModal && <Modal closeModal={() => setOpenSignInModal("")} render={()=><SignIn type={openSignInModal} closeModal={()=>setOpenSignInModal("")}/>} />}
    </div>
  );
}

export default App;
