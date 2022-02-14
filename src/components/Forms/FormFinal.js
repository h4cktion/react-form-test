import { FormContext } from "context/FormContext";
import React, { useContext } from "react";
import FormAction from "./FormAction";

function FormFinal({ goBack }) {
  const state = useContext(FormContext);
  const { anmation, currentForm } = state;

  return (
    <div className={`w-1/3 m-auto mt-32 flex flex-col p-5 animate-fade-in-down ${anmation}`}>
      Recapitulatif
      <FormAction goBack={goBack} currentForm={currentForm} />
    </div>
  );
}

export default FormFinal;
