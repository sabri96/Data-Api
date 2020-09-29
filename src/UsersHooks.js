import React, { useState, useEffect } from 'react'

const UsersHooks = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading (true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((j) => j.json())
            .then((users) => {
                setIsLoading(false);
                setUsers(users);
            })
      .catch((error) =>{
          setIsLoading (false);
           setError(error);
      });
}, []);
if (error) return <div>Error</div>
if (!users) return isLoading ? <div>Loading...</div> : <div>No users</div>;
return (
    <ul>
        {users.map((u) => (
            <li key={u.id}>{u.name},{u.email},{u.phone}</li>
            
        ))}

    </ul>

    
    
);
};

export default UsersHooks
