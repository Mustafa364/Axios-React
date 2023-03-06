import axios from "axios";
import React, { useState } from "react";
import './App.css'

export default function App(){
  const[mmdata, setmData] = useState([]);
  let api = ("https://api.escuelajs.co/api/v1/products");
  let menu =[
    {
      "id": 4,
      "title": "Handmade Fresh Table",
      "price": 6,
      "description": "Andy shoes are designed to keeping in...",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
      },
      "images": [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017"
      ]
    }
 
  ]
 
  axios.get(api).then((response) => {
    setmData(response.data)
  }).catch((err) => {
    console.log('error not found')
  }) 
  return(
    <div>
       <h1 className="ttt text-center">Calling Axios fetch Api</h1>
    <div className="grid">
      {mmdata.map((x, i) => {
        return(
          <div className="card" key={i}>
            
            <img src={x.images} className='imgg'/>
            <h5>{x.title}</h5>
            <p>{x.price}</p>
          </div>
        )
      })}
    </div> </div>
  )
} 
 
 