import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addData } from '../slice'
function RadioType({data, keyString}) {
  const count = useSelector((state) => state.radio.radio)
  const dispatch = useDispatch()
  const [visible, setvisible] = useState(count)
  useEffect(() => {
    if(typeof count[keyString] === 'undefined'){
      dispatch(addData({key : keyString, value:  data.validate.defaultValue}))
      setvisible(data.validate.defaultValue)
    }
  }, [])
  
  
  
  // localStorage.setItem(keyString, data.validate.defaultValue);
  
  const handleClick=(e)=>{
    // e.target.className = "btn btn-primary"
    dispatch(addData({key : keyString, value:  e.target.value}))
    setvisible(e.target.value)
    // localStorage.setItem(keyString, e.target.value);
  }
  return (
    <>
      {data.validate.options.map((el)=>{
        if(visible === el.value){
          return(
            <button key={el.value} onClick={handleClick} value={el.value} type="button" className="btn btn-primary">{el.label}</button>
            )
        }else{
          return(
            <button key={el.value} onClick={handleClick} value={el.value} type="button" className="btn btn-secondary">{el.label}</button>
            )
        }
        
        })}
    </>
  )
}

export default RadioType