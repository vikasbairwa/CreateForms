import React, { useState, useEffect } from 'react'
import './styles/formPage.css'
import pizza from './pizza.json'
import MainCard from './components/MainCard';
import { useSelector } from 'react-redux'
import { inputJsonData } from './slice'
import Switch from "react-switch";
import store from './store'
function FormPage() {
  const [jsonData, setjsonData] = useState(null)
  const [checked, setChecked] = useState(false)

  
  const count = useSelector((state) => state.radio.inputData)
  
  
  useEffect(() => {
    const finalData = store.getState().radio.radio
    if (count !== null) {
      try {
        let temp = JSON.parse(count)
      // console.log(temp[0])

      temp.sort(function (x, y) {
        if (x.sort < y.sort) {
          return -1;
        }
        if (x.sort > y.sort) {
          return 1;
        }
        return 0;
      });
      setjsonData(temp)
      } catch (error) {
        console.log(error)
      }
      
    }
  }, [count])
  const handleChange = (e) => {
    setChecked(!checked)
  }

  const OuterCard = (data) => {
    if(data.data.validate.required || checked){
      return (
        <div className="mainCard">
          {/* <div>{data.data.label}</div> */}
          <MainCard show={checked} keyString={data.data.jsonKey} data={data.data} />
        </div>
      )
    }
  }
  const handleClick = () => {
    const finalData = store.getState().radio.radio
    console.log(finalData)
  }
  if (jsonData === null) {
    return (
      <div className='container'>
        Input jSON
      </div>
    )
  }
  return (
    <div className='container'>
      {jsonData.map(el => {
        return (
          <OuterCard key={el.jsonKey} data={el} />
        )
      })}
      <div style={{marginBottom:'0.5rem', display: "flex", flexDirection: "row", alignItems: "center" }}>
        <div style={{ marginRight: '1rem' }}>Show advanced fields</div>
        <Switch checked={checked} onChange={handleChange} />
      </div>
      <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Submit</button>
    </div>
  )
}

export default FormPage