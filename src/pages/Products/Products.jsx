import React, { useEffect, useState } from "react";
import getProducts from "../../api/getProducts";
import "./Products.css";

import ProductCard from "../../components/card/ProductCard";
const Products = () => {
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();
  const [filter, setFilter] = useState("");

  async function getData() {
    try {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setFilter(event.target.value);
      console.log(filter);
      const filteredData =
        filter === undefined
          ? products
          : products?.filter(({ productCategory }) => {
              if (
                productCategory.productCategoryName
                  .toLowerCase()
                  .includes(filter?.toLowerCase())
              ) {
                return productCategory;
              }
            });
      setFilteredProducts(filteredData ? filteredData : products);
    }
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClearClick = () => {
    setFilter("");
    setFilteredProducts(products);
  };

  return (
    <div className="products-container">
      <div className="filter-container">
        <label htmlFor="filterInput">Filter:</label>
        <input
          type="text"
          id="filterInput"
          // className="filter-input"
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          value={filter}
        />
        <p className="clear-btn" onClick={(e) => handleClearClick(e)}>
          Clear
        </p>
      </div>
      <div className="products-card">
        {filteredProducts?.map((product) => (
          <ProductCard
            key={product.productCategory.productCategoryId}
            image={product.productCategory.productCategoryImage}
            name={product.productCategory.productCategoryName}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

// {"productCategory":{"productCategoryId":"402861f672b976380172b97ed41ef000013",
// "productCategoryName":"Natural Sweeteners,Spices & Staples",
// "productCategoryImage":"https://d8kcpnmmec91a.cloudfront.net/categories/6.png",
// "wholeSale":false,"retail":true,"orderIndex":5},"subCategories":null},
