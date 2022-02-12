import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import ReactDOM from "react-dom";

let dataInput = [
  // { option: "카가야쿠", style: { backgroundColor: "red", textColor: "black" } },
  {
    option: "카가야쿠",
    style: { backgroundColor: "red", textColor: "black" },
  },
  {
    option: "호또멘",
    style: { backgroundColor: "orange", textColor: "black" },
  },
  {
    option: "본설렁탕",
    style: { backgroundColor: "yellow", textColor: "black" },
  },
  { option: "김가네", style: { backgroundColor: "green", textColor: "black" } },
  {
    option: "순정감자탕",
    style: { backgroundColor: "blue", textColor: "black" },
  },
  {
    option: "편의점",
    style: { backgroundColor: "indigo", textColor: "black" },
  },
  {
    option: "참진한설렁탕",
    style: { backgroundColor: "purple", textColor: "black" },
  },
  {
    option: "참진한설렁탕",
    style: { backgroundColor: "LightSlateGrey", textColor: "black" },
  },
  {
    option: "참진한설렁탕",
    style: { backgroundColor: "#635688", textColor: "black" },
  },
  {
    option: "참진한설렁탕",
    style: { backgroundColor: "#00CED1", textColor: "black" },
  },
  {
    option: "참진한설렁탕",
    style: { backgroundColor: "aquamarine", textColor: "black" },
  },
  {
    option: "참진한설렁탕",
    style: { backgroundColor: "#7F00FF", textColor: "black" },
  },
  {
    option: "참진한설렁탕",
    style: { backgroundColor: "#FFC1C1", textColor: "black" },
  },
  {
    option: "참진한설렁탕",
    style: { backgroundColor: "#228B22", textColor: "black" },
  },
  {
    option: "참진한설렁탕",
    style: { backgroundColor: "#8B4513", textColor: "black" },
  },
];

const btnStyle1 = {
  color: "white",
  background: "teal",
  padding: ".375rem .75rem",
  border: "1px solid teal",
  borderRadius: ".25rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  marginTop: "10px",
  align: "center",
};

const btnStyle2 = {
  color: "white",
  background: "teal",
  padding: ".375rem .75rem",
  border: "1px solid teal",
  borderRadius: ".25rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  marginTop: "10px",
  marginLeft: "15px",
  align: "center",
};

const divStyle = {
  textAlign: "center",
  display: "inline-block",
};

const wheelStyle = {
  display: "inline-block",
  align: "right",
  marginLeft: "10%",
  marginTop: "10%",
  float: "right",
};

// eslint-disable-next-line import/no-anonymous-default-export
//export default ({ DataList }) => {
const WheelComponent = ({ DataList }) => {
  /*  
  useEffect(() => {
    console.log("he");
  });
  */
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    //console.log("데이타리스트");
    //console.log(DataList);
    console.log("handleSpinClick호출");

    const newPrizeNumber = Math.floor(Math.random() * dataInput.length);
    setPrizeNumber(newPrizeNumber);

    setMustSpin(true);
  };
  //window.location.reload()
  let arrTest = "";
  arrTest += DataList[0];
  arrTest = arrTest.substring(9);

  const reflashFn = () => {
    window.location.reload();
  };
  const showBox = () => {
    for (let wheel_i = 0; wheel_i < dataInput.length - 1; wheel_i++) {
      dataInput[wheel_i].option = DataList[wheel_i];
    }
    dataInput[0].option = arrTest;
    console.log(dataInput);
    ReactDOM.render(
      <React.StrictMode>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={dataInput}
          onStopSpinning={() => {
            setMustSpin(true);
          }}
          style={wheelStyle}
        />
      </React.StrictMode>,
      document.getElementById("wheelBox")
    );
  };

  return (
    <>
      <div style={divStyle}>
        {/*    <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={dataInput}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button onClick={handleSpinClick} style={btnStyle}>
          SPIN
        </button>*/}

        <div className="toolBox1">
          <button
            onClick={() => {
              showBox();
              handleSpinClick();
            }}
            style={btnStyle1}
          >
            Show Roulette!
          </button>
          <button
            onClick={() => {
              showBox();
              handleSpinClick();
            }}
            style={btnStyle2}
          >
            Do Roulette!
          </button>
          <button
            onClick={() => {
              reflashFn();
            }}
            style={btnStyle2}
          >
            리셋
          </button>
        </div>
      </div>
    </>
  );
};

export default WheelComponent;
