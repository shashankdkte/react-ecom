import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCollections } from "../../redux/shop/shop.selectors";
import "./collection-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverivew = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(CollectionOverivew);
