import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

export const FormContext = createContext();
export const DispatchContext = createContext();

function DumpFormContext(props) {
  const initialState = {
    formPile: [],
    currentForm: "dumpForm1",
    animation: "animate-fade-in-down",
    form: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);
// old form and setForm
  return (
    <FormContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </FormContext.Provider>
  );
}

export default DumpFormContext;
