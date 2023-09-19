import { useState } from "react";
import PropTypes from "prop-types";
import "./ItemCount.css";


export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);
  const addCount = (num) => {
    setCount(count + num);
  };

  return (
    <div className="count-container">
      <button
        disabled={count <= 1}
        className="button-count"
        onClick={() => {
          addCount(-1);
        }}
      >
        -
      </button>
      <div className="box-quantity">{count}</div>
      <button
        className="button-count"
        disiable={count >= stock}
        onClick={() => {
          addCount(1);
        }}
      >
        +
      </button>
    </div>
  );
};


ItemCount.protoTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired,
};

ItemCount.defaultProps = {
  stock: 0,
  initial: 1,
};
