import React from "react";

const Store = React.createContext({
  store: 0,
  setStore: () => {},
});
const Provider = Store.Provider;

export { Provider, Store };
