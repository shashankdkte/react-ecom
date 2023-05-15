import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import {
  auth,
  createUserProfileDocument,
  firestore,
  convertCollectionSnapshotToMap,
} from "./firebase/firebase.utils";

import "./App.css";
import "./A.scss";
import React from "react";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import CollectionOverviewComponent from "./components/collection-overview/collection-overview.component";
import CollectionPage from "./pages/collection/collection.component";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser, updateCollections } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(user);

      //console.log(user);
    });

    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapShot) =>
      convertCollectionSnapshotToMap(snapShot)
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <StyledComponent />
  //     </div>
  //   );
  // }
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<CollectionOverviewComponent />} />
          <Route path="/shop/:categoryId" element={<CollectionPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route
            exact
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate replace to={"/"} />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
