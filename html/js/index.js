function somar(){ 

    var soma1 = parseInt(document.getElementById("soma1").value); 

    var soma2 = parseInt(document.getElementById("soma2").value); 

    var resultado = soma1 + soma2; 

 

    document.getElementById("resultadosoma1").value = resultado; 

 

 

} 

// parseInt = indentifica como numero e não como string 

 

 

function limparSoma(){ 

    document.getElementById("soma1").value = " " 

    document.getElementById("soma2").value = " " 

    document.getElementById("resultadosoma1").value = " "; 

} 

 

// function limpar soma volta como string retirando os 3 elementos escritos pelo input  

// se clicar em somar apos o limpar resulta em Nan = not an number  

 

// disabled = apenas ler não pode digitar 

 

 

function sub(){ 

    var sub1 = parseInt(document.getElementById("sub1").value); 

    var sub2 = parseInt(document.getElementById("sub2").value); 

    var resultado = sub1 - sub2 

 

    document.getElementById("resultadosub1").value = resultado 

 

} 

 

function limparSub(){ 

    document.getElementById("sub1").value = " " 

    document.getElementById("sub2").value = " " 

    document.getElementById("resultadosub1").value = " "; 

} 

 

function mult(){ 

    var mult1 = parseInt(document.getElementById("mult1").value); 

    var mult2 = parseInt(document.getElementById("mult2").value); 

    var resultado = mult1 * mult2 

 

    document.getElementById("resultadomult1").value = resultado 

} 

function limparMult(){ 

    document.getElementById("mult1").value = " " 

    document.getElementById("mult2").value = " " 

    document.getElementById("resultadomult1").value = " "; 

} 

 

function div(){ 

    var div1 = parseInt(document.getElementById("div1").value); 

    var div2 = parseInt(document.getElementById("div2").value); 

    var resultado = div1 / div2 

 

    document.getElementById("resultadodiv1").value = resultado 

} 

function limparDiv(){ 

    document.getElementById("div1").value = " " 

    document.getElementById("div2").value = " " 

    document.getElementById("resultadodiv1").value = " "; 

} 
