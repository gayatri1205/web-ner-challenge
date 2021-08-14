import React from 'react'
import './NER.css'
import { useEffect,useState } from 'react'
import Entities from './Entities'

const NERForm = () => {
    const [payload,setPayload] = useState([])
    const [toProcess,setToProcess] = useState({
        text:''
    })
    const [content,setContent] = useState('')

    const clearData = (e) => {
        e.preventDefault()
        setContent('')
        setPayload([])
    }

    const getData = (e) => {
        e.preventDefault()
        console.log(content)
        if(content==''){
            alert("Input cannot be empty")
        }
        let textToSend = {
            text:content
        }
        console.log(textToSend)
        fetch('http://127.0.0.1:5000/api',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(textToSend)
        })
        .then((res)=> {
            return res.json()
        })
        .then((data)=> {
            console.log(data)
            setPayload(data)
        })
        .catch((err)=> {
            console.log(err)
        })
    }
    // useEffect(()=> {
    //     getData()
    // },[])
    return (
        <div className="formOutline">
            <form>
                <label for="inputText" className="instruction"><h4>Enter Your Text Here</h4></label><br></br>
                <textarea class="form-control" rows="10" cols="30" id="inputText" placeholder="Your text goes here" value={content} onChange={(e)=>setContent(e.target.value)}/><br></br>
                <input type="submit" className="btn btn-primary" value="Submit" onClick={e=>getData(e)}></input>
                <button className="btn btn-secondary" onClick={e=>clearData(e)}>Clear</button>
            </form>
            <Entities payload={payload}/>
        </div>
    )
}

export default NERForm
