import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Panel } from 'primereact/panel';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';



ReactDOM.createRoot(document.getElementById('root')).render(
        <>
                <Panel header="Socialize">
                        <p>Esta es una red social creada por estudiantes del Instituto Tecnico Superior Cipolletti</p>
                </Panel>
                <App />

        </>
)