import { DispatchContext, FormContext } from "context/dumpFormContext";
import { FORM_4, FORM_4bis } from "helpers/automateHelper";
import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import FormAction from "./FormAction";

function DumpForm3({ goBack }) {
  const form = useContext(FormContext);
  const dispatchContext = useContext(DispatchContext);
  const { currentForm, phone, hasPaimentInfo } = form;

  const defaultValues = {
    phone,
    hasPaimentInfo,
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    const newForm = { ...form, ...data };
    newForm.formPile.push(currentForm);
    newForm.currentForm = data.hasPaimentInfo;
    dispatchContext(newForm);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/3 m-auto mt-32 flex flex-col p-5"
    >
      <label className="block text-left mb-5">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Phone
        </span>
        <input
          type="text"
          autoFocus
          className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          defaultValue={phone}
          {...register("phone", { required: true })}
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
        <Controller
          render={() => {
            return (
              <div className="flex justify-around my-10">
                <label
                  className={`p-10 bg-gray-100 rounded-lg ${
                    watch("hasPaimentInfo") === FORM_4 && " bg-blue-100"
                  }`}
                >
                  Go to form4
                  <input
                    type="radio"
                    value={FORM_4}
                    name="hasPaimentInfo"
                    {...register("hasPaimentInfo", { required: true })}
                    className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 hidden"
                  />
                </label>
                <label
                  className={`p-10 bg-gray-100 rounded-lg ${
                    watch("hasPaimentInfo") === FORM_4bis && " bg-blue-100"
                  }`}
                >
                  Go to form4bis
                  <input
                    type="radio"
                    name="hasPaimentInfo"
                    value={FORM_4bis}
                    {...register("hasPaimentInfo", { required: true })}
                    className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 hidden"
                  />
                </label>
              </div>
            );
          }}
          control={control}
          name="hasPaimentInfo"
        />
        {errors.hasPaimentInfo && (
          <span className="text-xs text-red-500">
            You must choose the next form.
          </span>
        )}
      </label>

      <FormAction goBack={goBack} />
    </form>
  );
}

export default DumpForm3;
