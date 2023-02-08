import React from "react";
import { useCart } from 'react-use-cart'
import { useNavigate } from "react-router-dom";
const MealItem=({data})=>{
    const {addItem} = useCart()
    console.log(data);
    let navigate = useNavigate();
    return(
        <>  
            {
                (!data) ?"Not Found": data.map(item=>{
                    return(
                    <div className="card" key={item.idMeal}>
                        <img src={item.strMealThumb} alt="" />
                        <h3>{item.strMeal}</h3>
                        <div className="card_btn">
                            <button type="button" className="btn btn-primary" onClick={()=>navigate(`/${item.idMeal}`)}>ingredients</button>
                            <button className="material-symbols-outlined"  onClick={()=>addItem(item)}>favorite</button>
                        </div>
                    </div>
                    )
                })
            }
            
        </>
    )
}
export default MealItem;