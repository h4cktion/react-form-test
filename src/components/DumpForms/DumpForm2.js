import { DispatchContext, FormContext } from "context/dumpFormContext";
import { saveForm } from "context/dumpFormContext/actions";
import { FORM_3 } from "helpers/automateHelper";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import FormAction from "./FormAction";

function DumpForm2({ goBack }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const state = useContext(FormContext);
  const dispatchContext = useContext(DispatchContext);
  const {
    form: { age },
    currentForm,
    animation,
  } = state;

  const onSubmit = (data) => {
    saveForm(data, FORM_3, state, currentForm, dispatchContext);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-1/3 m-auto mt-32 flex flex-col p-5 ${animation}`}
    >
      <label className="block text-left mb-5">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Age
        </span>
        <input
          type="number"
          defaultValue={age}
          autoFocus
          {...register("age", { required: true, min: 18 })}
          className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="18"
        />
        {errors.age && (
          <span className="text-xs text-red-500">Min age must be 18</span>
        )}
      </label>

      <FormAction goBack={goBack} currentForm={currentForm} />
    </form>
  );
}

export default DumpForm2;
