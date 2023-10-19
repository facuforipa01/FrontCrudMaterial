import UserContextProvider from './context/UserContext';

import PostContextProvider from './context/PostContext';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";

import UserTable from './components/UsersTable'
import { UserEnter } from './components/UsersEnter';

import PostTable from './components/PostsTable';
import { PostEnter } from './components/PostsEnter';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
 function BasicDemo() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="card flex justify-content-center">
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <h2>Sidebar</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
    </div>
)
}

function App() {
  return (


<PrimeReactProvider>
<PostContextProvider>

<BasicDemo></BasicDemo>
<PostEnter></PostEnter>
<PostTable></PostTable>


</PostContextProvider>
</PrimeReactProvider>

    
  )
}

export default App