import React, { useState, useEffect } from 'react'
import pizza from '../pizza.json'
import SubCard from './SubCard'
import { useSelector, useDispatch } from 'react-redux'
import { delkey } from '../slice'
import '../styles/MainCard.css'
import Switch from "react-switch";
function MainCard({ data, keyString, show }) {
    console.log({ "show": show })
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        // if(data.validate.required === false && required === false){
        //     setvalidation(false)
        // }else{
        //     setvalidation(true)
        // }
        setChecked(!checked)
    }

    console.log({ "checked": checked })
    const count = useSelector((state) => state.radio.radio)
    console.log({ 'key': keyString })

    const d = new Date();
    let time = d.getTime();
    if (data && (checked || show || data.validate.required)) {
        console.log(time, data)
        if (data.uiType === "Group") {
            data.subParameters.sort(function (x, y) {
                if (x.sort < y.sort) {
                    return -1;
                }
                if (x.sort > y.sort) {
                    return 1;
                }
                return 0;
            });
            return (
                <div className='groupCard'>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className='title'>{data.label.replaceAll('_', ' ')}</div>
                        {data.description !== "" && <div className="info">{data.description}</div>}
                    </div>
                    <div className='line'></div>
                    {data.subParameters.map((el) => {
                        return (
                            <MainCard show={checked === true ? checked : show} key={el.jsonKey} keyString={`${keyString}.${el.jsonKey}`} data={el} />
                        )
                    })}
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <div style={{ marginRight: '1rem' }}>Show advanced fields</div>
                        <Switch checked={checked} onChange={handleChange} />
                    </div>
                </div>
            )
        } else if (data.uiType === "Ignore") {
            let visible = true;
            data.conditions.map((el) => {
                console.log(el)
                console.log({ 'count': count })
                console.log(count[el.jsonKey])
                console.log(el.value)
                if (Object.hasOwn(count, el.jsonKey) == false || count[el.jsonKey] !== el.value) {
                    visible = false;
                }
            })
            if (visible) {
                return (
                    <div className='groupCard'>
                        {data.subParameters.map((el) => {
                            return (
                                <MainCard show={checked === true ? checked : show} key={el.jsonKey} keyString={`${keyString}.${el.jsonKey}`} data={el} />
                            )
                        })}
                    </div>
                )
            }
        } else {
            return (
                <div className='SubCard'>
                   {data.uiType !== 'Radio'&& <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className='title'>{data.label.replaceAll('_', ' ')}</div>
                        {data.description !== "" && <div className="info">{data.description}</div>}
                    </div>}
                    <SubCard data={data} keyString={keyString} />
                </div>
            )
        }
    }

}

export default MainCard