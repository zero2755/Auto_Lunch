//import logo from './logo.svg';
import "./App.css";
import FoodMap from "./FoodMap";
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=476f6eb377913359df4ac39ff6c9ed79"
></script>;

const wheelBoxStyle = {
  textAlign: "center",
  display: "inline-block",
  marginLeft: "-500px",
  marginRight: "500px",
  marginTop: "500px",
};
function App() {
  return (
    <div className="App">
      {/*
      <div id="map" className="mapDiv">
        aaaaaaaaaaaaaaaaaa
      </div>*/}
      {<div id="wheelBox"></div>}
      
      <FoodMap></FoodMap>
      {/*<div id="wheelBox" style={wheelBoxStyle}></div>*/}

     
     
    </div>
  );
}

export default App;
