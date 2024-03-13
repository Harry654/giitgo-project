"use client";
import React from "react";
import { handleGithubLogin } from "@/helpers/githubAuth";
import Image from "next/image";

function GithubButton() {
  return (
    <button
      className="mt-8 flex items-center justify-center gap-5 rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:scale-105"
      onClick={handleGithubLogin}
    >
      <Image
        className="mr-2 h-5"
        src="/images/github-mark.svg"
        alt="github-logo"
      />
      Log in with GitHub
    </button>
  );

}

export default GithubButton;
