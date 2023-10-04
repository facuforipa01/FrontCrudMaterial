// components/UserTable.js 
import axios from 'axios';
import { usePosts } from '../hooks/usePosts';
import Button from '@material-ui/core/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


//esto podria ir en usePosts
const deletePostButton = (postid) => {
  axios.delete(`http://localhost:3000/api/posts/${postid}`)
    .then((resp) => {
      alert('Posteo eliminado');
      console.log(resp);
    })
    .catch((error) => {
      alert('No se pudo eliminar el posteo');
      console.log(error);
    })
}

function PostTable() {

  const lista = usePosts();
  console.log(lista);
  const posts = lista.posts

  if (lista.length === 0) {
    return (
      <h1>Cargando Posteos</h1>
    )
  } else {
    return (
      <>
            <h1>Publicaciones</h1>
            <TableContainer>
            <Table>
        <TableHead>
          <TableRow>
            <TableCell>descripcion</TableCell>
            <TableCell>ubiacion</TableCell>
            <TableCell>fecha</TableCell>
            <TableCell>ID usuario</TableCell>
            <TableCell>accion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map(post => (
            <TableRow key={post.id}>
              <TableCell>{post.descripcion}</TableCell>
              <TableCell>{post.ubicacion}</TableCell>
              <TableCell>{post.fecha}</TableCell>
              <TableCell>{post.userId}</TableCell>
              <TableCell><Button variant="contained" color="secondary" onClick={()=>deletePostButton(post.id)}>Eliminar</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
            </TableContainer>
      
      </>
    
      
    )
  }

}

export default PostTable