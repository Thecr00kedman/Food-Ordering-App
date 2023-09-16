import { Box,styled } from "@mui/material";

export const Left = styled(Box)(({theme})=>({


}))

export const Right = styled(Box)(({theme})=>({

    "& div":{
        display:'flex',
        flexDirection:'row',
        padding:'0.5rem',
    "& >div p":{
        alignItems:'center'
    }
        
    }
}))
export const Bottom = styled(Box)(({theme})=>({

    padding:'1rem 2rem',
    "& div":{
        textAlign:'right',
    }
}))
export const OrderContainer = styled(Box)(({theme})=>({
     display:'flex',
     alignItems:'center',
     gap:'7rem',
     margin:"0.2rem 0.2rem 1rem 0.2rem"
    
}))
