import { createContext } from "react";
import propTypes from "prop-types";
export const SideContext = createContext();

export const SideProvider = ({ children }) => {

  const [side, setSide] = useState(0);

  return (
    <SideContext.Provider value={{}}>
      {children}
    </SideContext.Provider>
  );
};

SideProvider.propTypes = {
  children: propTypes.node.isRequired,
};