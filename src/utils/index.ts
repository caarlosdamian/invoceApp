import { RowInfo } from "../interfaces";

export const initialState: RowInfo = {
  id: "",
  createdAt: "",
  paymentDue: "",
  description: "",
  paymentTerms: 0,
  clientName: "",
  clientEmail: "",
  status: "",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [],
  total: 0,
};

export const formReducer = (state: any, action: any) => {
  switch (action.payload.type) {
    case "INPUT-CLIENT":
      return {
        ...state,
        clientAddress: {
          ...state.clientAddress,
          [action.payload.event.target.name]: action.payload.event.target.value,
        },
      };
    case "INPUT-SENDER":
      return {
        ...state,
        senderAddress: {
          ...state.senderAddress,
          [action.payload.event.target.name]: action.payload.event.target.value,
        },
      };

    default:
      return state;
  }
};
