import { useMemo, useState } from "react";
import '../css/SearchBar.css';

export default function SearchBar({ productData }) {
    const [searchTermName, setSearchTermName] = useState("");
    const [searchTermId, setSearchTermId] = useState("");
    
    const handleSearchName = (e) => {
        setSearchTermName(e.target.value);
        setSearchTermId("");
    };

    const handleSearchId = (e) => {
        setSearchTermId(e.target.value);
        setSearchTermName("");
        
    };

    const filteredProducts = useMemo(() => {
        return productData.filter((product) => {
            if (searchTermName.length > 0) {
                return product.producto.toLowerCase().includes(searchTermName.toLowerCase());
            }
            if (searchTermId.length > 0) {
                return product.id.toString() === searchTermId.toString();
            }
            //return true; // Descomentar si quieres mostrar todos los productos cuando no hay filtro
        });
    });
    console.log("FILTERED")
    console.log(filteredProducts)

    return (
        <div>
        <input className="search-bar-product"
            type="text"
            placeholder="Buscar producto por nombre..."
            value={searchTermName}
            onChange={handleSearchName}
            //hidden={searchTermId.length > 0} //Si se escribe en este campo de busqueda, se oculta el otro
        />
        <input className="search-bar-product"
            type="text"
            placeholder="Buscar producto por ID..."
            value={searchTermId}
            onChange={handleSearchId}
            //hidden={searchTermName.length > 0} //Si se escribe en este campo de busqueda, se oculta el otro
        />
        {filteredProducts.length > 0 && (
            <div className="data">
            <h2>Resultados de la búsqueda</h2>
            {filteredProducts.map((product, index) => (
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
}