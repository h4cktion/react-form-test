import { DispatchContext, FormContext } from "context/dumpFormContext";
import { FORM_5 } from "helpers/automateHelper";
import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import FormAction from "./FormAction";

function DumpForm4({ goBack }) {
  const form = useContext(FormContext);
  const dispatchContext = useContext(DispatchContext);
  const { currentForm, movie } = form;

  const defaultValues = {
    movie,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    const newForm = { ...form, ...data };
    newForm.formPile.push(currentForm);
    newForm.currentForm = FORM_5;
    dispatchContext(newForm);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/3 m-auto mt-32 flex flex-col p-5"
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
      <FormAction goBack={goBack} />
    </form>
  );
}

export default DumpForm4;
