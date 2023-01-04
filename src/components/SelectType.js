import React,{useState, useEffect} from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useSelector, useDispatch } from 'react-redux'
import { addData } from '../slice'
function SelectType({data, keyString}) {
    const [selected, setSelected] = useState(null)
    const count = useSelector((state) => state.radio.radio)
    const dispatch = useDispatch()
    useEffect(() => {
        if(data.validate.defaultValue){
          if(typeof count[keyString] === 'undefined'){
            dispatch(addData({key : keyString, value:  data.validate.defaultValue}))
          }
        setSelected(data.validate.defaultValue)
      }
    }, [])
    
    const handleSelect=(e)=>{
        dispatch(addData({key : keyString, value:  e}))
        setSelected(e)
    }
    
    return (
        <div className="dropdown">
            <DropdownButton onSelect={handleSelect} title={selected?selected:"select"} id="dropdown-menu-align-right">
                {data.validate.options.map((el)=>{
                        return(
                            <Dropdown.Item key={el.value} eventKey={el.value}>{el.label}</Dropdown.Item>
                            // <li value={el.value} key={el.value}><div className="dropdown-item"> {el.label}</div></li>
                        )
                    })}
            </DropdownButton>
        </div>
    )
}

export default SelectType