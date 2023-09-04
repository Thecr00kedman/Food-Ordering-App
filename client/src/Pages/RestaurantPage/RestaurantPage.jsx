import { Box,Typography,Button } from "@mui/material";
import React, { useEffect } from "react";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Navbar from "../../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { GetRestaurant } from "../../Redux/Store";
import {useParams} from 'react-router-dom'

export const RestaurantPage = () => {
    

    const id= useParams();
    const dispatch= useDispatch();
    

    useEffect(()=>{

       dispatch(GetRestaurant(id))



    },[id])
    const data = useSelector((state)=>state.restaurants.Singlerestaurant)
   


    return(

        <>
        <Navbar/>
        <div className="SingleRest">       
                <div className="header">
                      
                      <div><Typography variant="h5">{data.name}</Typography></div>
                      <div><Typography>Category</Typography></div>
                      <div><Typography>Location</Typography></div>
                      <div className="deliver" style={{display:"flex",flexDirection:'row'}}><DeliveryDiningIcon/>&nbsp;&nbsp;<Typography>Based on distance, an additional delivery fee will apply</Typography></div>  
               </div>
              
               <div className="subHeader">
                           <div><AccessTimeIcon/>&nbsp;&nbsp;42 mins</div>
                           <div><CurrencyRupeeIcon/>&nbsp;&nbsp;400 for two</div>
                   </div>

                   <div style={{textAlign:'left'}}><Button variant='contained'>Toggle button</Button></div>
                   
                   <div className="ProductContainer">
                    
                        <div><Button variant='contained'>Recommended<KeyboardArrowDownIcon/></Button></div>
                    
                        <div><Button variant='contained'>Pocket Friendly<KeyboardArrowDownIcon/></Button></div>

                        <div><Button variant='contained'>Combo<KeyboardArrowDownIcon/></Button></div>
      
                   </div>
                   <div className="Footer">
                       <div className="Footerhead">
                        <div className="imageContainer"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" alt="This is logo" style={{width:'100%',height:'100%',objectFit:"cover"}}/></div><span>License No. 2345464646</span></div>
                   
                       <div className="Subfooter">
                         <div><Typography>(Outlet:Location)</Typography></div>
                         <div style={{display:"flex", flexDirection:"row"}}><LocationOnIcon/>&nbsp;&nbsp;Location</div>
                        </div>
                   </div>
                  


                
      


        </div>
        </>
    )

}

export default RestaurantPage;