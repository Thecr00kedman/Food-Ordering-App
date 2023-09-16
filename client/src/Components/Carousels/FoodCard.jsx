
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProducts } from "../../Redux/Store";
import { BoxFood } from "./Styles";
import {useNavigate} from 'react-router-dom'
import { Typography,Box } from "@mui/material";
import { Left } from "../../Pages/RestProfile/styles";
import StarsIcon from '@mui/icons-material/Stars';



export const FoodCard = () => {
     
  const navigate= useNavigate()
  const data = useSelector(state=> state.restaurants.allrestaurants)
  
  const dispatch = useDispatch();
  useEffect(()=>{
     
    dispatch(GetAllProducts())
    
       
  },[])

  return (

       
        <>
      <Typography variant="h4" style={{textAlign:'left',marginLeft:'4rem'}}>Restaurants with online food delivery in Lucknow</Typography>
        <div className="FoodContainer">
          
          
    
          {
              data.map((item)=>(
                <BoxFood key={item._id} className="ItemsContainer" onClick={()=>navigate(`/Restaurant/${item._id}`)}>
                   <div><img src={item.image} alt="rest" /></div>
                   <Typography fontSize={"18px"} fontWeight={550} color={"#02060CBF"}>{item.name}</Typography>
                   <Box style={{alignItems:'center', display:'flex'}}><StarsIcon style={{color:"green"}}/>&nbsp;&nbsp;<Typography>4.1</Typography></Box>
                   <span>{item.categories}</span>
                   
                   <span>{item.origin}</span>
                </BoxFood>
            ))
          }
       
        </div></>
    
    
    )
    };
     
    
export default FoodCard