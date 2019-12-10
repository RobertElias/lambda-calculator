/* eslint-disable no-lone-blocks */

import "./App.css";

import React, {useState} from "react";

import Display from './components/DisplayComponents/Display'
import Logo from "./components/DisplayComponents/Logo";
import NumberButton  from './components/ButtonComponents/NumberButtons/NumberButton'
import OperatorButton from './components/ButtonComponents/OperatorButtons/OperatorButton'
import SpecialButton from './components/ButtonComponents/SpecialButtons/SpecialButton'
import data from './data.js'

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining compoanents



function App() {
  console.log(data);
  
  const [display, setDisplay] = useState(0);

  let specialClickHandler = (buttonName) => {
    console.log(buttonName)
    setDisplay(buttonName)
  }
  let operatorIndex = 0;
  let buttonDisplayHell = (x, i) => {
    console.log(x)
  
    {
      if(i === 0 || i===3 || i===6 || i===9){
      return (
        <>
          <OperatorButton
          buttonName={data.operators[operatorIndex++].char}
          clickHandler={specialClickHandler}
          />
          <NumberButton 
            buttonName={x}
            clickHandler={specialClickHandler}
          />
        </>
        )}else{
          return (
            <NumberButton 
               buttonName={x}
               clickHandler={specialClickHandler}
            />
          )
       }
     }
  }

return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display
        display = {display}
        />
        <section className="buttonContainer">
        {
          data.specials.map(x=>{
            return (
              <SpecialButton 
              buttonName={x}
              clickHandler={specialClickHandler}
              />
            )
          })
        }
        {
          data.numbers.map((x, i) => {
            console.log(i)
            return buttonDisplayHell(x,i)
          })
        }
        </section>
      </div>
    </div>
  );
}

export default App;
