import React from "react";
import { useForm } from "react-hook-form";
import me from "assets/images/Moi.jpg";
import Spinner from "components/commons/Spinner";

function SignUp({onSubmit, loading}) {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex">
      <div className="flex-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex m-auto h-screen"
        >
          <div className="flex w-3/4 m-auto flex-col md:w-1/2">
            <label className="block text-left mb-5">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                User name
              </span>
              <input
                type="userName"
                {...register("userName", { required: true })}
                className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Wandolski"
              />
              {errors.userName && (
                <span className="text-xs text-red-500">
                  You must choose a name !
                </span>
              )}
            </label>
            <label className="block text-left mb-5">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                type="email"
                {...register("email", { required: true })}
                className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
              />
              {errors.email && (
                <span className="text-xs text-red-500">Email required</span>
              )}
            </label>
            <label className="block text-left mb-5">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="********"
                className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
              {errors.password && (
                <span className="text-xs text-red-500">Password required</span>
              )}
            </label>
            <label className="block text-left mb-5 text-sm">
              <input {...register("cgu", { required: true })} type="checkbox" />
              <span className="ml-2 text-neutral-500">Accepte to do nothing with your info.</span>
              {errors.cgu && (
                <span className="text-xs text-red-500 block">You must accepte our CGU</span>
              )}
              </label>
            {!loading && (
              <input
                type="submit"
                value="Sign up"
                className="bg-blue-700 p-4 rounded text-white font-bold cursor-pointer"
              />
            )}
            {loading && (
              <Spinner />
            )}
            <hr className="my-10"/>
            <p className="text-neutral-500 text-sm">You can field info, it's just for testing ;-)</p>
          </div>
        </form>
      </div>
      <div className="flex-1 bg-blue-700 hidden md:block">
        <div className="flex h-screen text-white">
          <div className="flex flex-wrap w-3/4 m-auto text-left  before:content-['\201d'] before:text-7xl before:text-yellow-300">
            <h1 className="text-6xl ">Welcome to my react-hook-form.</h1>
            <p>By Matthieu Wandolski</p>
            <div className="flex justify-center w-full mt-20">
              <img
                src={me}
                alt="Wandolski Matthieu"
                className="h-32 w-32 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
