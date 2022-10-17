import React from "react";
import { useSelector } from "react-redux";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Table = ({items}:any) => {
    const itemKeys = ["name", "quantity", "price", "total"];
    const { dark } = useSelector((state: any) => state.theme);
    const { width } = useWindowSize();
  return (
    <div className={`details__table-container ${dark}`}>
      {width >= 600 && (
        <div className="details__table-headers">
          <span className={`details__table-headers-title item-name ${dark}`}>
            Item Name
          </span>
          <span className={`details__table-headers-title qty ${dark}`}>
            QTY.
          </span>
          <span className={`details__table-headers-title price ${dark}`}>
            Price
          </span>
          <span className={`details__table-headers-title total ${dark}`}>
            Total
          </span>
        </div>
      )}
      <div className="details__table-items-container">
        {itemKeys.length !== 0 &&
          items.length !== 0 &&
          items?.map((item: any) =>
            width <= 600 ? (
              <>
                <div className="details__table-items-mobile">
                  <span className={`details__table-items name ${dark}`}>
                    {item.name}
                  </span>
                  <span className={`details__table-items quantity ${dark}`}>
                    {item.quantity} x {`£ ${item.price}`}
                  </span>
                </div>
                <span className={`details__table-items total ${dark}`}>
                  {`£ ${item.total}`}
                </span>
              </>
            ) : (
              <>
                <span className={`details__table-items name ${dark}`}>
                  {item.name}
                </span>
                <span className={`details__table-items quantity ${dark}`}>
                  {item.quantity}
                </span>
                <span className={`details__table-items price ${dark}`}>
                  {`£ ${item.price}`}
                </span>
                <span className={`details__table-items total ${dark}`}>
                  {`£ ${item.total}`}
                </span>
              </>
            )
          )}
      </div>
    </div>
  );
};
