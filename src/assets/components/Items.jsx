import React, { useState } from "react";
import '../css/ProductForm.css';
import ProductForm from "./ProductForm";

const Items = () => {
  const [productData, setProductData] = useState([]);

  const handleProductSubmit = (data) => {
    setProductData((prevData) => [...prevData, data]);
  };

  return (
    <div>
      <ProductForm onSubmit={handleProductSubmit} />

      {productData.length > 0 && (
        <div className="data">
          <h2>Productos Ingresados:</h2>
          {productData.map((product, index) => (
            <div key={index}>
              <p><strong>ID:</strong> {product.id}</p>
              <p><strong>Producto:</strong> {product.producto}</p>
              <p><strong>Descripción:</strong> {product.descripcion}</p>
              <p><strong>Precio:</strong> ${product.precio}</p> 
              <p><strong>Stock:</strong> {product.stock}</p> 
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Items;