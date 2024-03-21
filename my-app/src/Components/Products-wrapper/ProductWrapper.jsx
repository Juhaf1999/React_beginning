import React from 'react'
import "./productsWrapper.css";
import Productcard from '../Product card/Productcard';

const ProductWrapper = ({getproducts}) => {
  return (
    <div className='prod-wrapper'>
       <div> Product- All</div>

       <div className='main-prod-card'>
        {getproducts.map((prodDatas) =>{
          return  <Productcard key={prodDatas.id} prodDatas={prodDatas}/>
        })}
       </div>
    </div>
  )
}

export default ProductWrapper