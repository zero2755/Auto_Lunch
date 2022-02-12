import React, { useState } from "react";
import FoodMapFn from "./FoodMapFn";
import WheelComponent from "./wheelComponent";

function FoodMap() {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");
  const [DataList, setDataList] = useState("");
  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const getDataList = (DataList) => {
    setDataList(DataList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText(InputText);
  };

  const btnStyle = {
    color: "white",
    background: "teal",
    padding: ".375rem .75rem",
    border: "1px solid teal",
    borderRadius: ".25rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    marginTop: "10px",
  };

  //const childRef = useRef();

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="검색어를 입력하세요"
            onChange={onChange}
            value={InputText}
          />

          <button type="submit" style={btnStyle}>
            검색
          </button>
        </div>
      </form>
      <FoodMapFn
        searchPlace={Place}
        DataList={DataList}
        getDataList={getDataList}
      />
      <WheelComponent DataList={DataList}></WheelComponent>
    </>
  );
}

export default FoodMap;
