import { Router } from "express";
import { addUser,userlogin,addpartner,loginPartner,verifyUserlogin} from "../Controllers/userControllers.js";
import { addProducttoDb,ShowAll,Getrest } from "../Controllers/productController.js";

 const router = Router();

router.post('/add', addUser)
router.post('/login',userlogin)
router.post('/addrest',addpartner)
router.post('/loginrestaurant',loginPartner)
router.get('/verify',verifyUserlogin)
router.post('/upload/addproduct/:userId',addProducttoDb)
router.get('/All',ShowAll)
router.get('/All/:id',Getrest)


export default router

