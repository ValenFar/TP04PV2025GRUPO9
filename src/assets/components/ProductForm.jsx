import '../css/ProductForm.css';
import React, { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const [data, setData] = useState({
    producto: "",
    descripcion: "",
    precio: "",
    id: "",
    stock:"",
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit(data)
    console.log(data);
    console.log("el formulario se envio")
    setData({ producto: "", descripcion: "", precio: "", id: "", stock: "" });
  }

  const handleProductoInput = (e) =>{
    setData({...data, producto: e.target.value});
  }

  const handleDescriopcionInput = (e) =>{
    setData({...data, descripcion: e.target.value});
  }

    const handleStockInput = (e) =>{
    setData({...data, stock: e.target.value});
  }

  const handlePrecioInput = (e) =>{
    setData({...data, precio: e.target.value});
  }

  const handleIdInput = (e) =>{
    setData({...data, id: e.target.value});
  }

  return(
    <div>
        <div className='container-product'>
            <form onSubmit={handleSubmit} className='product-form'>
            <h1>Ingreso Productos</h1>
            <label htmlFor="ID">ID: </label>
            <input 
              type="number"
              id='ID'
              value={data.id}
              onChange={handleIdInput}
            />
            <label htmlFor="producto">Producto: </label>
            <input 
              type="text"
              id='producto'
              value={data.producto}
              onChange={handleProductoInput}
            />
            <label htmlFor="descripcion">Descripcion: </label>
            <input 
              type="text"
              id='descripcion'
              value={data.descripcion}
              onChange={handleDescriopcionInput}
            />
            <label htmlFor="precio">Precio: </label>
            <input 
              type="number"
              id='precio'
              value={data.precio}
              onChange={handlePrecioInput}
            />
            <label htmlFor="stock">Stock: </label>
            <input 
              type="number"
              id='stock'
              value={data.stock}
              onChange={handleStockInput}
            />
            <button type="submit">Enviar</button>
            </form>
        </div>      
    </div>
  )

};

export default ProductForm;