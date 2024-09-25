import Products from "../Models/dataModel.js"


export const getData = async(req,res) =>{
    try{
        const {category} = req.body;
        const query = category.length ? { category: { $in: category } }:{}
        const data = await Products.find(query)
        return res.json({data:data})
    }catch(error){
         return res.json({error:error})
    }
  
}

export const getProductdata = async(req,res) =>{
    try{
        const id = req.params.id;
        const data = await Products.findOne({_id:id})
        return res.json({data:data})
    }catch(error){
         return res.json({error:error})
    }
  
}



