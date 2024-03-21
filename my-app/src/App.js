//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import "./style.css";
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Category from './Components/Categories/Category';
import ProductWrapper from './Components/Products-wrapper/ProductWrapper';
import {BASE_URL} from "./Components/config";


const App = () => {
  const[allCategories, setAllCategories] = useState([])
  const[getproducts, setGetAllProduct] = useState([])
  
  
  useEffect(() =>{
    getCategory();
    getProducts();
  }, []);

  const getCategory = async() =>{
    // fetch(BASE_URL + "products/categories").then(res =>{
    //   res.json().then(catDatas =>{
    //     setAllCategories(catDatas)
    //   })
    // })
    // .catch((err) =>{
    //   console.log(err, "err");
    // })
    try {
      const res = await fetch(BASE_URL + "products/categories");
      const catData =await res.json()
      setAllCategories(catData)
    } catch (error) {
      console.log(error, "error")
    }
   
  }

  const getProducts = async() =>{
    try {
      const res = await fetch(BASE_URL + "products/");
      const prodData =await res.json()
    //  console.log(prodData, "prodData")
      setGetAllProduct(prodData)
    } catch (error) {
      console.log(error, "error")
    }
  }

  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Category allCategories={allCategories}/>
     <ProductWrapper getproducts={getproducts}/>
    </div>
    
    
  );
}

export default App;
