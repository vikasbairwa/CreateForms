import React,{useState, useEffect} from 'react'
import Switch from "react-switch";
import { useSelector, useDispatch } from 'react-redux'
import { addData } from '../slice'
function SwitchType({data, keyString}) {
    const [checked, setChecked] = useState(false)
    const count = useSelector((state) => state.radio.radio)
    const dispatch = useDispatch()
    useEffect(() => {
      if(data.validate.defaultValue){
        if(typeof count[keyString] === 'undefined'){
            dispatch(addData({key : keyString, value:  data.validate.defaultValue}))
          }
          setChecked(data.validate.defaultValue)
      }
    //   console.log(count.radio[keyString])
    }, [])
    
    const handleChange=(e)=>{
        dispatch(addData({key : keyString, value:  !checked}))
        setChecked(!checked)
    }
  return (
    <Switch checked={checked} onChange={handleChange}/>
  )
}

export default SwitchType