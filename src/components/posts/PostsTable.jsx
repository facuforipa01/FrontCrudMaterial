// components/UserTable.js 
import { usePosts } from '../../hooks/usePosts';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';


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
      <Link to={`/newpost`} className='btn btn-info'>Agregar Publicaciones</Link>
        <h1>Publicaciones</h1>


        <DataTable value={posts}
          dataKey='id'
          className='datatable-responsive'
          scrollable scrollHeight="50px" style={{ minWidth: '50rem' }}>

          <Column field="userId" sortable header="Usuario"></Column>
          <Column field="descripcion" header="Descripcion"></Column>
          <Column field="fecha" sortable header="Fecha"></Column>
          <Column field="ubicacion" sortable header="Ubicacion"></Column>
          <Column field="imagen" header="Imagen"></Column>
          <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
          

        </DataTable>


      </>


    )
  }

}

export default PostTable