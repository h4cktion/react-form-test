import { FORM_1 } from "helpers/automateHelper";
import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

export const FormContext = createContext();
export const DispatchContext = createContext();

function FormContextContainer(props) {
  const initialState = {
    formPile: [],
    currentForm: FORM_1,
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

export default FormContextContainer;
