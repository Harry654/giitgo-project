"use client";
import React from "react";

function LoginForm() {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Please login with your GitHub account");
  };
  return (
    <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleFormSubmit}>
      <div className="flex flex-col pt-4">
        <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
          <input
            type="email"
            id="login-email"
            className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="mb-12 flex flex-col pt-4">
        <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
          <input
            type="password"
            id="login-password"
            className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            placeholder="Password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
      >
        Log in
      </button>
    </form>
  );
}

export default LoginForm;
