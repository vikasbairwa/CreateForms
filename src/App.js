import FormPage from "./FormPage";
import InputPage from "./InputPage";
import './styles/app.css'
import React,{useState} from 'react'

function App() {

  return (
    <div className="App">
      <div className="pageDivision">
        <div className="flexParent">
            <div className="outputTitle">Input JSON</div>
            <InputPage/>
        </div>
        <div className="flexParent">
            <div className="outputTitle">FORM</div>
            <FormPage/>
        </div>
      </div>
    </div>
  );
}

export default App;
