import { DispatchContext, FormContext } from "context/FormContext";
import { saveForm } from "context/FormContext/actions";
import { FORM_5 } from "helpers/automateHelper";
import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import FormAction from "./FormAction";

function Form4({ goBack }) {
  const state = useContext(FormContext);
  const dispatchContext = useContext(DispatchContext);
  const { currentForm, form:{movie} } = state;

  const defaultValues = {
    movie,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    saveForm(data, FORM_5, state, currentForm, dispatchContext);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/3 m-auto mt-32 flex flex-col p-5 animate-fade-in-down"
    >
      <label className="block text-left mb-5">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Best movie
        </span>
        <Controller
          render={({ field }) => (
            <select
              {...field}
              className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            >
              <option value="">--Please choose a movie--</option>
              <option value="Inception">Inception</option>
              <option value="Back to the future">Back to the future</option>
            </select>
          )}
          rules={{ required: true }}
          control={control}
          name="movie"
          defaultValue={"Back to the future"}
        />

        {errors.movie && (
          <span className="text-xs text-red-500">You must choose your best movie.</span>
        )}
      </label>
      <FormAction goBack={goBack} currentForm={currentForm} />
    </form>
  );
}

export default Form4;
