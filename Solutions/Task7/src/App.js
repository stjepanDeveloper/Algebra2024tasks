import "./App.css";
import { ProductCard, ProductList } from "./components";

function App() {
  const product = {
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 199.99,
    rating: 4.5,
    imageUrl: "https://placehold.co/300x200",
  };

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation.",
      price: 199.99,
      rating: 4.5,
      imageUrl: "https://placehold.co/300x200",
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Latest model with advanced camera and long battery life.",
      price: 699.99,
      rating: 4.8,
      imageUrl: "https://placehold.co/300x200",
    },
    {
      id: 3,
      name: "Laptop",
      description: "Powerful and lightweight laptop for professionals.",
      price: 1299.99,
      rating: 4.7,
      imageUrl: "https://placehold.co/300x200",
    },
    {
      id: 4,
      name: "Smartwatch",
      description: "Fitness tracker with heart rate monitor and GPS.",
      price: 249.99,
      rating: 4.2,
      imageUrl: "https://placehold.co/300x200",
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      description: "Compact earbuds with great sound quality.",
      price: 129.99,
      rating: 4.0,
      imageUrl: "https://placehold.co/300x200",
    },
  ];

  return (
    <div>
      <h2>Featured Product</h2>
      <p>Data is coming from a single ProductCard.jsx component.</p>
      <ProductCard product={product} />
      <hr />
      <h2>All Products</h2>
      <p>Data is coming from a single ProductList.jsx component</p>
      <ProductList products={products} />
    </div>
  );
}

export default App;
