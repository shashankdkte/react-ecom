import React from "react";
const withData = (WrappedComponent, dataSource) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      setTimeout(() => {
        fetch(dataSource)
          .then((response) => response.json())
          .then((data) => this.setState({ data: data.slice(0, 3) }));
      }, 1500);
    }
    render() {
      return this.state.data.length < 1 ? (
        <h2>Loading</h2>
      ) : (
        <WrappedComponent data={this.state.data} {...this.props} />
      );
    }
  }
};

export default withData;
