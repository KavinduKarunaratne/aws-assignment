import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Amplify } from 'aws-amplify';
import { fetchUserAttributes } from '@aws-amplify/auth'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import config from './amplifyconfiguration.json';
Amplify.configure(config);

import Sidebar from './components/Sidebar';
import Player from './components/Player';

async function handleFetchUserAttributes() {
  try {
    const userAttributes = await fetchUserAttributes();
    // console.log(userAttributes.nickname);
    return(userAttributes.nickname);
  }catch (error) {
    console.log(error);
  }
}




function App({signOut, user}) {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const userAttributes = await handleFetchUserAttributes();
        setRole(userAttributes);
        // console.log("Role:: " + role);
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };
    fetchUserRole();
  }, []);

  if (role === null) {
    return <div>Loading...</div>;
  }

  // console.log("Role: " + role);
  return (
    <>
    {role == "admin" ? (
      <>
        <h1>Hello Admin</h1>
        <button onClick={signOut}>Sign Out</button>
      </>
    ):(
      
      <>
        <div className='h-screen bg-black'>
          <div className='h-[90%] flex'>
            <Sidebar/>
          </div>
          <Player/>
        </div>
      </>
    )}
    </>
  )
}

export default withAuthenticator(App);
