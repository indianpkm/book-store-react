import BookModel from "../modal/BookModel.js"



export const updateBook=async(req,res)=>{
    const {id}=req.params
    const data=req.body
    const modifiedObject={
        ...data,price:{value : req.body.price}
    }

    try{
        const updatedbook=await BookModel.findByIdAndUpdate(id,modifiedObject,{new:true})

        if(!updatedbook){
           return res.status(400).json({message: 'Book not found'})
        }
        return res.json(updatedbook)
    }catch(err){
        console.error(err);
        res.status(500).json({message:'Internal server error'})
    }
}