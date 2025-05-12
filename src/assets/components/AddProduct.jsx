import { useState } from "react";

export default function AddProduct({ fAddProduct }) {
    const [texto, setTexto] = useState(""); // El valor inicial del input es una cadena vacía
    return (
        <>
            <div className="container">
                <input placeholder="Agregar producto" value={texto} onChange={e => setTexto(e.target.value)}/>
                <button onClick={() => { setTexto('');fAddProduct(texto);}}>Agregar</button> {/*El boton agregar producto. Al hacer click limpiamos el input con setTexto*/}
            </div>
        </>
    );
}