import React from "react";
import axios from "axios";
import CollectionPreview from "../../components/collection-preview/collection-preview";

const api = axios.create({
  baseURL: `http://localhost:3000/categories`,
});

// import SHOP_DATA from './shop.data.js';



class ShopPage extends React.Component {
  
  state = {
    collections: []
  }
  constructor(props) {
    super(props);

    api.get("/").then((res) => {
      console.log(res.data);
      this.setState({ collections: res.data})
    });
  }

  render() {
    // const { collections } = this.state;
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
