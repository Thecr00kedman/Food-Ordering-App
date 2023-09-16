import Navbar from "../../Components/Navbar/Navbar"
import { Box, Typography ,Button} from "@mui/material"
import { ProductContainer,BoxContainer,ImageContainer,ButtonContainer } from "./styles"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetRestaurant } from "../../Redux/Store"


export const ShowAll = () =>


{

const dispatch= useDispatch();
const {id} = localStorage.getItem('UserId')
 
   useEffect(()=>{     
    dispatch(GetRestaurant(id))

},[dispatch])
   const data = useSelector((state)=>state.restaurants.Singlerestaurant)
//    console.log(data)
   
   
   

  

    return(
        <div>
            <Navbar/>
            <Box><Typography variant='h4'>All Products</Typography></Box>
            
           <BoxContainer> {data?.products?.map((item)=>(
                <ProductContainer key={item._id}>
             
                <ImageContainer><Box style={{width:"15rem",height:'10rem',overflow:'hidden'}}><img src={item.image} alt="Product image" /></Box><Typography>{item.name}</Typography></ImageContainer>
                <Box style={{flex:1}}><Typography>{item.description}</Typography></Box>
                <ButtonContainer><Button variant="contained">Edit</Button><Button variant="contained">Delete</Button></ButtonContainer>
                   
   
               </ProductContainer>
               
            ))}
            </BoxContainer>
        </div>

    )
}

export default ShowAll