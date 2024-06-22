import IReview from '@/Inerface/ireview'
import { Review } from '@/data/data'
import React from 'react'

export default function jsndisplay() {
  return (
    <div>{Review.map((v:IReview)=>{
        return (<div className="card" >
        <img src={v.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{v.name}</h5>
          <p className="card-text">{v.job}</p>
          <p className="card-text">{v.id}</p>
          <p className="card-text">{v.text}</p>          
        </div>
      </div>)
    })}</div>
  )
}
