const ExpenseSchema = require("../models/ExpenseModel");

/*add Expense */
exports.addExpense = async(req, res) => {
    try {
        const {title, amount, category, description, date} = req.body
        const expense = ExpenseSchema({
            title,
            amount,
            category,
            description,
            date   
        })
        if(!title || !amount || !category || !description || !date){
            return res.status(400).json({message: 'all fields are required'})
         }
         if(amount <= 0 ||  isNaN(amount)){
            return res.status(400).json({message: 'amount must be +ve number'})

         }
         await expense.save()
         res.status(200).json({message: 'data added successfuly'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

/*delete Expense  */
exports.deleteExpense = async(req, res) => {
    try {
       const {id} = req.params;
       ExpenseSchema.findByIdAndDelete(id)
       .then(expense => {
        res.status(200).json({message: 'income deleted'})
       })
       .catch(e  => {res.status(500).json({message: e.message})})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

/*get all Expenses */
exports.getExpenses = async(req, res) => {
try {
    const expenses = await ExpenseSchema.find().sort({createdAt: -1})
    res.status(200).json(expenses)
} catch (error) {
    res.status(500).json({message: error.message})
}
}