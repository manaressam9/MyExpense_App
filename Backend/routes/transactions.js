const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

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
// router.get('/get-incomes', getIncomes)
// router.get('/delete-income', deleteIncome)
module.exports =router;