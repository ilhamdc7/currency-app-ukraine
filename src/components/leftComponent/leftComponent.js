import React from "react";
import "./leftComponent.css";


const leftComponent = (props) => {

  return (
    <>
      <input
        type="number"
        className="firstInput"
        value={props.leftData[props.firstSelect.valueOf()]}
        onChange={(e) => props.onChange1(e.target.value)}
      />

      <select
        className="btn btn-info firstSelection"
        data-style="btn btn-info"
        style={{ height: "50px", marginLeft: "3%" }}
        onChange={(e) => props.onChangeCurr1(e.target.value)}
      >
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </>
  );
};

export default React.memo(leftComponent);
