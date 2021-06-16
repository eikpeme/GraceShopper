import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.props.loadProduct(this.props.match.params.id);
  }
  render() {
    // const product = this.props.product;
    return (
      <div>
        <h1>Single Product Page</h1>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatch = (dispatch) => {
  loadProduct: (id) => {
    dispatch(fetchSingleProduct(id));
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);