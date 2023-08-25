const IncomeSchema = require("../models/IncomeModel");

/*add income */
exports.addIncome = async( req , res) => {
    console.log( req.body);
    //distract req data
    const {title, amount, category, description, date} =  req.body

    //create instance of income schema
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    console.log("request body after passing to mongodb schema" + income)
     //add to database
     try{
         //validate that data isn't empty
         if(!title || !amount || !category || !description || !date){
            return res.status(400).json({message: 'all fields are required'})
         }
         if(amount <= 0 ||  isNaN(amount)){
            return res.status(400).json({message: 'amount must be +ve number'})

         }
        await income.save()
        res.status(200).json({message: 'data added successfuly'})

     }catch(e){
        res.status(500).json({message: e.message})
     }
}

/*delete income */
exports.deleteIncome = async(req, res) => {
    const {id} = req.params;
    console.log(req.params)
    IncomeSchema.findByIdAndDelete(id)
    .then( income => {
        res.status(200).json({message: 'income deleted'})
    })
    .catch(e => { res.status(500).json({message: e.message})})
   
}

/*get all incomes */
exports.getIncomes = async(req, res) => {
    try {
        // get all incomes and sort them starting from last created
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}