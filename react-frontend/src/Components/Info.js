import React from 'react'
import './NER.css'

const entities=[
    {
        name:"ORG",
        description:"Organizations and/or institutions"
    },
    {
        name:"GPE",
        description:"Geographical position"
    },
    {
        name:"PERSON",
        description:"Name of a person"
    },
    {
        name:"DATE",
        description:"Month/Day/Year"
    },
    {
        name:"MONEY",
        description:"An amount of Money"
    },
    {
        name:"LOC",
        description:"A location around the globe"
    }

]

const Info = () => {
    return (
        <div className="infoOutline">
            <h2>Welcome to the N.E.R. Tool!</h2>
            <p>N.E.R. stands for Name Entity Recognition. </p>
            <p>Named Entity Recognition is the process of NLP which deals with identifying and classifying named entities. The raw and structured text is taken and named entities are classified into persons, organizations, places, money, time, etc. Basically, named entities are identified and segmented into various predefined classes.</p>
            <p>For your reference, these are some of the entity types and what they mean. Happy Processing!</p>
            <div className="definitions">
                {
                    entities.map((item,index)=>{
                        return(
                            <p key={index}><span className="background">{item.name}</span>:&nbsp;&nbsp;{item.description}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Info
