const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense');
const router = require('express').Router();

 /*to call it http://localhost:5000/api/v1 */
/*router.get('/', (req,res)=>{
    res.send("hello from router")
})
*/

 /*to call it http://localhost:5000/api/v1/add-income */
router.post('/add-income', addIncome)
.get('/get-incomes',getIncomes )
.delete('/delete-income/:id', deleteIncome)
.post('/add-expense', addExpense)
.get('/get-expenses',getExpenses )
.delete('/delete-expense/:id', deleteExpense)
module.exports =router;