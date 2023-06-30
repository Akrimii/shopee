import { useState } from "react";
import { Product } from "./useProducts";

export interface CartItem {
  p: Product;
  numOfItem: number;
}

function useCarts() {
  const [carts, setCarts] = useState<CartItem[]>([]);

  function onMinusShoppingCartItem(item: CartItem) {
    if (item.numOfItem === 1) {
      return;
    } else {
      setCarts(
        carts.map((cart) =>
          cart.p === item.p ? { ...cart, numOfItem: cart.numOfItem - 1 } : cart
        )
      );
    }
  }

  function onAddShoppingCartItem(item: CartItem) {
    if (item.numOfItem >= item.p.stock) {
      return;
    } else {
      setCarts(
        carts.map((cart) =>
          cart.p === item.p ? { ...cart, numOfItem: cart.numOfItem + 1 } : cart
        )
      );
    }
  }

  function onDeleteCartItem(product: Product) {
    setCarts(carts.filter((cart) => cart.p !== product));
  }

  return {
    carts,
    setCarts,
    onMinusShoppingCartItem,
    onAddShoppingCartItem,
    onDeleteCartItem,
  };
}

export default useCarts;
