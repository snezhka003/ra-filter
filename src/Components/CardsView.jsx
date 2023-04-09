/* import React from "react"; */
import PropTypes from "prop-types";
import ShopCard from "./ShopCard";
import uniqid from 'uniqid'

export default function CardsView(props) { 
    return (
      <ul className="products-module">
        {props.products.map((product) => {
          return (
            <li key={uniqid()} className="products-list-item">
              <ShopCard item={product} />
            </li>
          );
        })}
      </ul>
    );
  }
  
CardsView.propTypes = {
    products: PropTypes.array.isRequired,
};