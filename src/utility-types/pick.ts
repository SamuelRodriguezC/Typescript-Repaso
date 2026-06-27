// permite crear un tipo sincronizado pero con unas propiedades 
// especificas seleccionadas

interface Producto {
    id: number;
    nombre: string;
    stock: string;
    categoria: string;
    imagen: Array<string>;
}

type cardProducto = Pick<Producto, 'nombre' | 'categoria'> //Crea un tipo sincronizado de Producto 
