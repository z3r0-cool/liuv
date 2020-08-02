import React from "react";
import axios from "axios";
import CollectionPreview from "../../components/collection-preview/collection-preview";

const api = axios.create({
  baseURL: `http://localhost:3000/categories`,
});

// import SHOP_DATA from './shop.data.js';



class ShopPage extends React.Component {
  
  state = {
    collections: [],
    parameterUrl: '',
  }
  constructor(props) {
    super(props);

    api.get("/").then((res) => {
      console.log(res.data);
      const urlParams = window.location.href.split('/')[4].toLowerCase();
      const menu_items_selected = res.data.filter((item) => item.name.toLowerCase() === urlParams)
      const menu_items_all = res.data.filter((item) => !(item.name.toLowerCase() === urlParams))
      const menu_items = menu_items_selected.concat(menu_items_all)
      this.setState({ collections: menu_items })
    });
  }

  componentDidMount() {
    const urlParams = window.location.href.split('/')[4];
    this.setState({parameterUrl: urlParams});
  }

  render() {
    // const { collections } = this.state;
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id,name, ...otherCollectionProps }) =>(
          <CollectionPreview key={id} {...otherCollectionProps} name={name} />  
          ))}
          
      </div>
    );
  }
}

export default ShopPage;
