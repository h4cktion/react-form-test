import { DispatchContext, FormContext } from "context/dumpFormContext";
import { saveForm } from "context/dumpFormContext/actions";
import { FORM_5, FORM_FINAL } from "helpers/automateHelper";
import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import FormAction from "./FormAction";

function DumpForm5({goBack}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const state = useContext(FormContext);
  const dispatchContext = useContext(DispatchContext);
  const { anmation, currentForm } = state;
  
  const onSubmit = (data) => {
    saveForm(data, FORM_FINAL, state, currentForm, dispatchContext);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-1/3 m-auto mt-32 flex flex-col p-5 animate-fade-in-down ${anmation}`}
    >
      <label className="block text-left mb-5">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          5
        </span>
        <input
          type="text"
          autoFocus
          {...register("phone", { required: true})}
          className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="+33 6 24 53 45 96"
        />
        {errors.phone && (
          <span className="text-xs text-red-500">Phone is required</span>
        )}
      </label>
      <label className="block text-left mb-5">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Where you want to go
        </span>
        <input
          type="radio"
          value={true}
          {...register("hasPaimentInfo", { required: true})}
          className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
        <input
          type="radio"
          value={false}
          {...register("hasPaimentInfo", { required: true})}
          className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
        {/* {errors.phone && (
          <span className="text-xs text-red-500">Phone is required</span>
        )} */}
      </label>

      <FormAction goBack={goBack} currentForm={currentForm} />
    </form>
  );
}

export default DumpForm5;
