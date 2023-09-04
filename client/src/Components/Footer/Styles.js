import styled from "@emotion/styled";
import { Box} from "@mui/material";




export const Grid = styled(Box)(({theme})=>({
    
    display: "flex",
    flexDirection:'column'
    
    
    
}))

export const Container =styled(Box)(({theme})=>({
    display:"grid",
    whiteSpace: "nowrap",
    background:'White',
    textAlign:"center",
    textDecoration:'none',
    color:'black',
    width:'1280px'

}))

export const BoxContainer= styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    padding:"1rem 0.2rem",
    "& >a":{
    color:'black',
    textDecoration:'none'
    }

}))


export const ItemContainer =styled(Box)(({theme})=>({
    display:'flex',
    padding:'1rem 0.5rem 2rem 5rem',
       "&>div":{
            display:'flex',
            flexDirection:'column',
            
    }
      
}))