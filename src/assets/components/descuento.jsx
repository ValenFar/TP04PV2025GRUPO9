import { useState } from "react";
import '../css/SearchBar.css';
import '../css/descuento.css';

export default function Descuento({ productData }) {
    const [descuento, setDescuento] = useState("");
    const [productosConDescuento, setProductosConDescuento] = useState([]);

    const handleDescuentoChange = (e) => setDescuento(e.target.value);

    const aplicarDescuento = () => {
        const porcentaje = parseFloat(descuento);
        if (isNaN(porcentaje) || porcentaje <= 0 || porcentaje >= 100) {
            alert("Ingrese un porcentaje válido (entre 1 y 99)");
            return;
        }
        const productosFiltrados = productData.map(product => ({
            ...product,
            precioConDescuento: (product.precio * (1 - porcentaje / 100)).toFixed(2)
        }));
        setProductosConDescuento(productosFiltrados);
    };

    return (
        <div>
            <div className="contenedor-descuentos">
                <input
                className="input-descuentos"
                type="number"
                placeholder="Descuento %"
                value={descuento}
                onChange={handleDescuentoChange}
                min="1"
                max="99"
                
                /> 
                <button className='button-aplicar' onClick={aplicarDescuento}>Aplicar</button>
            </div>

            {productosConDescuento.length > 0 && (
                <div className="data">
                    <h2>Productos con descuento</h2>
                    <button className="button-cancelar" onClick={() => setProductosConDescuento([])}>Cancelar</button>
                    {productosConDescuento.map((product, index) => (
                        <div key={index} className="product-block">
                            <div className="data-row"><strong>ID:</strong> {product.id}</div>
                            <div className="data-row"><strong>Producto:</strong> {product.producto}</div>
                            <div className="data-row"><strong>Descripción:</strong> {product.descripcion}</div>
                            <div className="data-row"><strong>Precio original:</strong> ${product.precio}</div>
                            <div className="data-row"><strong>Precio con descuento:</strong> ${product.precioConDescuento}</div>
                            <div className="data-row"><strong>Stock:</strong> {product.stock}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}