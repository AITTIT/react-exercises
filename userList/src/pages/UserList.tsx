import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

interface User {
    id: string;
    username: String;
    email: String;
    address: Object;
}

function createUserElement(user: User) {
    return (
    <div key={user.id} className='flex flex-col gap-2 m-3'>
        <span>
            {user.username}
        </span>
        <span>{user.email}</span>
        <NavLink to={`/users/${user.id}`}>
        View Profile
        </NavLink>
    </div>
    );
}



export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error));
    }, []);
    
    
    return (
        <div className='grid-rows-2 gap-5'>
            <h1>Users</h1>
                {users.map(createUserElement)}
        </div>
    );
}