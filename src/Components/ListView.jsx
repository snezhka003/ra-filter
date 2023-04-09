/* import React from "react"; */
import PropTypes from "prop-types";
import ShopItem from "./ShopItem";
import uniqid from "uniqid";

export default function ListView(props) { 
    return (
      <ul className="products-list">
        {props.products.map((product) => {
          return (
            <li key={uniqid()} className="products-list-item">
              <ShopItem item={product} />
            </li>
          );
        })}
      </ul>
    );
  }
  
ListView.propTypes = {
    products: PropTypes.array.isRequired,
};