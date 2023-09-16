import {Typography, Button, Box, TextField} from "@mui/material"
import Logo from '../../assets/Logo.png'
import { LogoContainer,Nav,SearchBar,Offers,Help,SignIn,Cart, Seller, Logout } from "./styles"
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useGlobalContext } from "../../Context/Context";
import Profile from "./Profile";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useCookies } from "react-cookie";
import {toast} from 'react-toastify'
import FoodBankIcon from '@mui/icons-material/FoodBank';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import AddIcon from '@mui/icons-material/Add';
import FastfoodIcon from '@mui/icons-material/Fastfood';


export const Navbar = () => {
    const navigate= useNavigate()
    const [cookies, setCookies, removeCookies] = useCookies(["access_token"]);
    


    const handleLogout = ()=> {
          toast.success('Logged Out successfully')
          window.localStorage.clear("name")
          window.localStorage.clear('userId')
          removeCookies("access_token")
          navigate('/')
          setAccount(false)
          setPartner(false)
          
         

    }


    const {account,setAccount} = useGlobalContext();
    const {partner, setPartner} = useGlobalContext();

    return(

        <Nav>
            <LogoContainer>
            <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
            </LogoContainer>
            
            <SearchBar>
             {
        
               account?<Link style={ {display:'flex',textDecoration:'none',color:'Black',alignItems:"center"}}><input type="text" placeholder="search your food here"/>&nbsp;&nbsp;<SearchIcon/></Link> 
                :
                 (partner ?<Link to={'/ShowAll'} style={ {display:'flex',textDecoration:'none',color:'Black'}}><HomeMaxIcon/>&nbsp;&nbsp;Show All</Link>:<Box><input type="text" placeholder="search your food here"/>&nbsp;&nbsp;<SearchIcon/></Box>)

             }
            </SearchBar>
            
            <Offers>
            {partner ?<Link style={{display:"flex", alignItems:'center',textDecoration:'none',color:'black'}} to={'/RestProfile'}><AddIcon/>&nbsp;&nbsp;Add Dishes</Link>:<Link style={ {display:'flex',textDecoration:'none',color:'Black'}}><LocalOfferIcon/>&nbsp;&nbsp;<Typography>Offers</Typography></Link>
            }    </Offers>
           
            <Help>
               <Link style={ {display:'flex',textDecoration:'none',color:'Black'}}><CatchingPokemonIcon/>&nbsp;&nbsp;<Typography>Help</Typography></Link>
            </Help>
            <SignIn>
                
                {
                (account) ?<Profile account={account} setAccount={setAccount} />:partner?(<Profile partner={partner} setPartner={setPartner}/>):<Link style={ {display:'flex',textDecoration:'none',color:'Black'}}to={'/Login'}><PersonIcon/>&nbsp;&nbsp;<Typography>Sign in</Typography></Link>
                }
            </SignIn>
            <Seller>
{               account?<Link to={'/PreviousOrder'}><FastfoodIcon/>&nbsp;&nbsp;<Typography>Orders</Typography></Link>: <Link to={"/RestSignup"}style={partner ?{display:'none'} :{display:'flex',textDecoration:'none',color:'Black'}}><StorefrontIcon/>&nbsp;&nbsp;Become a Restaurant</Link>
}            </Seller>
            <Cart>
                {
                    account ?<Link style={ {display:'flex',textDecoration:'none',color:'Black'}} to={'/Cart'}><AddShoppingCartIcon/>&nbsp;&nbsp;<Typography>Cart</Typography></Link> 
                    :
                    (partner? <Link style={ {display:'flex',textDecoration:'none',color:'Black'}} to={'/RestaurantOrder'}><FoodBankIcon/>&nbsp;&nbsp;<Typography>Orders</Typography></Link>
                    :<Link style={ {display:'flex',textDecoration:'none',color:'Black'}} to={'/Cart'}><AddShoppingCartIcon/>&nbsp;&nbsp;<Typography>Cart</Typography></Link>
                    )
                }            
            </Cart>
            <Logout>{(account || partner )?<Button onClick={handleLogout} to={'/'}>{<PowerSettingsNewIcon/>}</Button> : <Button style={{display:'none'}}>{<PowerSettingsNewIcon/>}</Button>}</Logout>
        </Nav>

    )




}
export default Navbar