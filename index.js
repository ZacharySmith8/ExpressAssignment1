const { response } = require('express');
const express = require('express'); 
const app = express();
const ExpressError = require('./expressError');
const Function = require('./functions')





app.get('/mean',(req,res) => {
    //sets query string to array of nums type "string"
    nums = req.query.nums.split(',');
   
    // error that looks to see if query isnt left blank
   if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  // checks each element in the array to make sure it is an actual number after parsing. if any of the elements are not a number then the error is thrown.
  for(n of nums){
     
    if(Number.isNaN(parseInt(n))){
        throw new ExpressError('Something You Inputed Wasnt A Number Please Try again')
    }
}
// returns json response
   return res.json({
       "operation" : "Mean",
       "value": Function.getMean(nums)
   })
})




app.get('/median',(req,res) => {
    nums = req.query.nums.split(',');
   
    // error that looks to see if query isnt left blank
   if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  // checks each element in the array to make sure it is an actual number after parsing. if any of the elements are not a number then the error is thrown.
  for(n of nums){
     
    if(Number.isNaN(parseInt(n))){
        throw new ExpressError('Something You Inputed Wasnt A Number Please Try again')
    }
}
  console.log(Function.getMedian(nums))
  return res.json({
      'operation' : "Median",
      "value": Function.getMedian(nums)
  })
   
   
})

app.get('/mode',(req,res) => {
    nums = req.query.nums.split(',');
   
    // error that looks to see if query isnt left blank
   if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  // checks each element in the array to make sure it is an actual number after parsing. if any of the elements are not a number then the error is thrown.
  for(n of nums){
     
    if(Number.isNaN(parseInt(n))){
        throw new ExpressError('Something You Inputed Wasnt A Number Please Try again')
    }
}

 return res.json({
     "operation": "Mode",
     "value" : Number(Function.getMode(nums))
 })
 
   
})


app.get('/all',(req,res)=>{
    nums = req.query.nums.split(',');
   
    // error that looks to see if query isnt left blank
   if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  // checks each element in the array to make sure it is an actual number after parsing. if any of the elements are not a number then the error is thrown.
  for(n of nums){
     
    if(Number.isNaN(parseInt(n))){
        throw new ExpressError('Something You Inputed Wasnt A Number Please Try again')
    }
}

return res.json({
    "Operation" : "all",
    "mean": Function.getMean(nums),
    "median": Function.getMedian(nums),
    "mode": Number(Function.getMode(nums))
})
})




app.listen(3000, () => console.log('app at port 3000'))