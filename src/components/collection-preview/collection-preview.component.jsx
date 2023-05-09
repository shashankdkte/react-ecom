import React from "react";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, name, price, imageUrl }) => (
          <div className="collection-item">
            <div
              className="image"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            ></div>
            <div className="collection-footer">
              <span className="name">{name}</span>
              <span className="price">{price}</span>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
