var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/get_first_result', (req,res) => {
    
    var arr = [31,32,43,23,4,8];

    var even_arr = (arr.filter(val=> val%2==0));
    var odd_arr = (arr.filter(val=> val%2!=0));

    even_arr = even_arr.sort((a,b)=>a-b);
    odd_arr = odd_arr.sort((a,b)=>b-a);

   // console.log(even_arr);
   // console.log(odd_arr);

    var result = [];

    for(i=0; i<even_arr.length;i++){
        result.push(odd_arr[i]);
        result.push(even_arr[i]);
    }

        // res.send("result");
        console.log(result);
        res.send(result);


});

app.get('/get_second_result', (req,res) => {
    
        var str = "ab,c#de@,’$%fgh*";
            //hg,f#ed@,’$%cba*
        var regex = /^[a-zA-Z ]*$/;
        var only_str=[];
        var indexes=[];
        var splitarr = str.split("");   

        for (var i = 0; i < str.length; i++) {
            var a = str.charAt(i).match(regex);
           
            if(a!=null){
                only_str.push(a);
            } else{
                indexes.push(i);
            }
        }
            //alert(indexes);
        //var revstr = {...only_str}.reverse();
        for (var i = 0; i < str.length; i++) {
            //console.log(only_str.pop()[0]);
            if(indexes.indexOf(i)==-1){
                var temp = only_str.pop()[0];
                //console.log(temp);
                splitarr[i]=temp;
            }
        }

        console.log(splitarr.join(""));
        var endRes = splitarr.join("");
        res.send(endRes);


});


app.get('/get_third_result', (req,res) => {
   
    var arr = [1,3,4,7,9,10];
    var max_num = Math.max(...arr);
    var min_num = Math.min(...arr);
    var result=[];
    for (var i=min_num;i<max_num;i++){
        if(arr.indexOf(i)==-1){
        result.push(i);
        }
    }
    console.log(result.toString());
    var endRes = result.toString();
    res.send(endRes);

});

app.listen(port);
console.log("listening on "+port);
