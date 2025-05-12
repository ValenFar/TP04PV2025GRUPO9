import { useState } from 'react';

export default function ListProduct({ productos, hChangeProduct, hDeleteProduct }) {
  return (
    <ul>
      {productos.map(product => (
        <li key={product.id}>
          <Producto product={product} onChange={hChangeProduct} onDelete={hDeleteProduct}/>
        </li>
      ))}
    </ul>
  );
}

function Producto({ product, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let productContent;
  if (isEditing) {
    productContent = (
      <>
        {`${product.id} `}
        <input
          value={product.nombre}
          onChange={e => {
            onChange({
              ...product,
              nombre: e.target.value // Cambiamos el nombre del producto del objeto "product" por el valor del input
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Guardar
        </button>
      </>
    );
  } else {
    productContent = (
      <>
        {`${product.id} `}
        {product.nombre}
        <button onClick={() => setIsEditing(true)}>
          Editar
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={product.done}
        onChange={e => {
          onChange({
            ...product,
            done: e.target.checked
          });
        }}
      />
      {productContent}
      <button onClick={() => onDelete(product.id)}>
        Eliminar
      </button>
    </label>
  );
}
