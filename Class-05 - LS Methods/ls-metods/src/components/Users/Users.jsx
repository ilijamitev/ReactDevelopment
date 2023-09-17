import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Users = () => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  //axios
  // UseEffect is React hook, which replaces the LS methods

  useEffect(() => {
    //Component did mount :)
    console.log("COMPONENT DID MOUNT USING USE EFFECT :)");

    fetchUsers();

    return () => {
      //Component will unmount
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    // Component did update :)
    console.log("Message has changed I will re-execute myself :)");
    // additional logic
  }, [message]);

  const handleSetMessage = (event) => {
    setMessage(event.target.value);
  };

  const fetchUsers = async () => {
    const response = await fetch("https://fakestoreapi.com/users");
    const result = await response.json();
    console.log(result);
    setUsers(result);
  };

  return (
    <div>
      <h1>User component</h1>
      <h2>{message}</h2>

      <input type="text" onChange={handleSetMessage} />

      {users.map((user) => (
        <div key={user.id}>User name is: {user.name.firstname}</div>
      ))}
    </div>
  );
};
