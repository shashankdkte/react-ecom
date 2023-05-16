import React, { useState } from "react";

const UseStateExample = () => {
  const [name, setName] = useState("Ajay");
  const [address, setAddress] = useState("Link Road");
  return (
    <div>
      <h1>{name}</h1>
      <h2>{address}</h2>
      <button
        onClick={() => {
          setName("Parth");
        }}
      >
        Update Name
      </button>
      <button
        onClick={() => {
          setAddress("Bridge");
        }}
      >
        Update Name
      </button>
    </div>
  );
};

export default UseStateExample;
