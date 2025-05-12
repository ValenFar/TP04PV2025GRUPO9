
export default function ProductItem({ productos }) {
    return (
        <>
        <tr>
            <td>{productos.id}</td>
            <td>{productos.nombre}</td>
            <td>{productos.descripcion}</td>
            <td>{productos.precioUnitario}</td>
            <td>{productos.descuento}</td>
            <td>{productos.calcDescuento(productos.precioUnitario,productos.descuento)}</td>
        </tr>
        </>
    );
}