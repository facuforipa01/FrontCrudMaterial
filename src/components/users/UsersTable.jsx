// components/UserTable.js 
import axios from 'axios';
import { useUsers } from '../../hooks/useUsers';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';



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
  const users = lista.users


  if (lista.length === 0) {
    return (
      <h1>Cargando usuarios</h1>
    )
  } else {
    return (
      <>
      
      <Link to={`/newpost`} className='btn btn-info'>Agregar usuario</Link>
        <h1>Usuarios</h1>


        <DataTable value={users}
          dataKey='id'
          className='datatable-responsive'
          scrollable scrollHeight="50px" style={{ minWidth: '50rem' }}>

          <Column field="username" sortable header="Username"></Column>
          <Column field="email" header="Email"></Column>
  
          <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
          

        </DataTable>
      </>
    )
  }
}

export default UserTable