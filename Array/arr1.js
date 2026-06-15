// Write a program to find maximum and minimum element in an array				
var arr =[1,2,3,4,5,6,7,8,9];
var max=arr[0];
for(var i=1; i<=arr.length;i++){ 
    if(arr[i]>max){
        max=arr[i];
    }
}
  console.log("Minimum Number in array is",max);
var min=arr[0];
for(var i=1; i<=arr.length;i++){ 
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log("Minimum Number in array is",min);