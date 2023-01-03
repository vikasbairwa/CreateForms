import React,{useState} from 'react'
import './styles/inputPage.css'
import { useSelector, useDispatch } from 'react-redux'
import { inputJsonData, deleteData } from './slice'
function InputPage() {
  const count = useSelector((state) => state.radio.inputData)
  // console.log(count)
  const dispatch = useDispatch()
  const [inputJson, setInputJson] = useState('')
  const handleClick=()=>{
    // console.log(inputJson)
    if(count!==null){
      console.log({"input":count})
      dispatch(deleteData())
    }
    dispatch(inputJsonData(inputJson))
  }
  return (
    <form className="inputForm">
    <textarea value={inputJson} onChange={(e)=>{setInputJson(e.target.value)}} style={{width:"90%", marginBlockEnd:'1rem'}} rows = "25" name = "description" wrap='soft'/>
    <button onClick={handleClick}  type="button" class="btn btn-dark">Submit</button>
  </form>
  )
}

export default InputPage