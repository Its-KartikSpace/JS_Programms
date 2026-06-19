// Write a program to count total number of even and odd elements in an array.					
var arr =[1,2,3,4,5,6,7,8,9];
ceven=0;
codd=0;
for(var i=0; i<arr.length;i++){ 
    if(arr[i]%2==0){
        ceven++;
    }else{
        codd++;
    }
}
console.log("Number of Even eleemnts in Array is",ceven);
console.log("Number of Odd eleemnts in Array is",codd);