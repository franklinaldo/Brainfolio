import React, { useReducer, createContext } from "react";
import userReducer from "./reducers/user.reducer";


const UserContext = createContext();

const initialState = {
  user: null,
  token: null,
  isLoading: false
};

function UserContextProvider(props) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const value = { state, dispatch };

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
}
export { UserContext, UserContextProvider};