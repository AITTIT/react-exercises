import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export interface User {
    id: number;
    username: string;
    name: string;
    email: string;
    phone: string;
    website: string;
}

function createUserElement(user: User) {
    return (
    <div key={user.id} className='flex flex-col gap-2 m-3'>
        <span>
            {user.name}
        </span>
        <span>{user.email}</span>
        <NavLink to={`/users/${user.id}`} className='text-blue-500'>
        View Profile
        </NavLink>
    </div>
    );
}

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error));
    }, []);
    
    
    return (
        <div className='grid-rows-2 gap-5'>
            <h1 className='text-5xl font-bold my-7'>Users</h1>
                {users.map(createUserElement)}
        </div>
    );
}