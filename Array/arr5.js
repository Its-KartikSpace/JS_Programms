// Write a program to count total number of negative elements in an array.	
var arr =[1,2,3,4,5,6,7,8,9];
count=0;
for(var i=0; i<arr.length;i++){ 
    if(arr[i]<0){
        count++;
    }
}
console.log("Number of Negative eleemnts in Array is",count);
			