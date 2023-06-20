import React, { useState, createContext } from "react";

export const CustomerViewContext = createContext();

const CustomerViewProvider = ({ children }) => {
  const [info, setInfo] = useState(null);

  const storeInfo = response => {
    setInfo(response);
  };

  return <CustomerViewContext.Provider value={{ info, storeInfo }}>{children}</CustomerViewContext.Provider>;
};

export default CustomerViewProvider;
