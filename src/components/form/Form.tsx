import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import { Button, TextInput } from "../";
import { formReducer, initialState } from "../../utils";
import { DatePicker } from "../datepicker/DatePicker";
import { Select } from "../select/Select";
import { RootState } from '../../redux/store'
import './Form.scss'

export const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { dark } = useSelector((state: RootState) => state.theme);

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
      <h2 className={`address-header ${dark}`}>Bill To</h2>
      <TextInput
        label="Client’s Name"
        placeholder=""
        name="clientName"
        onChange={(e: any) =>
          dispatch({ payload: { type: "INPUT-TEXT", event: e } })
        }
        value={state.clientName}
      />
      <TextInput
        label="Client’s Email"
        placeholder="e.g. email@example.com"
        name="clientEmail"
        onChange={(e: any) =>
          dispatch({ payload: { type: "INPUT-TEXT", event: e } })
        }
        value={state.clientEmail}
      />
      <div className="address-container">
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
      <TextInput
        label="Project Description"
        placeholder="e.g. Graphic Design Service"
        name="description"
        onChange={(e: any) =>
          dispatch({ payload: { type: "INPUT-TEXT", event: e } })
        }
        value={state.description}
      />
      <div className="form-items-container">
        <h2 className="form-items-header">Item List</h2>
        <div className="form-items-wrapper">
          <div className="form-items-grid">
            <span id="itemName" className="form-item-title">
              Item Name
            </span>
            <span id="itemQty" className="form-item-title">
              Qty.
            </span>
            <span id="itemPrice" className="form-item-title">
              Price
            </span>
            <span id="itemTotal" className="form-item-title">
              Total
            </span>
          </div>
          {state.items.map((item: any, i: any) => (
            <div className="grid-item-form" key={i * 0.23}>
              <TextInput
                label=""
                placeholder="Item name"
                name="name"
                onChange={(e: any) =>
                  dispatch({
                    payload: { type: "INVOICE_ADD_ITEM", event: e, index: i },
                  })
                }
                value={state.items[i].name}
              />
              <TextInput
                label=""
                style={{ padding: "16px 10px" }}
                placeholder="1"
                name="quantity"
                onChange={(e: any) =>
                  dispatch({
                    payload: { type: "INVOICE_ADD_ITEM", event: e, index: i },
                  })
                }
                value={state.items[i].quantity}
              />
              <TextInput
                label=""
                onBlur={(e: any) =>
                  dispatch({
                    payload: { type: "SET_TOTAL", index: i },
                  })}
                placeholder="0.00"
                name="price"
                onChange={(e: any) =>
                  dispatch({
                    payload: { type: "INVOICE_ADD_ITEM", event: e, index: i },
                  })
                }
                value={state.items[i].price}
              />
              <span className="itemPrice">{item.price * item.quantity}</span>

              <svg
                className="icon"
                width="13"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(e: any) =>
                  dispatch({
                    payload: { type: "INVOICE_REMOVE_ITEM", index: i },
                  })
                }
              >
                <path
                  d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                  fillRule="nonzero"
                />
              </svg>
            </div>
          ))}

          <div
            className={`grid-item-button ${dark}`}
            onClick={() =>
              dispatch({ payload: { type: "INVOICE_CREATE_EMPTY_ITEM" } })
            }
          >
            <span >+ Add New Item</span>
          </div>
        </div>
      </div>
      <div className="form-buttons-container">
        <div className="form-buttons-container-left">
          <Button theme="default__light" label="Discard" size="medium" />
        </div>
        <div className="form-buttons-container-right">
          <Button theme="default__black" label="Save as Draft" size="large" />
          <Button theme="default__purple" label="Save & Send" size="large" />
        </div>
      </div>
    </div>
  );
};
