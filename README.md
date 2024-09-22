Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Data Object Documentation

### Overview
The data object represents a list of products in our application. Each product has properties such as name, price, size, and an optional note.

### Data Object Structure
Each product object contains the following fields:

- **name**: (string, required) The name of the product.
- **price**: (number, required) The price of the product in euros.
- **size**: (number, optional) The size of the product in centiliters (cl).
- **note**: (string, optional) Additional information or notes about the product.

### Example
```json
{
    "name": "Coca-Cola",
    "price": 1.50,
    "size": 33,
    "note": "Chilled drink"
}