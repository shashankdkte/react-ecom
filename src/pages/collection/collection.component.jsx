import React, { cloneElement } from "react";
import { useParams } from "react-router-dom";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
let param = "hats";
const CollectionPage = ({ collection }) => {
  console.log(collection);
  const params = useParams();
  param = params.categoryId;
  console.log(params);
  return (
    <div>
      <h2>Collection Page</h2>
    </div>
  );
};
const mapStateToPros = (state, ownProps) => ({
  collection: selectCollection(param)(state),
  // collection: selectCollection(param.categoryId)(state),
});
export default connect(mapStateToPros)(CollectionPage);
