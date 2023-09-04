import { Box,styled } from "@mui/material"

export const CarouselContainer = styled(Box)((theme)=>({

   
        


}))
export const BoxFood = styled(Box)(({theme})=>({
    
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'column',
    padding:'1rem 0.2rem',
    width:'100%',
    cursor:"pointer",
    textAlign:'left',
    "& >div>img":{
        borderRadius:"1.5rem",
        width:"100%", 
        height:"9rem",
        objectFit:'cover'
    },
   '& span':{
    color: "#93959f",    
    fontSize:'16px',
    alignItems:'center'

   }


}))