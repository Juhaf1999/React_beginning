import React from 'react';
import "./category.css";

const Category = ({allCategories}) => {
 // console.log(props.allCategories, "Props")
  return (
    <div className='Category-wrapper'>
        <div className="category-list">
          <div className="single-category">All Product</div>
          {allCategories.map((cat, i) =>{
            return <div className="single-category"key={i}>{cat} </div>
          })}
            
        </div>
    </div>
  )
}

export default Category