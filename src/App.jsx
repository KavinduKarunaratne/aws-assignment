import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import config from './amplifyconfiguration.json';
Amplify.configure(config);

function App({signOut, user}) {
  console.log(user);
  // console.log(Auth.currentAuthenticatedUser());
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign Out</button>
    </>
  )
}

export default withAuthenticator(App);
