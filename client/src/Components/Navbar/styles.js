import styled from "@emotion/styled";
import {Box } from '@mui/material'



export const Nav = styled(Box)((theme)=>({
    
    display:'flex',
    width:"100vw",
    justifyContent:'left',
    padding:"5px 13px",
    alignItems:'center',
    position:'static',
    background:"white",
    boxShadow:'3px 3px 6px 3px #888888',
    "& div > a":{
       fontSize:"14px",
       textDecoration:'none',
       padding:'0 1rem',
       
    }
   
}))



export const LogoContainer = styled(Box)((theme)=>({

    "img" : {
        width:"9rem",
        
    }
    
}))
export const SearchBar = styled(Box)((theme)=>({

        alignItems:'center',

       "&>div>input":{
        width:'250px',
        height:'40px',
        border:'none',
        outline:'none',
        padding:'0px 7px'
       }

}))
export const Offers = styled(Box)((theme)=>({
       display:'flex',
       justifyContent:'center',
      

}))

export const SignIn = styled(Box)((theme)=>({
       display:'flex',
       
}))

export const Help = styled(Box)((theme)=>({

       display:'flex',
       
}))
export const Cart = styled(Box)((theme)=>({

       display:'flex',
       
}))
export const Seller = styled(Box)((theme)=>({
       display:"flex",
      
      
       "& a":{
         display:'flex',
         flexDirection:'row',
         textDecoration:'none',
         color:'black'
       }
}))
export const Logout = styled(Box)((theme)=>({
       display:'flex',
       justifyContent:'right'

}))

