import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRestOrder } from "../../Redux/Store";
import { Left,Right, Bottom,OrderContainer } from "./styles";
import { Box,Typography } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import { useGlobalContext } from "../../Context/Context";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


export const RestaurantOrder=()=>{
    const dispatch= useDispatch();
    const restId= localStorage.getItem('UserId')
    // console.log(restId)
    useEffect(()=>{
        const fetchpastOrder= async()=>{
          dispatch(getRestOrder(restId))
        };fetchpastOrder();
    },[])
    const data = useSelector((state)=> state.restaurants.restOrder)
    
    
    
    return(
        <div>       
            <Navbar/>
            <Box style={{padding:'1rem'}}><Typography variant="h4">Orders</Typography></Box>
                  {
                    data?.order?.map((item)=>(
                        <div key={item.orderId} style={{display:'flex',flexDirection:'column',justifyContent:'space-around',margin:'2rem 2rem',border:'1px dotted rgb(240, 240, 246)',boxShadow:'3px 4px 3px 2 rgb(240, 240, 246)',borderRadius:'6px',padding:"0.2rem"}}>
                            <OrderContainer style={{display:'flex',flexDirection:'row'}}>
                            <Left>
                               <Box style={{width:"10rem",border:"none"}}><img src={item.image} alt="product" style={{height:'100%',width:"100%",objectFit:'cover',borderRadius:"6px"}} /></Box>
                            </Left>
                            <Right>
                               <Box><Typography variant="h6">OrderId:</Typography>&nbsp;&nbsp;<Typography>{item.orderId}</Typography></Box>
                               <Box><Typography variant="h6">Product Name:</Typography>&nbsp;&nbsp;<Typography>{item.dish}</Typography></Box>
                               <Box><Typography variant="h6">Quantity:</Typography>&nbsp;&nbsp;<Typography>{item.quantity}</Typography></Box>
                               
                               
                            </Right>
                            </OrderContainer>
                            <hr />
                            <Bottom>
                            <Box style={{display:'flex', flexDirection:"row",alignItems:'center'}}><Typography>Total Paid:</Typography>&nbsp;<CurrencyRupeeIcon fontSize="11px"/>&nbsp;{item.amount}</Box>
                            </Bottom>
                  </div>
                    ))
                  }
        </div>

    )
}

export default RestaurantOrder