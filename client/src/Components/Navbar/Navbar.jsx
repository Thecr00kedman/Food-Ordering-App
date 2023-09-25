import {Typography, Button, Box} from "@mui/material"
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
            <Box sx={{width:"9rem"}}><Link to={'/'}><img src={Logo} alt="Logo" /></Link></Box>            
            </LogoContainer>
        
            
            <SearchBar>
             {
        
               account?<Box><input type="text" placeholder="search your food here"/>&nbsp;&nbsp;<SearchIcon sx={{cursor:'pointer'}}/></Box> 
                :
                 (partner ?<Link to={'/ShowAll'}><HomeMaxIcon/>&nbsp;&nbsp;<span>Show All</span></Link>:<Box><input type="text"  placeholder="search your food here"/><SearchIcon/></Box>)

             }
            </SearchBar>
            
            <Offers>
            {partner ?<Link to={'/RestProfile'}><AddIcon/>&nbsp;&nbsp;<span>Add Product</span></Link>:<Link ><LocalOfferIcon/>&nbsp;&nbsp;<span>Offers</span></Link>
            }    </Offers>
           
            <Help>
               <Link><CatchingPokemonIcon/>&nbsp;&nbsp;<span>Help</span></Link>
            </Help>
            <SignIn>
                
                {
                (account) ?<Profile account={account} setAccount={setAccount} />:partner?(<Profile partner={partner} setPartner={setPartner}/>):<Link to={'/Login'}><PersonIcon/>&nbsp;&nbsp;<span>Sign in</span></Link>
                }
            </SignIn>
            <Seller>
                {
               (account)?<Link to={'/PreviousOrder'}><FastfoodIcon/>&nbsp;&nbsp;<span>Orders</span></Link>:(!partner || account)?<Link to={"/RestSignup"}><StorefrontIcon/>&nbsp;&nbsp;<span>Partner</span></Link>:<Link to={'/PreviousOrder'} style={{display:'none'}}><FastfoodIcon/>&nbsp;&nbsp;<span>Orders</span></Link>
                }            
            </Seller>
            <Cart>
                {
                    account ?<Link to={'/Cart'}><AddShoppingCartIcon/>&nbsp;&nbsp;<span>Cart</span></Link> 
                    :
                    (partner? <Link to={'/RestaurantOrder'}><FoodBankIcon/>&nbsp;&nbsp;<span>Orders</span></Link>
                    :<Link to={'/Cart'}><AddShoppingCartIcon/>&nbsp;&nbsp;<span>Cart</span></Link>
                    )
                }            
            </Cart>
            <Logout>{(account || partner )?<Button onClick={handleLogout} to={'/'}>{<PowerSettingsNewIcon/>}</Button> : <Button style={{display:'none'}}>{<PowerSettingsNewIcon/>}</Button>}</Logout>
        </Nav>

    )




}
export default Navbar