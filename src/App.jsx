import { useReducer } from 'react'
import AddProduct from './assets/components/AddProduct.jsx'
import ListProduct from './assets/components/ListProduct.jsx'
import ProductItem from './assets/components/ProductItem.jsx'
import './assets/css/ProductItem.css'

const App = () => {
  const [prodcutos, dispatch] = useReducer(productReducer,productosInicial); //useReducer es un hook que se encarga de manejar el estado de la aplicacion. Recibe el reducer y el estado inicial. Devuelve un array con el estado actual y una funcion para modificarlo.


  function handleAddProduct(texto) {
    dispatch({ //Pasamos la acción al reducer. Dispatch es una función que se encarga de enviar la acción al reducer.
      type: 'added',
      id: nextId++, // Incrementamos el id para que no se repita
      nombre: texto, // Pasamos el nombre del producto
      // descripcion: texto, // Pasamos la descripcion del producto
      // precioUnitario: 0, // Pasamos el precio unitario del producto
      // descuento: 0, // Pasamos el descuento del producto
    });
  }
  
  function handleChangedProduct(product) { //Recibe un objeto (un elemento del array) ya modificado y lo pasa al reducer para que efectue el cambio en el array de objetos
    dispatch({
      type: 'changed',
      product: product // Pasamos el producto completo(un elemento del array) para que se pueda modificar
    });
  }

  function handleDeleteProduct(productId) {
    dispatch({
      type: 'deleted',
      id: productId // Pasamos el id del producto a eliminar
    });
  }



  return (
    <>
      <AddProduct fAddProduct={handleAddProduct}/>
      <ListProduct productos={prodcutos} hChangeProduct={handleChangedProduct} hDeleteProduct={handleDeleteProduct}/>

      {/*Product item*/}
      <thead>
          <tr>
             <th>ID</th>
             <th>NOMBRE</th>
             <th>DESCRIPCION</th>
             <th>P.U.</th>
             <th>DESCUENTO</th>
             <th>CON DESCUENTO</th>
          </tr>
      </thead>
      <tbody>
        {/*Interar en el componente ProductList*/}
        {prodcutos.map((p) => (
          <ProductItem productos={p} /> //Recibe solamente un objeto del array de productos
        ))}
      </tbody>
    </>
  )

}

function productReducer(productos, action) { // Reducer que se encarga de manejar las acciones que se le pasan. Recibe el estado actual y la acción a realizar.
  // El reducer es una función que recibe el estado actual (array de objetos de los productos) y una acción (objeto con el tipo de accion y 1 o varios campos para modificar el array de objetos productos) y devuelve un nuevo estado(el array de objetos productos modificado)
  switch (action.type) {
    case 'added': {
      return [...productos, {
        id: action.id,
        nombre: action.nombre,
        // descripcion: action.descripcion,
        // precioUnitario: action.precioUnitario,
        // descuento: action.descuento,
      }];
    }
    case 'changed': {
      return productos.map(t => {
        if (t.id === action.product.id) {
          return action.product;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return productos.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
const calcDescuento = (precioUnitario, descuento) => {
  return precioUnitario * (1 - descuento / 100);
}
// Estado inicial de los productos
let nextId = 3;
const productosInicial = [
    { id: 0, nombre: 'Producto 1', descripcion: "DescP1", precioUnitario: 80, descuento: 25, calcDescuento },
    { id: 1, nombre: 'Producto 1', descripcion: "DescP2", precioUnitario: 300, descuento: 25, calcDescuento },
    { id: 2, nombre: 'Producto 1', descripcion: "DescP3", precioUnitario: 220, descuento: 0, calcDescuento},
]


export default App;