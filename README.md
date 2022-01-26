# Proyecto final

eCommerce realizado con ReactJs para curso de Coderhouse.

![image](https://i.imgur.com/s06SH2Y.gif)

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

- Accedo a la home desde el logo
- Accedo a cada categori utilizando NavLink

`ItemList.jsx`

- Se configura una promesa para actualizar el estado de productos. Si se recibe el `categoryId` se filtran los productos.

`ItemDetailContainer.jsx`

- Se configura una promesa para actualizar el estado de un producto. Al resolver la misma se actualiza el estado del producto para mostrar solamente uno.

`ItemDetail.jsx`

- Se muestran todos los detalles del producto incluida la lista de items.
- Se agrega el component `ItemCount` dentro del mismo.
