import Product from "./product";

interface ProductInCart extends Product {
    quantity: number;
}

export default ProductInCart;