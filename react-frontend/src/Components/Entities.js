import React from 'react'
import { useEffect,useState } from 'react'

const Entities = ({payload}) => {
    const data=payload
    if(data.length>0){
        return(
            <div className="entityOutlines">
                <p>Named Entities:</p>
                {data.map((item,index)=>{
                console.log(item)
                return(
                    <div key={index}>
                        <p key={index}><span className="backgroundTwo">{item.name}</span>:&nbsp;&nbsp;<span className="backgroundThree">{item.label}</span></p>
                    </div>
                )
            })}
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}

export default Entities
