//Vistas Usuarios
import UsersTableView from './pages/users/UsersTableView';
import UsersEnterView from './pages/users/UsersEnterView';


//Vistas Posteos
import PostsTableView from './pages/posts/PostsTableView';
import PostsEnterView from './pages/posts/PostsEnterView';

//react  
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


//PrimeReact

//estilos primereact
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Panel } from 'primereact/panel';



function App() {
  return (
<>
<a href='/users' >Ver Usuarios</a><br/>
<a href='/newuser' >Nuevo Usuario</a><br/>
<a href='/posts' >Ver Publicaciones</a><br/>
<a href='/newpost' >Nueva Publicacion</a><br/>

<Panel header="Socialize">
<p>Esta es una red social creada por estudiantes del Instituto Tecnico Superior Cipolletti</p>
</Panel>

<BrowserRouter>
        <Routes>
          <Route path='/newpost' Component={PostsEnterView} >
          </Route>
          <Route path='/posts' Component={PostsTableView} >
          </Route>
          <Route path='/newuser' Component={UsersEnterView} >
          </Route>
          <Route path='/users' Component={UsersTableView} >
          </Route>
        </Routes>
</BrowserRouter>

</>
  )
}

export default App