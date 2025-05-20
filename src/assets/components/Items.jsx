import React, { useState } from "react";
import '../css/ProductForm.css';
import ProductForm from "./ProductForm";
import SearchBar from "./SearchBar";
import Descuento from "./descuento";

const Items = () => {
  const [productData, setProductData] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [camposEditados, setCamposEditados] = useState({});

  const handleProductSubmit = (data) => {
    setProductData((prevData) => [...prevData, data]);
  };

  const handleDelete = (id) => {
    setProductData((prevData) => prevData.filter((product) => product.id !== id));
  };

  const handleEditClick = (product) => {
    setEditandoId(product.id);
    setCamposEditados({ ...product }); // Copiar valores actuales
  };

  const handleSaveClick = () => {
    setProductData((prevData) =>
      prevData.map((p) => (p.id === editandoId ? camposEditados : p))
    );
    setEditandoId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCamposEditados((prev) => ({ ...prev, [name]: value }));
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
              {editandoId === product.id ? (
                <>
                  <div className="data-row">
                    <strong>ID:</strong> {product.id}
                  </div>
                  <div className="data-row">
                    <strong>Producto:</strong>{" "}
                    <input
                      type="text"
                      name="producto"
                      value={camposEditados.producto}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="data-row">
                    <strong>Descripción:</strong>{" "}
                    <input
                      type="text"
                      name="descripcion"
                      value={camposEditados.descripcion}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="data-row">
                    <strong>Precio:</strong>{" "}
                    <input
                      type="number"
                      name="precio"
                      value={camposEditados.precio}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="data-row">
                    <strong>Stock:</strong>{" "}
                    <input
                      type="number"
                      name="stock"
                      value={camposEditados.stock}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="data-row"><strong>ID:</strong> {product.id}</div>
                  <div className="data-row"><strong>Producto:</strong> {product.producto}</div>
                  <div className="data-row"><strong>Descripción:</strong> {product.descripcion}</div>
                  <div className="data-row"><strong>Precio:</strong> ${product.precio}</div>
                  <div className="data-row"><strong>Stock:</strong> {product.stock}</div>
                </>
              )}

              <div className="button-group">
                {editandoId === product.id ? (
                  <button onClick={handleSaveClick}>Guardar</button>
                ) : (
                  <button onClick={() => handleEditClick(product)}>Modificar</button>
                )}
                <button onClick={() => handleDelete(product.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Items;
