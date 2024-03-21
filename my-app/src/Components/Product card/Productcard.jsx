import React from 'react'
import "./productCard.css";

const Productcard = ({prodDatas}) => {
  return (
    <div className='prod-card-wrapper'>
        <div className="img-wrapper">
            <img src={prodDatas.image}
            alt=""
            className="single-product-img"/>
        </div>
        <div className="prod-name">{prodDatas.title}</div>
        <div className="prod-price">{prodDatas.price} USD</div>
        <div className="prod-rate">{prodDatas.rating.rate} Stars({prodDatas.rating.count})</div>
    </div>

  )
}

export default Productcard