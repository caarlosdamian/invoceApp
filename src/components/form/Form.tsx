import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import { TextInput } from "../";
import { formReducer, initialState } from "../../utils";
import { DatePicker } from "../datepicker/DatePicker";
import { Select } from "../select/Select";

import "./Form.scss";

export const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { dark } = useSelector((state: any) => state.theme);

  return (
    <div className={`form-container ${dark}`}>
      <h1 className={`form-header ${dark}`}>New Invoce</h1>
      <div className="address-container">
        <h2 className={`address-header ${dark}`}>Bill From</h2>

        <TextInput
          label="Street Address"
          placeholder=""
          name="street"
          onChange={(e: any) =>
            dispatch({ payload: { type: "INPUT-SENDER", event: e } })
          }
          value={state.senderAddress.street}
        />

        <div className="input-group">
          <TextInput
            label="City"
            placeholder=""
            name="city"
            onChange={(e: any) =>
              dispatch({ payload: { type: "INPUT-SENDER", event: e } })
            }
            value={state.senderAddress.city}
          />
          <TextInput
            label="Post Code"
            placeholder=""
            name="postCode"
            onChange={(e: any) =>
              dispatch({ payload: { type: "INPUT-SENDER", event: e } })
            }
            value={state.senderAddress.postCode}
          />
          <TextInput
            label="Country"
            placeholder=""
            name="country"
            onChange={(e: any) =>
              dispatch({ payload: { type: "INPUT-SENDER", event: e } })
            }
            value={state.senderAddress.country}
          />
        </div>
      </div>
      <div className="address-container">
        <h2 className={`address-header ${dark}`}>Bill To</h2>

        <TextInput
          label="Street Address"
          placeholder=""
          name="street"
          onChange={(e: any) =>
            dispatch({ payload: { type: "INPUT-CLIENT", event: e } })
          }
          value={state.clientAddress.street}
        />

        <div className="input-group">
          <TextInput
            label="City"
            placeholder=""
            name="city"
            onChange={(e: any) =>
              dispatch({ payload: { type: "INPUT-CLIENT", event: e } })
            }
            value={state.clientAddress.city}
          />
          <TextInput
            label="Post Code"
            placeholder=""
            name="postCode"
            onChange={(e: any) =>
              dispatch({ payload: { type: "INPUT-CLIENT", event: e } })
            }
            value={state.clientAddress.postCode}
          />
          <TextInput
            label="Country"
            placeholder=""
            name="country"
            onChange={(e: any) =>
              dispatch({ payload: { type: "INPUT-CLIENT", event: e } })
            }
            value={state.clientAddress.country}
          />
        </div>
      </div>
      <div className="pickers-wrapper">
        <div className="pickers-container">
          <h2 className="picker-label">Invoice Date</h2>
          <DatePicker dispatch={dispatch} />
        </div>
        <div className="pickers-container">
          <h2 className="picker-label">Payment Terms</h2>
          <Select dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
};
