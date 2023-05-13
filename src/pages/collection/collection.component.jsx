import React from "react";
import { useSearchParams, useParams } from "react-router-dom";
import "./collection.styles.scss";

const CollectionPage = () => {
  const param = useParams();
  console.log(param);
  return (
    <div>
      <h2>Collection Page</h2>
    </div>
  );
};

export default CollectionPage;
