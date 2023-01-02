import React,{useState} from 'react'

import SelectType from './SelectType';
import RadioType from './RadioType';
import InputType from './InputType';
import SwitchType from './SwitchType';
function SubCard({data, keyString}) {
    
    console.log(data)
    console.log(keyString)
    if(data.uiType==='Input'){
        return(
            <InputType keyString={keyString} type={'text'} data={data} />
        )
    }else if(data.uiType === 'Switch'){
        return(
            <SwitchType keyString={keyString} data={data}/>
        )
    }else if(data.uiType === 'Number'){
        return(
            <InputType keyString={keyString} type={'number'} placeholder ={data.placeholder} />
        )
    }else if(data.uiType === 'Radio'){
        return(
            <RadioType keyString={keyString} data={data}/>
        )
    }else if(data.uiType === 'Select'){
        return(
            <SelectType keyString={keyString} data={data}/>
        )
    }else{
        return(
            <div>{data.title}</div>
        )
    }
}

export default SubCard