function getMean(arr){
    // passes in array and returns the mean
    // sets each string in array to number version
    arr = arr.map((n) => parseInt(n))
    // setting mean to 0 here for looping purposes
    let mean = 0;
    // looping through each element in array adds to mean
    for(i in arr){mean += arr[i]}
    // after getting sum of all elements divdes by arr.length
    mean =  mean/arr.length;
    // returns mean
   return mean;
}


function getMedian(arr){
    // takes array sets each element to the number version and then sorts it in numerical order
    arr = arr.map((n) =>parseInt(n));
    let median;
    //
    if (arr.length %2 ==0){
        let median = (arr[arr.length/2] + arr[(arr.length/2) - 1])/2;
        return median;
    }
    else {
        let median =  arr[Math.floor(arr.length/2)];
        return median;
    }
    
}

function getMode(arr){
    arr = arr.map((n) => parseInt(n));
    let mapper = arr.reduce((accum,next) =>{
        accum[next] = (accum[next] || 0) + 1;
        return accum;
    },{})
    let max = Math.max.apply(null,Object.values(mapper));
    let mode = Object.keys(mapper).find((key)=> mapper[key]===max);
    return mode;
}

module.exports = {
    getMean,
    getMedian,
    getMode
}