import "./styles.css";
import { useProducts } from "./useProducts";
import type { Product } from "./useProducts";
import React, { useState } from "react";

/**
 * - Build a simple cart page, it doesn't have to look pretty.
 * - 1. Each product should show a product name, image, and a button with price
 * - 2. If the item is not in your cart, show an "Add" button that supports "add to cart" logic
 * - 3. If the item is in your cart, show a "Remove" button  that supports "remove from cart" logic
 * - 4. Show the subtotal of the cart anywhere on the page
 */

export default function Shop() {
  const { loading, products } = useProducts();
  // const [cart] = useState()
  // Cart Logic

  type CartProducts = Product[];

  console.log(products);

  const [cart, setCart] = useState<CartProducts>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  if (loading) return <p>Loading...</p>;

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + product.price);
  };
  console.log(cart);

  const checkProductInCart = (product: Product) => {
    return cart.find((item: Product) => item.sku === product.sku);
  };

  const removeFromCart = (product: Product) => {
    setCart(cart.filter((item: Product) => item.sku !== product.sku));
    setTotalPrice(totalPrice - product.price);
  };

  return (
    products && (
      <ul>
        {products.map((product: Product) => (
          <li>
            {product.name}
            <img width="50" src={product.assets.detail.file.url} />
            {/* if product is in cart, show remove button, else, show add button */}
            {checkProductInCart(product) && (
              <button onClick={() => removeFromCart(product)}> Remove</button>
            )}
            {!checkProductInCart(product) && (
              <button onClick={() => addToCart(product)}>
                {" "}
                Buy for ${product.price}
              </button>
            )}
          </li>
        ))}
        <li>Total Price {totalPrice}</li>
      </ul>
    )
  );
}
