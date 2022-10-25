import React, { useReducer, useState } from "react";
import { TextInput } from "../";

import "./Form.scss";

export const Form = () => {
  const [tsti, settsti] = useState<any>({
    streetAddress: "",
    name: "",
    password: "",
  });

  const initialState = { streetAddress: "" };

  const reducer = (state: any, action: any) => {
    switch (action.payload.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.event.target.name]: action.payload.event.target.value,
        };
        break;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <TextInput
        label="Street Address"
        placeholder=""
        name="streetAddress"
        onChange={(e: any) =>
          dispatch({ payload: { type: "INPUT", event: e } })
        }
        value={undefined}
      />
    </div>
  );
};
