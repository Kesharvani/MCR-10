import { createContext, useContext } from "react";
import { initialValue, reducerFunction } from "../reducer/mainReducer";
import { useReducer, useEffect } from "react";
import { ACTION_TYPE } from "../utils/Constant";
import { inventoryData } from "../db/inventory";

export const MainContext = createContext();
export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducerFunction,
    initialValue,
    (initialValue) => JSON.parse(localStorage.getItem("data")) || initialValue
  );

  const getData = () => {
    dispatch({ type: ACTION_TYPE.SUCCESS, payload: inventoryData });
  };

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("data"))) getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export const useGlobalObject = () => useContext(MainContext);
