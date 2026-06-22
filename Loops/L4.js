// Write a program to find sum of all odd numbers between 1 to n.		
var n=10;
sum=0;
for(var i=0; i<=n; i++){
    if(i%2!=0){
        sum=sum+i;
    }
}
console.log("Sum of All Even Number From 1 to n is",sum);