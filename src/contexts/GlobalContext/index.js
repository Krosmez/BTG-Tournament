import { createContext, useReducer } from "react";

import handleModal from "../reducers/handleModal";
import handlePoolData from "../reducers/handlePoolData";
import useStorage from "../../hooks/useStorage";

const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const { getItem, setItem, removeItem } = useStorage();

  let initialState = {
    modal: null,
    poolData: [],
    rounds: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_MODAL":
        return handleModal(state, action);
      case "HANDLE_POOL_DATA":
        return handlePoolData(state, action);
      case "setRounds":
        return {
          ...state,
          rounds: action.payload,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
