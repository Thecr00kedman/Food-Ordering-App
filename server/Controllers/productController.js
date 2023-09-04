
import Partner from "../Schema/partnerSchema.js";
import Product from "../Schema/productschema.js";
   

export const addProducttoDb = async (req, res) => {
    try {
        const { userId } = req.params;
        const { name, price, description, image, quantity } = req.body;
        const food = await Product.findOne({name})
        if(food){
            return res.json({error:'Product is already there'});
            
        } 
        else{

        if (
            name.length < 1 ||
            image.length < 1 ||
            price.length < 1 ||
            description.length < 6 ||
            quantity.length < 1
        ) {
            return res.status(500).json({ warning: 'Please enter the correct details' });
        }
        else {
            const partner = await Partner.findById(userId);

            if (!partner) {
                return res.json({ error: "Not allowed to add products" });
            } else {
                const newProduct = new Product({
                    name,
                    price,
                    description,
                    image,
                    quantity,
                });

                const partnerProducts = partner.products;
                partnerProducts.push(newProduct);

                await partner.save();
                return res.json({ success: "Product added successfully", newProduct: partner.products });
            }
        }
    } }
    catch (error) {
        res.json("Error while calling the addProducttoDb API", error);
    }
}

export const ShowAll = async(req,res) =>{

   try {
    const AllProducts = await Partner.find({})
    return res.json(AllProducts)
  
   } catch (error) {
    res.json("error while calling the Show All api")
    
   }
    

}
    
export const Getrest = async(req,res)=>{
     
    const {id} = req.params;

    try {
        const restaurant = await Partner.findById(id);
        return res.json(restaurant);
        
  
    } catch (error) {
        res.json('error while calling the GetRest API')
        
    }
}
