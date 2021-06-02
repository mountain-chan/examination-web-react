export type UserModel = {
  id: string;
  username: string;
  displayName: string;
  point: number;
};

export type OptionModel = {
  checked: boolean;
  text: string;
};

export type QuestionModel = {
  id: string;
  question: string;
  code: string;
  options: string[];
  correctAnswer: string;
  answers: string[];
  marked: boolean;
  multiAnswers: boolean;
};