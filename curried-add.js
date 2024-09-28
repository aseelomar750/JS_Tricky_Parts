
function curriedSum(nums){
 return function (num){
    if (num !==undefined){
        return curriedSum(num +nums);
    }
    return nums;
 };

}
    console.log("The curried nums is: " + curriedSum(5)(2)()); // the ouput should  be 7 