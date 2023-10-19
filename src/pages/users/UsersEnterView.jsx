import React from 'react';
import UserContextProvider from '../../context/UserContext';
import { UserEnter } from '../../components/users/UsersEnter';

function UsersEnterView() {
    return (
        <>
            <UserContextProvider><UserEnter></UserEnter></UserContextProvider>
        </>
    )
}

export default UsersEnterView