import React from 'react'
import { useCart } from 'react-use-cart'
import { useNavigate } from "react-router-dom";

const Favoritelist = () => {
  let navigate = useNavigate();
  const {
    items,
    isEmpty,
    totalUniqueItems,
    removeItem,
    emptyCart} = useCart()
    if(isEmpty){
      return <h1 className='text-center'>Your Favoritelist is Empty</h1>
    }
  return (
    <div>
    Favoritelist
    <h1>list :({totalUniqueItems})</h1>
    <buttom type="button" class="btn btn-danger" onClick={()=>emptyCart()}>Clear list</buttom>
    <div>
    {
      items.map(item=>{
                    return(
                    <div className="card" key={item.idMeal}>
                        <img src={item.strMealThumb} alt="" />
                        <h3>{item.strMeal}</h3>
                        <div className="card_btn">
                            <button type="button" className="btn btn-primary" onClick={()=>navigate(`/${item.idMeal}`)}>ingredients</button>
                            <button  type="button" className="btn btn-danger"  onClick={()=>removeItem(item.idMeal)}>Remove</button>
                        </div>
                    </div>
                    )
    })}
    </div>
    </div>
  )
}

export default Favoritelist