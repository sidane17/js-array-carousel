let b= document.getElementById("bs");
let f= document.getElementById("be");
console.log(f);
let c= document.getElementsByClassName("slide_img");
console.log(c);
let conta=0; 
b.onclick=function(){
    c[conta].classList.add("none");
    if(conta==0){
        conta=3;
    }else{
        conta-=1;
    }
    c[conta].classList.remove("none");
}
f.onclick=function(){
    c[conta].classList.add("none");
    if(conta==3){
        conta=0;
    }else{
        conta+=1;
    }
    c[conta].classList.remove("none");
}

    


     
    console.log("44");