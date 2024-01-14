import React, { useState } from 'react'
import './cartpage.css'
import { increment,decrement,deleteCart, handlePrice} from '../../redux/CartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
function Cartpage() {
    let cart = useSelector  (state=>state.Cart.products)
    let state = useSelector (state=>state.Cart)
    console.log(state.total)
    let dispatch = useDispatch()
    
      useEffect(() => {
       dispatch(handlePrice());
      },[]);
  return <>
  <h3>Redux Cart Page</h3>
  <div className="card" width="45rem">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">5 items</div>
                        </div>
                    </div>    
                  { cart.map((e,i) => {
                        
                        return( <div className="row border-top border-bottom" key={e.id}>
                        <div className="row main align-items-center">
                            <div className="col-2"><img className="img-fluid" src={e.thumbnail} /></div>
                            <div className="col">
                                <div className="row text-muted">{e.title}</div>
                                <div className="row">{e.description}</div>
                            </div>
                            <div className="col">
                                <button onClick={()=>{dispatch(decrement(i)); dispatch(handlePrice(i))} }>-</button>&nbsp;{e.item} <button onClick={()=>{dispatch(increment(i)); dispatch(handlePrice(i))} }>+</button>
                            </div>
                            <div className="col"><i class="fa-solid fa-indian-rupee-sign"></i> ${e.item * e.price} <span className="close" onClick={()=>{dispatch(deleteCart())}}>&#10005;</span></div>
                        </div>
                  </div>)
                   })}                
                    <div className="back-to-shop"><a href="#">&leftarrow;</a><span className="text-muted">Back to shop</span></div>
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col" style={{paddingleft:"0"}}>ITEMS {}</div>
                        <div className="col text-right">{state.total}</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option className="text-muted" defaultValue={5}>Standard-Delivery- $5.00</option></select>
                    </form>
                    <div className="row" style={{bordertop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">{`${5+state.total}`}</div>
                    </div>
                    <button className="btn">CHECKOUT</button>
                </div>
            </div>
            
        </div>
  </>
}

export default Cartpage