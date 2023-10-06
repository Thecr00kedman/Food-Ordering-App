import styled from "@emotion/styled";
import {Box } from '@mui/material'



export const Nav = styled(Box)((theme)=>({
      
    display:'flex',
    width:"100vw",
    padding:'5px 10px',
    justifyContent:'left',
    position:'static',
    background:"white",
    boxShadow:'3px 3px 6px 3px #888888',
    whiteSpace:'nowrap',
    gap:'4px',
    "& div":{
       display:'flex',
       alignItems:'center',
    },
    
    "& input":{
       width:'100%',
    },
    "& div > a":{
       alignItems:'center',
       textDecoration:'none',
       padding:'0 1rem',
       display:'flex',
       flexDirection:'row',
       textDecoration:'none',
       color:'black',
    },
    "& :hover":{
      
         color:'orange'
      
    },
    "& div > a> span":{
       fontSize:"1rem",       
       
    },
    '& div > svg':{
       fontSize:'1rem',

    },
    '@media screen and (max-width: 768px)': {
       display:'flex',
       flexDirection:'column',
       textAlign:'left',
       "& div > a":{
           textAlign:'left',
       },
       "& div>a>span":{
         fontSize:'0.8rem',

       }
     },
     '@media screen and (max-width: 468)': {
       flexDirection: 'column', 
       alignItems: 'left', 
       '& div > a': {
          display:'flex',
          textDecoration:'none',
          color:'black',
          "& input":{width:"100%"}
   },
     },
   
}))




export const LogoContainer = styled(Box)((theme)=>({

    "img" : {
      //   width:"9rem",
        
    }
    
}))
export const SearchBar = styled(Box)((theme)=>({
   
        "& div":{
              display:'flex',
              flexGrow:'1',
              flexWrap:"nowrap",
              textDecoration:'none',
              color:'Black', 
              border:'1px solid #737373',
               borderRadius:'1.3rem',
               padding:"0.5rem",
                
        },

       "& >div >input":{
              display:'flex',
              flexDirection:'row',
              border:"none",
              outline:'none',
              color:'#737373',
              paddingLeft:"5px",
              
       },
}))
export const Offers = styled(Box)((theme)=>({
   

}))

export const SignIn = styled(Box)((theme)=>({
       
}))

export const Help = styled(Box)((theme)=>({

}))
export const Cart = styled(Box)((theme)=>({

}))
export const Seller = styled(Box)((theme)=>({
      
}))
export const Logout = styled(Box)((theme)=>({

}))

