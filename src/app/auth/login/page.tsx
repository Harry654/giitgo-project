import React from "react";
import GithubButton from "../../../components/GithubButton";
import LoginForm from "../../../components/LoginForm";
// import { auth } from "../../../lib/firebase/config";

export default function Login() {
  return (
    <div className="flex flex-wrap">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p className="text-left text-xl font-bold">
            Welcome back, please enter your details.
          </p>
          {/* <p>Username: {auth.currentUser?.displayName}</p> */}
          <GithubButton />
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">
              or
            </div>
          </div>
          <LoginForm />
          <div className="py-12 text-center">
            <p className="whitespace-nowrap text-gray-600">
              Don&apos;t have an account?
              <a
                href="#"
                className="underline-offset-4 font-semibold text-gray-900 underline ml-5"
              >
                Sign up for free
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
          <p className="mb-8 text-3xl font-semibold leading-10">
            We work 10x faster than our compeititors and stay consistant.
          </p>
          <p className="mb-4 text-3xl font-semibold">John Elmond</p>
          <p className="">Founder, Emogue</p>
          <p className="mb-7 text-sm opacity-70">Web Design Agency</p>
        </div>
      </div>
    </div>
  );
}
