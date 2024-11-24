import React from "react";

const ShoppingCart = ({ roomProps }) => {
  return (
    <>
      {roomProps?.map((e, i) => {
        const tong = e.count * e.price;

        if (e.count === 0) return null;
        return (
          <div key={i}>
            <p>{e.name}</p>
            <p>{e.price}x{e.count}</p>
            <p>Thanh tien: {tong} </p>
          </div>
        );
      })}
    </>
  );
};
export default ShoppingCart;
