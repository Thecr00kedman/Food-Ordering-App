import {createAsyncThunk, createSlice, configureStore, createStore} from "@reduxjs/toolkit"
import axios from 'axios'

const URL = "http://localhost:8000"

const initialState ={

    allrestaurants:[],
    Singlerestaurant:[],



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
    }
})

const Store = configureStore({
    reducer:{
        restaurants:restaurantSlice.reducer}
})

export default Store