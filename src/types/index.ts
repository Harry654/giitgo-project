export type IOnboardingQuestion = {
  title: string;
  options: [string];
  type: string;
};

export type IOnboardingAnswer = {
  [key: string]: string[];
};
