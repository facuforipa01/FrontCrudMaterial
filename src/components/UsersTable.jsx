// components/UserTable.js 
import axios from 'axios';
import { useUsers } from '../hooks/useUsers';
import Button from '@material-ui/core/Button'
import { Table } from '@material-ui/core';




const deleteUserButton = (userid) => {
    axios.delete(`http://localhost:3000/api/users/${userid}`)
    .then((resp) => {
      alert('usuario eliminado');
      console.log(resp);
    })
    .catch((error) => {
      alert('No se pudo eliminar el usuario');
      console.log(error);
    })
}
const verPostsButton = (userid) => {
  axios.get(`http://localhost:3000/api/users/${userid}`)
  .then((resp) => {
    alert('posteos cargados');
    console.log(resp);
  })
  .catch((error) => {
    alert('No se pudieron cargar posteos del usuario');
    console.log(error);
  })
}

function UserTable() {
  const lista = useUsers();
  console.log(lista);
  const users = lista.users

  if (lista.length === 0) {
    return (
      <h1>Cargando usuarios</h1>
    )
  } else {
    return (
      <>
      
      <h1>Usuarios</h1>
        <Table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>ID</th>
              <th>accion</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.id}</td>
                <td><Button  variant="contained" color="primary" onClick={()=>verPostsButton(user.id)}>Ver Posts</Button></td>
                <td><Button variant="contained" color="secondary"onClick={()=>deleteUserButton(user.id)}>Eliminar</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        
      </>
    )
  }

  /**/
}

export default UserTable