import React from "react";
import "./rightComponent.css";

const RightComponent = (props) => {
  return (
    <>
      <input
        type="number"
        className="secondInput"
        value={props.rightData[props.secondSelect.valueOf()]}
        onChange={(e) => props.onChange2(e.target.value)}
      />
      <select
        className="btn btn-warning secondSelection"
        data-style="btn btn-info"
        style={{ height: "50px", marginLeft: "3%" }}
        onChange={(e) => props.onChangeCurr2(e.target.value)}
      >
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </>
  );
};

export default React.memo(RightComponent);
