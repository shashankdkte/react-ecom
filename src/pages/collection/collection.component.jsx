import React from "react";
import { useParams } from "react-router-dom";
import "./collection.styles.scss";
import { connect } from "react-redux";
import withRouter from "./withRouter";

import CollectionItemComponent from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
//import { useEffect } from "react";

class CollectionPage extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.shop.collections) {
      const collection =
        this.props.shop.collections[this.props.params.categoryId];

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
    }
  }
}

const mapStateToPros = (state) => {
  return {
    shop: state.shop,
    //collection: selectCollection(param.categoryId)(state),
  };
};
export default withRouter(connect(mapStateToPros)(CollectionPage));
