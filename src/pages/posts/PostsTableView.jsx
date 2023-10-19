import React from 'react';
import PostContextProvider from '../../context/PostContext';

import PostTable from '../../components/posts/PostsTable';



function PostsTableView() {
    return (
<>
<PostContextProvider> <PostTable></PostTable> </PostContextProvider>
            
        </>
    )
}
   
        




export default PostsTableView