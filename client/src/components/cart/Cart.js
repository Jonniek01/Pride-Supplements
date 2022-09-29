import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import './Cart.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from 'react';
import { useDispatch, } from "react-redux";
import { changeCart } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate} from 'react-router-dom';
import axios from 'axios'
function Cart() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [total, setTotal]= useState(0)
  const [itemsCount, setItemCount]= useState(0)
  const user={
    name:"john",
    id:"123"
  }


useEffect(()=>{
  let items=cart;
  setTotal(0)
  let i =0;
  let tot=0
  let count=0
  for(i;i<items.length;i++){
      tot=tot+items[i].count*items[i].price
      count=count+items[i].count

  }
  setTotal(tot)
  setItemCount(count)

},[cart])

  const increment=(id,count )=>{
    const items=cart
    const newItems=items.map(item=>{
      if(item.id===id){
        return {...item, count: item.count+1}
      }
      return item
    })
    dispatch(changeCart(newItems))
  }
  const decrement=(id,count )=>{
    const items=cart
    const newItems=items.map(item=>{
      if(item.id===id){
        if(count>1){
          return {...item, count: item.count-1}

        }
      }
      return item
    })
    dispatch(changeCart(newItems))
  }
  const remove = (id)=>{
    const items=cart
    dispatch(changeCart(items.filter(item=>item.id!==id)))
  }
  
  const removeAll = ()=>{
    dispatch(changeCart([]))
  }

const shipping=30;


const handleCheckout=()=>{
  const order={
    user_id:user.id,
    items:cart,
    count:itemsCount,
    total:total+shipping
  }

}

  return (
    <div className='cart_container'>
      {
        cart.length===0?
          <div className="cart_empty">
          <h1>Your cart is empty</h1>
          <p className='back' onClick={()=>{
            navigate(-1)
          }}><AiOutlineArrowLeft/> Go back</p>

          

        </div>
        :
        <div className='shopping_cart'>
          <div className="items">
            <div className="items_head">
              <h3>Shopping cart</h3>
              <p>{itemsCount} Items</p>
            </div>
            <p className="line"></p>
            <div className="items_body">
            <div className='item'>
                    <div className="_image">
                      <p>Image</p>

                    </div>
                    <p>Name</p>
                    <div className="values">
                  <p>Count</p>
              </div>
              <p className='price'>
             <p>Price</p>
              </p>
              <p className='total'>Total</p>
              <p>Matching</p>
              <button onClick={()=>{
                removeAll()
              }} className='remove remove_all'>Remove all</button>


                  </div>

              {
                cart.map((item)=>{
                  return <div key={item.id} className='item'>
                    <div className="image">
                    <img src={item.image} alt={item.name} />

                    </div>
                    <p>{item.name}</p>
                    <div className="values">
                <button onClick={
                  ()=>{
                    increment(item.id, item.count)
                  }
                }  className="rm">
                    +
                </button>
                <input onChange={(e)=>{
                }} value={item.count} type={'number'} />
                <button onClick={()=>{
                  decrement(item.id, item.count)
                }} className="add">
                    -
                </button>
              </div>
              <p className='price'>
              {item.price}
              </p>
              <p className='total'>{item.price*item.count}</p>
              <p>Matched</p>
              <button onClick={()=>{
                remove(item.id)
              }} className='remove'>Remove</button>


                  </div>
                })
              }
            </div>
            <div className="continue">
            <p className=''  onClick={()=>{
            navigate(-1)
          }}><AiOutlineArrowLeft/> Continue to shopping</p>


            </div>

          </div>
          <div className="order">
            <h3>Order Summary</h3>
            <p className="line"></p>
            <div className="summary">
              <div className="items_total">
                <span>ITEMS {itemsCount} </span>
                <span>KSH {total}</span>

              </div>
              <div className="shipping">
                <span>SHIPPING</span>
                <span>KSH {shipping}</span>
              </div>
              <div className="total_cost">
                  <span>TOTAL COST</span>
                  <span>KSH {total+shipping}</span>
              </div>
              <button onClick={()=>{
                handleCheckout()
              }} className='checkout'>CHECKOUT</button>
            </div>

          </div>
        </div>
      }
        <Footer/>
    </div>
  )
}

export default Cart