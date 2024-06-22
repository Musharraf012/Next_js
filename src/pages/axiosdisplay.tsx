import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Iproduct } from '@/Inerface/axiosinterface'

export default function axiosdisplay() {
  const [products,setProducts]=useState<Iproduct[]>([])
 useEffect(()=>{
   axios.get<Iproduct[]>('https://fakestoreapi.com/products')
  .then(res=>{
    setProducts(res.data)
    console.log(res.data)
  })

 },[])
  return (
    <div >{products.map((v)=>{
      return <div>{v.title}
      <h2>{v.price}</h2>
      <p>{v.id}</p></div>
    })}</div>
  )
}
