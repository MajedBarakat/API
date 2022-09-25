import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserList from './UserList';


function App() {
  const [user, setUser] = useState([]);
  const [loadUser, setLoadUser]=useState(false)
  useEffect(() =>{
    getUser()},[])

  const getUser=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(result => {
        setUser(result.data)
        setLoadUser(false)
      })}
  return (
    <div>
      <UserList user={user} loadUser={loadUser}/>
    </div>
  );
}

export default App;
