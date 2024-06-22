import React, { useState } from 'react'

export default function home() {
    let [a,setCounter]= useState<number>(0)
    let inc =()=>{
        setCounter(a+1)
    }
    let dec =()=>{
        setCounter(a-1)
    }
  return (
    <div>{a}
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button></div>
  )
}
    