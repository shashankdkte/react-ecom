import React from "react";
import { useParams } from "react-router-dom";
import "./collection.styles.scss";
import { connect } from "react-redux";
import CollectionItemComponent from "../../components/collection-item/collection-item.component";
//import { useEffect } from "react";

const CollectionPage = ({ shop }) => {
  const params = useParams();
  const collection = shop.collections[params.categoryId];
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToPros = (state) => {
  return {
    shop: state.shop,
    // collection: selectCollection(param.categoryId)(state),
  };
};
export default connect(mapStateToPros)(CollectionPage);
