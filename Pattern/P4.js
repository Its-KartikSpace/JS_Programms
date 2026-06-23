for(var i=1; i<=5; i++){
    var str="";
    for(k=1; k<=5-i; k++ ){
        str=str+" ";
    }
    for(var j=1; j<=i; j++){
        str=str+"*";
    }
    console.log(str);
}