import {createAsyncThunk, createSlice, configureStore, createStore} from "@reduxjs/toolkit"
import axios from 'axios'

const URL = "http://localhost:8000"

const initialState ={

    allrestaurants:[],
    Singlerestaurant:[],
    cart:[],
    order:[],
    restOrder:[],
    



}
export const GetAllProducts = createAsyncThunk('restaurants/GetAllProducts', async() => {

    try {
        const {data} = await axios.get(`${URL}/All`)
       
    return data;
}
    
    catch (error) {
        console.log('error while calling the getall Api',error)

        
    }


})
export const GetRestaurant = createAsyncThunk('/GetAllProducts',async({id})=>{
    try {
      const  {data} = await axios.get(`${URL}/All/${id}`) 
      return data;

    } catch (error) {
        console.log('error while calling the GetRestaurant API',error)
    }
})

export const GetCartProducts = createAsyncThunk('/GetCartProducts',async(userId)=>{
        
    try {
        const {data} = await axios.get(`${URL}/cart/${userId}`)
        return data;
        
    } catch (error) {
        console.log('error while calling the get cart products API', error)
        
    }

})
export const clearCart = createAsyncThunk('/clearcart',async(userId)=>{
    
    try {
        const {data:{cart}}=  await axios.put(`${URL}/clearCart/${userId}`)
        return cart;
        
    } catch (error) {
        console.log('error while calling the clear cart API', error)
    }

})
export const getOrder = createAsyncThunk('/Order',async(userId)=>{
    try {
        console.log(userId)
        const {data} =await axios.get(`${URL}/getOrder/${userId}`)
        console.log(data)
        return data;
        
    } catch (error) {
        console.log('error while calling the get order APi', error)
    }
})
export const getRestOrder =createAsyncThunk('/orderId',async(restId)=>{
            
    try {
         const {data}= await axios.get(`${URL}/getrestOrder/${restId}`)
         console.log(data)
         return data;

        
    } catch (error) {
        console.log('error while getting the getrestorder API',error)
    }
})
const restaurantSlice = createSlice({
    name:"restaurants",
    initialState,
    extraReducers:(builders)=>{
        
        builders.addCase(GetAllProducts.fulfilled,(state,action)=>{
        state.allrestaurants = action.payload;
        
    })
        builders.addCase(GetRestaurant.fulfilled,(state,action)=>{
        state.Singlerestaurant = action.payload;
    })
        builders.addCase(GetCartProducts.fulfilled,(state,action)=>{
            state.cart= action.payload;
        })
        builders.addCase(getOrder.fulfilled,(state,action)=>{
            state.order=action.payload;
        })
        builders.addCase(getRestOrder.fulfilled,(state,action)=>{
            state.restOrder = action.payload;
        })
  
    }
    
})

const Store = configureStore({
    reducer:{
        restaurants:restaurantSlice.reducer}
})

export default Store