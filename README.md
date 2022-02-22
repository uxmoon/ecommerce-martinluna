# Strimin

E-commerce de productos para streaming realizado con [React](https://reactjs.org/) para proyecto final en [Coderhouse](https://www.coderhouse.com/).

![image](https://i.imgur.com/hpWF4Wz.gif)

---
## Productos

Los productos se encuentran cargados en Firebase, cada producto tiene los siguientes detalles:

- categoryId
- description
- imageUrl
- price
- stock
- title

## Rutas

| Ruta | Descripción | Componente |
| ----------- | ----------- | ----------- |
| `/` | Pagina de inicio | `ItemListContainer` |
| `/category/:categoryId` | Productos filtrado por categoría | `ItemListContainer` |
| `/item:id` | Detalle del producto | `ItemDetailContainer` |
| `/cart` | Carro de compras | `Cart` |
| `/cart/:cartId` | Carro de compras | `Checkout` |
| `*` | Página 404 | `ItemListContainer` |

## Componentes

`components/Navbar.jsx`

- Se utiliza `useState` para controlar el menu cuando esta abierto y cerrado.
- Se crea un array para las opciones del menu para Desktop y Mobile.

`components/ItemList.jsx`

- Se utiliza firestore para utilizar la colección de `items` o mostrar todos los productos.

`components/ItemDetailContainer.jsx`

- Se utiliza firestore para mostrar el detalle de un solo producto en la colección de `items`.

`context/CartProvider.jsx`

- Se crea el contexto y se agregan las funciones necesarias para calcular precio total y cantidad total de productos.
- Se utiliza `useState` para crear un array para el carro y un objeto para la orden.

`firebase/index.js`

- Se agrega la configuración de Firebase.

## Detalles de implementación

- La app es responsive y se utiliza [tailwindcss](https://tailwindcss.com/) como framework de CSS.
- Imagenes: Se utiliza imagen de [Unplash](https://unsplash.com/) para el hero e imagenes de amazon.com para los productos.
- Iconos: [heroicons](https://heroicons.com/)