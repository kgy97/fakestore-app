interface Product {
    id: number,
    title: string,
    description: string,
    category: string,
    image: string,
    rating: Rating;
    price: number;
}

export default Product;