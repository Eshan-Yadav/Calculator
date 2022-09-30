function calac(value){

  
   
        var in_color="red";
        var out_color="green";

   
    if(value == "."){
        alert("Decimal Value Input!");
    }

    else if(value =="+"){
        alert("Addition Operation!");
        
    }

    else if(value =="-"){
        alert("Subtraction Operation!");
    }

    else if(value =="*"){
        alert("Multiplication Operation!");
    }

    else if(value =="/"){
        alert("Division Operation!");
    }


    const display = document.getElementById('disp');
    const back=document.getElementById('ans-disp-scr');
    if(value == '='){
        try{
            ans = eval(display.innerHTML);
            var len=ans.toString().length;
        }catch(e){
            var ans = "Undefined Input";
            var len=0;
        }
        
        if(len>=16){
            ans =  ans.toExponential(4);
           
        }
        display.innerHTML = ans;
       if(ans%1!=0){
        alert("Decimal Value Output!");
       }
       else{
        alert("Integer Value Output!");
       }
        back.style.backgroundColor=out_color;
        
    }
    else if(value == ''){       
        display.innerHTML = '';
        back.style.backgroundColor= in_color;

    }

    else{
        if(!(display.innerHTML.length>16)){
            display.innerHTML += value;
        }
       
    }
}