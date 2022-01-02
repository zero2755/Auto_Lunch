import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
    { option: '카가야쿠', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: '호또멘', style: { backgroundColor: 'orange', textColor: 'black' } },
    { option: '본설렁탕', style: { backgroundColor: 'yellow', textColor: 'black' } },
    { option: '김가네', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '순정감자탕', style: { backgroundColor: 'blue', textColor: 'black' } },
    { option: '편의점', style: { backgroundColor: 'indigo', textColor: 'black' } },
    { option: '참진한설렁탕', style: { backgroundColor: 'purple', textColor: 'black' } },

]

const btnStyle = {
    color: "white",
    background: "teal",
    padding: ".375rem .75rem",
    border: "1px solid teal",
    borderRadius: ".25rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    marginTop:"10px"
     
  };

  const divStyle = {
    textAlign: "center",
    display: "inline-block",
    align:"center",
    marginLeft:"35%",
    marginTop:"5%"
  };



   

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  return (
    <>
    <div style={divStyle}> 
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
       
        onStopSpinning={() => {
          setMustSpin(false)
        }}
      />
      <button onClick={handleSpinClick} style={btnStyle}>SPIN</button>
      </div>
    </>
  )
}