const division=(a,b,callback)=>{
    ans=""
    if(b==0){
        callback("division by error")
    }
    else{
        callback(null,a/b)
    }

};
division(5,5,(err,result)=>{
    if(err){
        console.log(err.msg)
    }
    else{
        console.log("the quotient is"+result);
    }
})