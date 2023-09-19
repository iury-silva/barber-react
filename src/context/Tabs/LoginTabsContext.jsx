import { createContext, useState } from "react";
import propTypes from "prop-types";

export const LoginTabsContext = createContext();

export const LoginTabsProvider = ({ children }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <LoginTabsContext.Provider value={{ tabValue, handleChange }}>
      {children}
    </LoginTabsContext.Provider>
  );
};

LoginTabsProvider.propTypes = {
  children: propTypes.node.isRequired,
};