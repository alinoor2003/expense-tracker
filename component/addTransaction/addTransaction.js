"use client"
import { addExpense, addIncome } from '@/store/slices/expense';
import { store } from '@/store/store';
import React, { useState } from 'react'
import { Provider, useDispatch } from 'react-redux';


export default function AddTransaction(){
    return <Provider store={store}>
      <Add></Add>
    </Provider>
}
function Add() {
    let dispatch = useDispatch();

    let[description,setDescription] = useState("");
    let[amount,setAmount] = useState(0);

    const addTransaction=()=>{
        if(amount >0){
          dispatch(addIncome({description,amount : parseFloat(amount)}))
        }else{
          dispatch(addExpense({description,amount : Math.abs(parseFloat(amount))}))
        }
        
      }
  return (
    <div>
      <div>
            <div className='my-4' style={{borderBottom: '1px solid lightGrey' , maxWidth: '330px', margin: '0 auto'}}>
             <h3 className="trans" style={{fontSize:"20px", fontWeight:"bold"}} >Add New Transection</h3>
             </div>
              <form >
                <label className='label-style1'> <b>Description</b></label>
                <br/>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}  className='input-style' placeholder="Detalils of Transection"/>
                <br/>               
                <label className='label-style2'> <b>Transection Amount</b></label>
                <br/>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} className='input-style'  placeholder="Dollar value of transection"/>
             
              </form>

              <button className='btn1' onClick={addTransaction} > Add Transection</button>
                                    
          </div>
    </div>
  )
}
