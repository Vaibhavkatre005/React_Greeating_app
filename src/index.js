import React from "react";
import ReactDom from "react-dom";
import "./index.css"

const greeting=["Good Morning", "Good Afternoon", "Good Night"]
let _greeting=""
let cssStyle={}
let time=new Date(2023, 5, 5, 20);
function setGreeting(){

  if(time.getHours()<11 && time.getHours()>=1){
    _greeting=greeting[0]
    cssStyle.color="green"
  }
  else if(time.getHours()<19 && time.getHours()>12){
     _greeting=greeting[1]
     cssStyle.color="orange"
  }
  else{
     _greeting=greeting[2]
     cssStyle.color="black"
  }
}

setGreeting()

ReactDom.render(
  <div className="outer_screen">
    <div className="inner_part">
      <h1>Hello Vaibhav, <span className="inner_text" style={cssStyle}>{_greeting}</span></h1>
    </div>
  </div>,
  document.getElementById("root")
);