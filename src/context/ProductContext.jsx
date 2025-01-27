import React, { createContext, useContext } from "react";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const products = [
        { 
            id: 1, 
            name: "Product 1", 
            price: 10, 
            category: "Electronics", 
            image: "https://cdn.mos.cms.futurecdn.net/AVEcca7TuDmt8wjaFZPkzj.jpg",
            description: "This is a sleek and stylish smartphone with a high-resolution camera and a long-lasting battery. Perfect for gaming, photography, and everyday use."
        },
        { 
            id: 2, 
            name: "Product 2", 
            price: 20, 
            category: "Apparel", 
            image: "https://a.storyblok.com/f/165154/1280x720/0d45aa1c3e/2_eight-top-t-shirt-design-tips.jpg/m/",
            description: "A comfortable and trendy T-shirt made from soft cotton fabric. Available in various sizes and colors to match your style."
        },
        { 
            id: 3, 
            name: "Product 3", 
            price: 30, 
            category: "Books", 
            image: "https://images.squarespace-cdn.com/content/v1/5876279bbebafb82a7c81c00/f4e17d6a-81db-4a04-9bda-63c86c517778/IMG_3105.jpg",
            description: "A must-read book for book lovers. Dive into an engaging storyline that will keep you hooked until the last page. Perfect for relaxing on a weekend."
        },
        { 
            id: 4, 
            name: "Product 4", 
            price: 40, 
            category: "Home Decor", 
            image: "https://images.squarespace-cdn.com/content/v1/63dde481bbabc6724d988548/0ae39347-f44e-4d15-ba56-432e8fd274b1/_56c4f117-cec2-498e-a7f4-267c2860694c.jpeg",
            description: "A modern home decor item designed to elevate your living space. It adds a touch of elegance and comfort to any room in your house."
        }    
  ];

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("userProducts must be used within an ProductProvider");
  }
  return context;
}

