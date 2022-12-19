import { RowInfo } from "../interfaces";

const getRandoId = (max: number, min: number) => {
  const randomId = Math.random().toString(36).substring(5, 7).toUpperCase();
  const rand = Math.floor(Math.random() * (max - min)) + min;

  return `${randomId}${rand}`;
};

export const initialState: RowInfo = {
  id: `${getRandoId(1000, 9999)}`,
  createdAt: "",
  paymentDue: "",
  description: "",
  paymentTerms: 0,
  clientName: "",
  clientEmail: "",
  status: "Pending",
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
      const date = new Date();
      const newDate = new Date(
        date.setDate(date.getDate() + action.payload.event)
      );
      let year = newDate.toLocaleString("default", { year: "numeric" });
      let month = newDate.toLocaleString("default", { month: "2-digit" });
      let day = newDate.toLocaleString("default", { day: "2-digit" });

      // Generate yyyy-mm-dd date string
      let formattedDate = year + "-" + month + "-" + day;
      return {
        ...state,
        paymentTerms: action.payload.event,
        paymentDue: formattedDate,
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
            total: item.quantity * item.price,
            [action.payload.event.target.name]:
              action.payload.event.target.value,
          };
        }
        return item;
      });
      return {
        ...state,
        items: newarr,
      };
    case "SET_TOTAL":
      const newSet = state.items.map((item: any, index: any) => {
        if (index === action.payload.index) {
          return {
            ...item,
            total: item.quantity * item.price,
          };
        }
        return item;
      });
      return {
        ...state,
        items: newSet,
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
