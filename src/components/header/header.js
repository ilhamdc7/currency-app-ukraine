import React, { useState, useEffect} from "react";
import "./header.css";
import axios from "axios";
import LeftComponent from '../leftComponent/leftComponent'
import RightComponent from "../rightComponent/rightComponent";
import {getCurrency, backgroundImg , containerBackground} from "../../api/api";

const Header = () => {


  const [currencyData, setCurrencyData] = useState([])
  const [model, setModel] = useState(getEmptyModel())

  // if you want use this type of state variables in the scope you can crate same model :)
  // const {leftData, rightData, firstSelect, secondSelect, inputValue1, inputValue2} = model


  const exChange = async() => {
      if(model.inputValue1 > model.inputValue2){
          setModel({...model, inputValue2:0})
          setModel({...model, rightData: " "})
          await axios.get(`https://api.fastforex.io/convert?from=${model.firstSelect}&to=${model.secondSelect}&amount=${model.inputValue1}&api_key=00ce463218-c9ab8847ab-rahxn6`)
          .then(res => setModel({...model, rightData: res.data.result}))
          .catch(err => err)
        }else if(model.inputValue1 < model.inputValue2){
          setModel({...model, inputValue1: 0})
          setModel({...model, leftData: " "})
          await axios.get(`https://api.fastforex.io/convert?from=${model.secondSelect}&to=${model.firstSelect}&amount=${model.inputValue2}&api_key=00ce463218-c9ab8847ab-rahxn6`)
          .then(res =>  setModel({...model, leftData: res.data.result}))
          .catch(err => err)
        }
      }   


    useEffect(() => {
      getCurrency()
        .then((res) => setCurrencyData(res.data))
        .catch((err) => err);
    },[]);

    function getEmptyModel(){
      return {
        leftData: " ",
        rightData: " ",
        firstSelect: "UAH",
        secondSelect: "UAH",
        inputValue1: 0,
        inputValue2:0
      }
    }

  return (
    <>
        
      <div className="containerGeneral" style={{backgroundImage: `url(${backgroundImg})`}}>
        <div className='headerOfContainer'>
            <img src={containerBackground} alt="slava_ukraine" width="8%" height="100%"/>
            <h3>Cлава Україні!</h3>
        </div>
        <div
          className="container col-lg-9"
          style={{ height: "300px", display: "flex", flexWrap: "wrap" }}
        >
          <div className="firstRow">
            <LeftComponent 
            leftData={model.leftData} 
            inputValue1 = {model.inputValue1} 
            firstSelect={model.firstSelect} 
            onChange1={(value) => setModel({...model, inputValue1: value})} 
            onChangeCurr1 = {(value) => setModel({...model, firstSelect: value})}
            />
          </div>

          <div className="secondRow">
            <RightComponent 
            rightData={model.rightData} 
            inputValue2 = {model.inputValue2} 
            secondSelect={model.secondSelect} 
            onChange2 = {(value) => setModel({...model, inputValue2: value})} 
            onChangeCurr2={(value) => setModel({...model, secondSelect: value})}
            />
          </div>
          <div className="valueShow">
            <span className="spanValueShow">1 {currencyData.base} = {currencyData.results?.USD} USD</span>
          </div>
          <button className="clearBtn" onClick={() => window.location.reload()}>Clear</button>
          <button className="tryCurrency" onClick={exChange}>Try Currency</button>
        </div>
      </div>
    </>
  );
};

export default Header;
