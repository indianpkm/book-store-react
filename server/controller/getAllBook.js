import BookModel from "../modal/BookModel.js";


export const getAllBook=async(req,res)=>{
    try{
        const data=await BookModel.find();
        res.status(200).json(data)
        console.log(`${data.length} data send from server`)
      }catch(err){
        console.log(err)
        res.status(500).json({message:'server error'})
      }
}