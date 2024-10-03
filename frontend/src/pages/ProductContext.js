import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productCount, setProductCount] = useState(0);

  return (
    <ProductContext.Provider value={{ productCount, setProductCount }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
