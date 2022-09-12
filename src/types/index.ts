export type buttonThemes =
  | "default__purple"
  | "default__light"
  | "default__black"
  | "default__red"
  | "default__icon";

export type buttonSizes = "small" | "medium" | "large";

export type clientAddress = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type items = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type senderAddress = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};
