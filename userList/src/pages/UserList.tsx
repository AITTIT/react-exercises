import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface User {
    id: string;
    username: String;
    email: String;
    address: Object;
}

function createUserElement(user: User) {
    return (<></>);
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
        <div className='grid-cols-2'>
            {users.map(createUserElement)}
        </div>
    );
}