import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [query, setQuery] = useState("Bret");
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchValue = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${query}`
      );
      const data = await response.json();
      console.log(data);
      setUser(data[0].username);
    };
    fetchValue();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {user && <h2>{user}</h2>}
    </div>
  );
};

export default UseEffectExample;
