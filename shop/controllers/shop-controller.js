const Ticket = require("../models/Ticket");

const getAlltickets = async(req,res,next)=>{
    let tickets;
    try{
      tickets= await Ticket.find();
    }catch(err){
        console.log(err);
    }
    if(!tickets){
        return res.status(404).json({message:"No tickets found"});
    }
    return res.status(200).json({tickets});
} 


const pendtickets = async(req,res,next)=>{

    const {matchNumber,category}= req.body;

    if ( category== 1) {
        let updated_ticket;

       try {
         updated_ticket= await Ticket.findOneAndUpdate(
            { "matchNumber" : matchNumber},
            { $inc: { "pending_category1_count" : 1 } }
         );
         ay7aga_1=updated_ticket;
       } catch (error) {
        return console.log(err);
       } 
       if(!ay7aga_1){
        return res.status(500).json({message:"unable to the ticket "})
       }
       res.status(200).json({updated_ticket});

      } else if (category == 2) {
        let ay7aga_2;
        let updated_ticket;
        try {
            updated_ticket = await Ticket.findOneAndUpdate(
               { "matchNumber" : matchNumber},
               { $inc: { "pending_category2_count" : 1 } }
            
            );
            ay7aga_2=updated_ticket;
          } catch (error) {
           return console.log(err);
          } 
          let ay7aga=updated_ticket;
          if(!ay7aga_2){
           return res.status(500).json({message:"unable to the ticket "})
          }
          res.status(200).json({updated_ticket});
        
      } else {
        let ay7aga_3;
        let updated_ticket;

        try {
            updated_ticket= await Ticket.findOneAndUpdate(
               { "matchNumber" : matchNumber},
               { $inc: { "pending_category3_count" : 1 } }
            );
            ay7aga_3=updated_ticket;
          } catch (error) {
           return console.log(err);
          } 
          let ay7aga=updated_ticket;
          if(!ay7aga_3){
           return res.status(500).json({message:"unable to the ticket "})
          }
          res.status(200).json({updated_ticket});
   




      }
      


}


const canceltickets = async(req,res,next)=>{
    const {matchNumber,category}= req.body;

    if ( category== 1) {
        let updated_ticket;

       try {
         updated_ticket= await Ticket.findOneAndUpdate(
            { "matchNumber" : matchNumber},
            { $inc: { "pending_category1_count" : -1 } }
         );
         ay7aga_1=updated_ticket;
       } catch (error) {
        return console.log(err);
       } 
       if(!ay7aga_1){
        return res.status(500).json({message:"unable to the ticket "})
       }
       res.status(200).json({updated_ticket});

      } else if (category == 2) {
        let ay7aga_2;
        let updated_ticket;
        try {
            updated_ticket = await Ticket.findOneAndUpdate(
               { "matchNumber" : matchNumber},
               { $inc: { "pending_category2_count" : -1 } }
            
            );
            ay7aga_2=updated_ticket;
          } catch (error) {
           return console.log(err);
          } 
          let ay7aga=updated_ticket;
          if(!ay7aga_2){
           return res.status(500).json({message:"unable to the ticket "})
          }
          res.status(200).json({updated_ticket});
        
      } else {
        let ay7aga_3;
        let updated_ticket;

        try {
            updated_ticket= await Ticket.findOneAndUpdate(
               { "matchNumber" : matchNumber},
               { $inc: { "pending_category3_count" : -1 } }
            );
            ay7aga_3=updated_ticket;
          } catch (error) {
           return console.log(err);
          } 
          let ay7aga=updated_ticket;
          if(!ay7aga_3){
           return res.status(500).json({message:"unable to the ticket "})
          }
          res.status(200).json({updated_ticket});
   




      }
      







      }
      




 const get_match = async(req,res)=>{
     const id=req.params.id;
     let match;
     try {
            match = await Ticket.findById(id);
      } catch (err) {
            return console.log(err);
      }
      if(!match){
            return res.status(404).json({message:'No Ticket found'});
      }
        return res.status(200).json({match});
    }



const reservetickets = async(req,res,next)=>{
    const {matchNumber,category}= req.body;
    console.log(category);
    console.log(matchNumber)

    if ( category== 1) {
        let updated_ticket;
        

       try {
         updated_ticket= await Ticket.findOneAndUpdate(
            { "matchNumber" : matchNumber},
            { $inc: { "availability.category1.count" : -1 } }
         );
         updated_ticket= await Ticket.findOneAndUpdate(
          { "matchNumber" : matchNumber},
          { $inc: { "pending_category1_count" : -1 } }
       );
         ay7aga_1=updated_ticket;
       } catch (error) {
        return console.log(err);
       } 
       if(!ay7aga_1){
        return res.status(500).json({message:"unable to the ticket "})
       }
       res.status(200).json({updated_ticket});

      } else if (category == 2) {
        let ay7aga_2;
        let updated_ticket;
        try {
            updated_ticket = await Ticket.findOneAndUpdate(
               { "matchNumber" : matchNumber},
               { $inc: { "availability.category2.count" : -1 } }
            
            );
            updated_ticket= await Ticket.findOneAndUpdate(
              { "matchNumber" : matchNumber},
              { $inc: { "pending_category2_count" : -1 } }
           );
            ay7aga_2=updated_ticket;
          } catch (error) {
           return console.log(err);
          } 
          let ay7aga=updated_ticket;
          if(!ay7aga_2){
           return res.status(500).json({message:"unable to the ticket "})
          }
          res.status(200).json({updated_ticket});
        
      } else {
        let ay7aga_3;
        let updated_ticket;

        try {
            updated_ticket= await Ticket.findOneAndUpdate(
               { "matchNumber" : matchNumber},
               { $inc: { "availability.category3.count" : -1 } }
            );
            updated_ticket= await Ticket.findOneAndUpdate(
              { "matchNumber" : matchNumber},
              { $inc: { "pending_category3_count" : -1 } }
           );
            ay7aga_3=updated_ticket;
          } catch (error) {
           return console.log(err);
          } 
          let ay7aga=updated_ticket;
          if(!ay7aga_3){
           return res.status(500).json({message:"unable to the ticket "})
          }
          res.status(200).json({updated_ticket});
   




      }
      

 
}
const createMatch = async(req,res)=>{
    console.log('[createMatch] req.body', req.body)
    try {
        const docs = await Ticket.create(req.body);
        return res.json(docs);
    } catch (e) {
        console.log('error:', e.message);
        return res.status(400).send(e.message);
    }
}


module.exports = {
    getAlltickets,
    pendtickets,
    canceltickets,
    reservetickets,
    createMatch,
    get_match
};
