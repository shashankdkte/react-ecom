import React from "react";
import withData from "./HOC";

const UserList = ({ data }) => {
  <div>
    {data.map((user) => (
      <div>
        <h2>
          <user className="name"></user>
        </h2>
      </div>
    ))}
  </div>;
};

export default withData(UserList, "http:S");
