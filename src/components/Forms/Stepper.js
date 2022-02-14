import { FormContext } from "context/FormContext";
import {
  FORM_1,
  FORM_2,
  FORM_3,
  FORM_4,
  FORM_4bis,
  FORM_5,
  FORM_FINAL,
} from "helpers/automateHelper";
import React, { useContext } from "react";

function Stepper() {
  const state = useContext(FormContext);
  const { currentForm, formPile } = state;

  const getClasses = (form) => {
    if (form === currentForm) return "border-0 animate-ping bg-orange-400";
    if (formPile.includes(form)) return "bg-teal-400";
    return "";
  };
  return (
    <div className="mt-12 flex w-1/3 m-auto h-20 justify-around items-center">
      <span
        className={`block inline-flex h-4 w-4 rounded-full border-2 border-teal-400 opacity-75 ${getClasses(
          FORM_1
        )}`}
      ></span>
      <span
        className={`block inline-flex h-4 w-4 rounded-full border-2 border-teal-400 opacity-75 ${getClasses(
          FORM_2
        )}`}
      ></span>
      <span
        className={`block inline-flex h-4 w-4 rounded-full border-2 border-teal-400 opacity-75 ${getClasses(
          FORM_3
        )}`}
      ></span>
      <div className="flex flex-col h-20 justify-around">
        <span
          className={`block inline-flex h-4 w-4 rounded-full border-2 border-teal-400 opacity-75 ${getClasses(
            FORM_4
          )}`}
        ></span>
        <span
          className={`block inline-flex h-4 w-4 rounded-full border-2 border-teal-400 opacity-75 ${getClasses(
            FORM_4bis
          )}`}
        ></span>
      </div>
      <span
        className={`block inline-flex h-4 w-4 rounded-full border-2 border-teal-400 opacity-75 ${getClasses(
          FORM_5
        )}`}
      ></span>
      <span
        className={`block inline-flex h-4 w-4 rounded-full border-2 border-teal-400 opacity-75 ${getClasses(
          FORM_FINAL
        )}`}
      ></span>
    </div>
  );
}

export default Stepper;
