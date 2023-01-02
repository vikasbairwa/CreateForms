import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addData } from '../slice'
function InputType({data, type, keyString}) {
    const [inputValue, setInputValue] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
      console.log(inputValue)
      if(typeof inputValue !== 'undefined'){
        dispatch(addData({key : keyString, value: inputValue }))
      }
    }, [inputValue])
    

  return (
    <input value={inputValue} type={type} style={{border:'2px solid grey',borderRadius:'10px',backgroundColor:'#eafafb'}} onChange={(e)=>{setInputValue(e.target.value)}} placeholder={data.placeholder}/>
  )
}

export default InputType