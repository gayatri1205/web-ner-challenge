import React from 'react'
import { useEffect,useState } from 'react'

const Entities = ({payload}) => {
    const data=payload
    if(data.length>0){
        return(
            data.map((item,index)=>{
                console.log(item)
                return(
                    <div>
                        <p key={index}>{item.name}:&nbsp;&nbsp;{item.label}</p>
                    </div>
                )
            })
        )
    }else{
        return(
            <div></div>
        )
    }
}

export default Entities
