import { FastfoodOutlined } from "@material-ui/icons";
import React, { useReducer, createContext } from "react";
import userReducer from "./reducers/store.reducer";


const StoreContext = createContext();

const initialState = {
  isLoading: true,
  isLoggedIn: false,
  user:{
    token: null,
    darkMode: true,
  },
  message: {
    content: "dsadasd",
    show: true
  }
};

function StoreContextProvider(props) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
export { StoreContext, StoreContextProvider};