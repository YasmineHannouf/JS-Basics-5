
function show(){
    var a=document.getElementById("Number").value;
    for(i = 2; i <=30; i++) {
    
    var j = 1;
    var racine = Math.floor(Math.sqrt(i));
    
    do {
    j++;
    } while(j <= racine && i%j != 0);
    
    if(j > racine) {
    
    
    document.write(i +"<br>")
    
    }
    }
    }