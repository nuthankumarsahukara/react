// App.js or UserList.js
import React, { useEffect, useState } from 'react';

function UserList() {
 const [users, setUsers] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // sample API
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.error('Error fetching data:', error));
}, []);

return (
    <div>
        <h2>Users</h2>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
    );
}

export default UserList;
