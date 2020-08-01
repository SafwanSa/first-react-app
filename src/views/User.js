import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams()
  const URL = `https://5f258028c85de20016293161.mockapi.io/users/${id}`
  const [user, setUser] = useState(null);
  let content = null
  useEffect(() => {
    axios.get(URL)
      .then(res => {
        setUser(res.data);
      })
  }, [URL])

  if (user) {
    content =
      <div>
        <h1>{user.name}</h1>
        <p>{user.createdAt}</p>
        <img src={user.avatar}></img>
      </div>
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default User;