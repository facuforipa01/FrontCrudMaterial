import React from 'react';
import UserContextProvider from '../../context/UserContext';
import UserTable from '../../components/users/UsersTable';

function UsersTableView() {
    return (
        <>
            <UserContextProvider><UserTable></UserTable></UserContextProvider>
        </>
    )
}

export default UsersTableView