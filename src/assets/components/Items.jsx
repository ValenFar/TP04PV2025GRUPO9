import React, { useState } from "react";
import '../css/ProductForm.css';
import ProductForm from "./ProductForm";
import SearchBar from "./SearchBar";
import Descuento from "./descuento";

const Items = () => {
  const [productData, setProductData] = useState([]);

  const handleProductSubmit = (data) => {
    setProductData((prevData) => [...prevData, data]);
  };

  return (
    <div>
      <ProductForm onSubmit={handleProductSubmit} />
      <Descuento productData={productData} />
      <SearchBar productData={productData} />

      {productData.length > 0 && (
        <div className="data">
                <h2>Productos Ingresados</h2>
                {productData.map((product, index) => (
                    <div key={index} className="product-block">
                      <div className="data-row"><strong>ID:</strong> {product.id}</div>
                      <div className="data-row"><strong>Producto:</strong> {product.producto}</div>
                      <div className="data-row"><strong>Descripción:</strong> {product.descripcion}</div>
                      <div className="data-row"><strong>Precio:</strong> ${product.precio}</div> 
                      <div className="data-row"><strong>Stock:</strong> {product.stock}</div>
                    </div>
                ))}
        </div>
      )}
    </div>
  );
};

export default Items;