import React, { createContext, useState } from "react";

export const FormContext = createContext();
export const DispatchContext = createContext();

function DumpFormContext(props) {

  const [form, setForm] = useState({ formPile: [], currentForm: 'dumpForm1' });

  return (
    <FormContext.Provider value={form}>
      <DispatchContext.Provider value={setForm}>
        {props.children}
      </DispatchContext.Provider>
    </FormContext.Provider>
  );
}

export default DumpFormContext;
