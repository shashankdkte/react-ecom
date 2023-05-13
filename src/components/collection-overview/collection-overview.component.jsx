import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import "./collection-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverivew = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverivew);
