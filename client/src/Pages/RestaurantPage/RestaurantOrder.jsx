import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRestOrder } from "../../Redux/Store";
import { Left,Right, Bottom,OrderContainer } from "./styles";
import { Box,Grid,Typography,Card,CardMedia,CardContent, CardActions } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import { useGlobalContext } from "../../Context/Context";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


export const RestaurantOrder=()=>{
    const dispatch= useDispatch();
    const restId= localStorage.getItem('UserId')

    useEffect(()=>{
        const fetchpastOrder= async()=>{
          dispatch(getRestOrder(restId))
        };fetchpastOrder();
    },[])
    const data = useSelector((state)=> state.restaurants.restOrder)
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return(
        <>
        <Navbar />
        <Typography variant="h4"> Orders</Typography>
        { data?.order?.map((order)=>(
        <Grid key={order.ordeid}container>
             <Grid key={order.orderId} item xs={12} sm={12} md={12} lg={12} xl={12}>
                 <Card sx={{display:'flex',flexDirection:'column',margin:'2rem',alignItems:'center'}}>
                 <div style={{display:'flex',flexDirection:'row',width:'100%',border:'none',borderBottom:'1px dashed  '}}>
                 <CardMedia component="div" sx={{width:"30vw",height:"auto",
                overflowY: "hidden",
                 padding:'1rem' }}>
                <img src={order.image} alt="This is a product" style={{ height: "100%", width: "100%", objectFit: 'cover', borderRadius:'10px'}} />
              </CardMedia>
                  <CardContent sx={{display:'flex',flexDirection:'column',width:"45vw",padding:'1rem',textAlign:'left',fontSize:'1rem', flexGrow: 1 ,whiteSpace:'nowrap'}}>
                    <Box sx={{display:'flex',flexDirection:'column'}}>
                         <Typography>Order Id:&nbsp;&nbsp;{order.orderId}</Typography>
                         <Typography>Product Name:&nbsp;&nbsp;{order.dish}</Typography>
                         <Typography>Restaurant:&nbsp;&nbsp;{order.restname}</Typography>
                    </Box>
                  </CardContent>
                 </div>
                  <CardActions sx={{display:'flex',flexDirection:'row',width:'25vw',padding:'1rem',textAlign:'left,',justifyContent:'space-between'}}>
                    <Box sx={{display:'flex',flexDirection:"row",alignItems:'center'}}><Typography>Amount Paid:</Typography>&nbsp;&nbsp;<CurrencyRupeeIcon/><Typography>{order.amount}</Typography></Box>
                    <Typography>On:&nbsp;&nbsp;{date}</Typography></CardActions>
                 </Card>
             </Grid>
           </Grid>))
          
      }
        
        </>

    )
}

export default RestaurantOrder