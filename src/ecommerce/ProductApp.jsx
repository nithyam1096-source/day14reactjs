import { useState } from "react";

const products = [
  { name: "Phone", price: 10000 },
  { name: "Laptop", price: 50000 }
];

export const ProductApp = () => {
  const [cart, setCart] = useState([]);

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <>
      <h2>Products</h2>
      {products.map((p, i) => (
        <div key={i}>
          {p.name} - ₹{p.price}
          <button onClick={() => setCart([...cart, p])}>Add</button>
        </div>
      ))}

      <h3>Cart</h3>
      {cart.map((c, i) => <p key={i}>{c.name}</p>)}
      <h4>Total: ₹{total}</h4>
    </>
  );
};