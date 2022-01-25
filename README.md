# Proyecto final

eCommerce realizado con ReactJs para curso de Coderhouse.

## Estructura

### Productos

El mock de productos se encuentra en el root `/products.jsx` donde se detallan los id y categoryId.

Cada producto tiene los siguientes detalles:

- titulo
- precio
- descripcion de 3 items
- foto

### Rutas

- `/` se muestra todos los productos utilizando el componente **ItemListContainer**
- `/category/:categoryId` se muestra todos los productos de la categoria seleccionada utilizando el componente **ItemListContainer**
- `/item:id` se muestra el detalle de un producto utilizando el componente **ItemDetailContainer**

### Componentes

`Navbar.jsx`

- Accedo a la home /
- Agrego NavLink para cada categoria
