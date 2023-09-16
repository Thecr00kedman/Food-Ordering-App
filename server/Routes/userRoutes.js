import { Router } from "express";
import { addUser,userlogin,addpartner,loginPartner,verifyUserlogin} from "../Controllers/userControllers.js";
import { addProducttoDb,ShowAll,Getrest,AddFoods,ShowCartProducts,RemoveProduct,orderPlacement, verify,oldorder,emptyCart,showpastorder,restOrders} from "../Controllers/productController.js";

 const router = Router();

router.post('/add', addUser)
router.post('/login',userlogin)
router.post('/addrest',addpartner)
router.post('/loginrestaurant',loginPartner)
router.get('/verify',verifyUserlogin)
router.post('/upload/addproduct/:userId',addProducttoDb)
router.get('/All',ShowAll)
router.get('/All/:id',Getrest)
router.post('/cart',AddFoods)
router.get('/cart/:userId',ShowCartProducts)
router.put('/delete',RemoveProduct)
router.post('/placeOrder/:userId',orderPlacement)
router.post('/payment/verify',verify)
router.post('/orders',oldorder)
router.put('/clearCart/:userId',emptyCart)
router.get('/getOrder/:userId',showpastorder)
router.get('/getrestOrder/:restId',restOrders)


export default router

