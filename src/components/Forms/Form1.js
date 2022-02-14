import { DispatchContext, FormContext } from "context/FormContext";
import { saveForm } from "context/FormContext/actions";
import { FORM_2 } from "helpers/automateHelper";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import FormAction from "./FormAction";

function Form({ goBack }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const state = useContext(FormContext);
  const dispatch = useContext(DispatchContext);
  const {
    form: { gamerTag },
    currentForm,
    animation,
  } = state;

  const onSubmit = (data) => {
    saveForm(data, FORM_2, state, currentForm, dispatch);
  };

  // const onSubmit = (data) => {
  //   dispatch(saveForm(data, FORM_2, state, currentForm));
  // };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-1/3 m-auto mt-32 flex flex-col p-5 ${animation}`}
    >
      <label className="block text-left mb-5">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Gamer Tag
        </span>
        <input
          type="text"
          autoFocus
          defaultValue={gamerTag || ""}
          {...register("gamerTag", { required: true })}
          className={`mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400
           focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1
           ${errors.gamerTag && "border-red-500"}
           `}
          placeholder="HACKTION"
        />
        {errors.gamerTag && (
          <span className="text-xs text-red-500">Gamer Tag required</span>
        )}
      </label>

      <FormAction goBack={goBack} currentForm={currentForm} />
    </form>
  );
}

export default Form;
