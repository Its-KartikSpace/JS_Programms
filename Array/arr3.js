//Write a program to find second largest element in an array.				
var arr =[11,2,3,34,5,26,7,8,90];
arr.sort((a, b) => a - b);
var max=arr[0];
for(var i=0; i<arr.length;i++){ 
    if(arr[i]>max){
        max=arr[i-1];
    }
}
console.log(max);
