import axios from 'axios'

const URL= 'http://localhost:8000';

        export const addusers = async(data)=>{
            try {
                return await axios.post(`${URL}/add`,data);
                
            } catch (error) {
                console.log('error while calling the Add user API')
                
            }
        }
        export const getUser =async(data)=>{
            
            try {
                return await axios.post(`${URL}/login`, data)

                
            } catch (error) {
                console.log('error while calling the userlogin api')
                
            }
        }
        
        export const addrestaurant = async(data) => {
            
            try { 
                return await axios.post(`${URL}/addrest`,data);
                
            } catch (error) {
                console.log('error while calling the add restaurant api')
                
            }

        }
        export const LoginUser =async(data)=>{

            try {
                return await axios.post(`${URL}/loginrestaurant`,data)
                
            } catch (error) {
                console.log('error while calling the LoginUser Api')
            }
        }
        export const verifyUser = async()=>{

            try {
                return await axios.get(`${URL}/verify`)
            } catch (error) {
                console.log('error while calling the verify user API')
            }
        }
        export const CreateProduct = async({name,price,image,description,quantity,address,landmark,categories,origin,userId}) =>{
            // console.log(data)
            
              try {
                   return await axios.post(`${URL}/upload/addproduct/${userId}`,{name,price,image,description,quantity})
              } catch (error) {
                console.log('error while calling the add dish api',error)
              }
        }
