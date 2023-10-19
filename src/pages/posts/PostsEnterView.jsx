import React from 'react';
import PostContextProvider from '../../context/PostContext';
import { PostEnter } from '../../components/posts/PostsEnter';

function PostsEnterView() {
    return (
        <>
            <PostContextProvider><PostEnter></PostEnter></PostContextProvider>
        </>
    )
}

export default PostsEnterView
