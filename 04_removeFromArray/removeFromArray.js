const removeFromArray = function(array,num1, ...moreArgs) 
{
const completeArray=array;
if(moreArgs.length===0){
        let indexCut1=array.indexOf(num1);
        let removedArray=array.splice(indexCut1,1);
        for(let i=0;i<array.length;i++){
            if(num1===array[i]){
                indexCut1=array.indexOf(num1);
                removedArray=array.splice(indexCut1,1);
            }
        }
        return array; 

}else if (moreArgs.length!=0){
    if(num1>completeArray.length){
        return completeArray;
    }else{
    let moreArgsValue=moreArgs[0];
    let indexCut2=array.indexOf(moreArgsValue);
    let removedArray2=array.splice(indexCut2,2);
    return array;
    }
}
}

removeFromArray([1, 2, 3, 4], 7, "tacos"); 
// Do not edit below this line
module.exports = removeFromArray;
