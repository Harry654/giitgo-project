"use client";
import React, { useState } from "react";
import questions from "../../helpers/onboarding-questions.json";
import Image from "next/image";
import { IOnboardingAnswer } from "@/types";
import { auth } from "../../lib/firebase/config";

export default function Page() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<IOnboardingAnswer>({
    [questions[0]["answer-key"]]: [],
  });
  console.log(auth.currentUser);

  //   function handleGoToQuestion(questionIndex: number) {
  //     const questionNumber: number = questionIndex + 1;
  //     if (questionNumber <= maxQuestionReached) setCurrentQuestion(questionIndex);
  //   }

  function handleNextQuestion() {
    const total_num_of_questions: number = questions.length;
    const questionNumber: number = currentQuestion + 1;
    // return console.log(answers);

    if (answers[questions[currentQuestion]["answer-key"]].length === 0) return;

    if (questionNumber !== total_num_of_questions) {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questions[currentQuestion + 1]["answer-key"]]: [],
      }));
    }
  }

  function handleUpdateAnswer(answerKey: string, option: string) {
    let newAnswer: string[] = [];
    if (questions[currentQuestion]["option-type"] === "many") {
      if (answers.hasOwnProperty(answerKey)) {
        if (answers[answerKey].includes(option)) {
          newAnswer = answers[answerKey].filter((ans: string) => ans != option);
        } else {
          newAnswer = [...answers[answerKey], option];
        }
      } else {
        newAnswer = [option];
      }
    } else {
      newAnswer = [option];
    }

    console.log({ ...answers, [answerKey]: newAnswer });
    setAnswers((answers) => ({ ...answers, [answerKey]: newAnswer }));
  }
  return (
    <div className="flex w-screen flex-wrap text-slate-800">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="my-auto mx-auto flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem]">
          <div className="flex w-full flex-col rounded-2xl bg-white px-2 sm:px-14">
            <div className="mx-auto w-full max-w-md pb-10 px-8 sm:px-0">
              <div className="relative">
                <div
                  className="absolute left-0 top-2 h-0.5 w-full bg-gray-200"
                  aria-hidden="true"
                >
                  <div className="absolute h-full w-1/3 bg-gray-900"></div>
                  <div className="left absolute left-1/3 h-full w-1/3 bg-gradient-to-r from-gray-900"></div>
                </div>
                <ul className="relative flex w-full justify-between mt-10">
                  {questions.map((question, index) => (
                    <li
                      key={index}
                      className="text-left"
                      //   onClick={() => {
                      //     handleGoToQuestion(index);
                      //   }}
                    >
                      <p
                        className={`flex h-5 w-5 items-center justify-center rounded-full cursor-default ${
                          index <= currentQuestion
                            ? "bg-gray-600"
                            : "bg-gray-300"
                        } text-xs font-semibold text-white ${
                          index === currentQuestion
                            ? "ring ring-gray-600 ring-offset-2"
                            : ""
                        }`}
                      >
                        {index + 1}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h2 className="font-serif text-xl font-semibold text-gray-700">
              {questions[currentQuestion].title}
            </h2>
            <div className="flex justify-center flex-wrap gap-5 mt-3 cursor-pointer">
              {questions[currentQuestion].options.map((option, index) => (
                <p
                  key={index}
                  className={`text-sm flex gap-2 rounded-3xl border p-2 hover:scale-105 transition ${
                    answers[questions[currentQuestion]["answer-key"]]?.includes(
                      option
                    )
                      ? "bg-gray-900 text-white"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() => {
                    handleUpdateAnswer(
                      questions[currentQuestion]["answer-key"],
                      option
                    );
                  }}
                >
                  {option}
                  {answers[questions[currentQuestion]["answer-key"]]?.includes(
                    option
                  ) && (
                    <Image
                      src="/images/tick-green-icon.svg"
                      alt="tick"
                      width={10}
                      height={10}
                      color="white"
                    />
                  )}
                </p>
              ))}
            </div>
            <div className="mt-8 flex w-full flex-col pb-8">
              <button
                className={`my-2 flex items-center justify-center rounded-md  py-3 font-medium text-white ${
                  answers[questions[currentQuestion]["answer-key"]].length === 0
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-gray-900"
                }`}
                onClick={handleNextQuestion}
              >
                {questions.length != currentQuestion + 1
                  ? "Continue"
                  : "Finish"}
                {questions.length != currentQuestion + 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-4 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 bg-gradient-to-br md:flex md:w-1/2">
        <div className="py-16 px-8 text-white xl:w-[40rem]">
          <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
            New Feature
          </span>
          <p className="my-6 text-3xl font-semibold leading-10">
            Create animations with{" "}
            <span className="whitespace-nowrap py-2 text-cyan-300">
              drag and drop
            </span>
            .
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            necessitatibus nostrum repellendus ab totam.
          </p>
          <a
            href="#"
            className="font-semibold tracking-wide text-white underline underline-offset-4"
          >
            Learn More
          </a>
        </div>
        <Image
          className="ml-8 w-11/12 max-w-lg rounded-lg object-cover"
          src="/images/SoOmmtD2P6rjV76JvJTc6.png"
          alt=""
        />
      </div>
    </div>
  );
}
