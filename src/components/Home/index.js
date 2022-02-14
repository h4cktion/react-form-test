import Header from "components/Header";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="text-slate-500">
      <Header />
      <h1 className="mt-20 mb-5 text-4xl font-bold">Welcome to my react-hook-form App.</h1>
      <p>Hello, it's a little project to test Tailwind and react-hook-form. I also use react-router-dom.</p>
      <div className="flex w-1/2 mx-auto h-full justify-around items-center mt-16">
        <div className="h-56 w-56 rounded-lg relative bg-blue-700 text-white drop-shadow-lg">
          Test my SignUp
          <input
            type="button"
            value="TRY"
            onClick={() => navigate("signup")}
            className="py-2 w-3/4 mx-auto absolute rounded-lg bg-white text-black bottom-2 left-7 cursor-pointer"
          />
        </div>
        <div className="h-56 w-56 bg-gray-100 relative drop-shadow-lg">
          Test my Form
          <input
            type="button"
            value="TRY"
            onClick={() => navigate("form")}
            className="py-2 w-3/4 mx-auto absolute rounded-lg bg-white text-black bottom-2 left-7 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
