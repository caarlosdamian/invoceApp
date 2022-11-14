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
    case "INPUT-TEXT":
      return {
        ...state,
        [action.payload.event.target.name]: action.payload.event.target.value,
      };
    case "INVOICE_DATE_CHANGE":
      return {
        ...state,
        createdAt: action.payload.event,
      };

    case "INVOICE_PAYMENT_TERM":
      return {
        ...state,
        paymentTerms: action.payload.event,
      };
    case "INVOICE_CREATE_EMPTY_ITEM":
      let obj = {
        name: "",
        quantity: 0,
        price: 0.0,
        total: 0.0,
      };

      return {
        ...state,
        items: [...state.items, obj],
      };

    case "INVOICE_ADD_ITEM":
      const newarr = state.items.map((item: any, index: any) => {
        if (index === action.payload.index) {
          return {
            ...item,
            [action.payload.event.target.name]:
              action.payload.event.target.value,
              // pendiente total 
          };
        }
        return item;
      });
      return {
        ...state,
        items: newarr,
      };

    case "INVOICE_REMOVE_ITEM":
      const removeArr = state.items.filter(
        (item: any, index: any) => index !== action.payload.index && item
      );
      return {
        ...state,
        items: removeArr,
      };

    default:
      return state;
  }
};

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
