// Examen Teorico
document.getElementById("calcular_1").addEventListener("click", Calcular_1);
document.getElementById("calcular_2").addEventListener("click", Calcular_2);
document.getElementById("calcular_3").addEventListener("click", Calcular_3);
document.getElementById("calcular_4").addEventListener("click", Calcular_4);
document.getElementById("calcular_5").addEventListener("click", Calcular_5);
document.getElementById("calcular_6").addEventListener("click", Calcular_6);
document.getElementById("calcular_7").addEventListener("click", Calcular_7);



//Examen Practico
document.getElementById("calcular_8").addEventListener("click", Calcular_8);
//document.getElementById("calcular_9").addEventListener("click", Calcular_9);
//document.getElementById("calcular_10").addEventListener("click", Calcular_10);
document.getElementById("calcular_11").addEventListener("click", Calcular_11);
//document.getElementById("calcular_12").addEventListener("click", Calcular_12);
//document.getElementById("calcular_13").addEventListener("click", Calcular_13);
document.getElementById("calcular_14").addEventListener("click", Calcular_14);
document.getElementById("calcular_17").addEventListener("click", Calcular_15);
document.getElementById("calcular_20").addEventListener("click", Calcular_20);
document.getElementById("calcular_23").addEventListener("click", Calcular_23);
document.getElementById("calcular_26").addEventListener("click", Calcular_26);


//Resultado
//document.getElementById("calcular_15").addEventListener("click", Calcular_15);

//Total

document.getElementById("Total_Teorico").addEventListener("click", Total_Examen_Teorico); 
document.getElementById("Total_Practico").addEventListener("click", Total_Examen_Practico);

document.getElementById("calcular_29").addEventListener("click", Calcular_29);
document.getElementById("calcular_30").addEventListener("click", Calcular_30);




//Final_nota

document.getElementById("Total_nota").addEventListener("click", Notal_final); 





//Funciones Examen Teorico


function Calcular_1(){

  examen_1 = parseInt(document.getElementById('examen_1').value);
  nota_1 = parseInt(document.getElementById('nota_1').value);
  resultado_1 = ((examen_1 * nota_1) / 100) 
  contenido = document.getElementById('contenido_1')
  contenido.innerHTML = ' ' + resultado_1;
}

function Calcular_2(){

  examen_2 = parseInt(document.getElementById('examen_2').value);
  nota_2 = parseInt(document.getElementById('nota_2').value);
  resultado_2 = ((examen_2 * nota_2) / 100) 
  contenido = document.getElementById('contenido_2')
  contenido.innerHTML = ' ' + resultado_2;
}

function Calcular_3(){

  examen_3 = parseInt(document.getElementById('examen_3').value);
  nota_3 = parseInt(document.getElementById('nota_3').value);
  resultado_3 = ((examen_3 * nota_3) / 100) 
  contenido = document.getElementById('contenido_3')
  contenido.innerHTML = ' ' + resultado_3;
}

function Calcular_4(){

  examen_4 = parseInt(document.getElementById('examen_4').value);
  nota_4 = parseInt(document.getElementById('nota_4').value);
  resultado_4 = ((examen_4 * nota_4) / 100) 
  contenido = document.getElementById('contenido_4')
  contenido.innerHTML = ' ' + resultado_4;
}

function Calcular_5(){

  examen_5 = parseInt(document.getElementById('examen_5').value);
  nota_5 = parseInt(document.getElementById('nota_5').value);
  resultado_5 = ((examen_5 * nota_5) / 100) 
  contenido = document.getElementById('contenido_5')
  contenido.innerHTML = ' ' + resultado_5;
}

function Calcular_6(){

  examen_6 = parseInt(document.getElementById('examen_6').value);
  nota_6 = parseInt(document.getElementById('nota_6').value);
  resultado_6 = ((examen_6 * nota_6) / 100) 
  contenido = document.getElementById('contenido_6')
  contenido.innerHTML = ' ' + resultado_6;
}

function Calcular_7(){

  examen_7 = parseInt(document.getElementById('examen_7').value);
  nota_7 = parseInt(document.getElementById('nota_7').value);
  resultado_7 = ((examen_7 * nota_7) / 100) 
  contenido = document.getElementById('contenido_7')
  contenido.innerHTML = ' ' + resultado_7;
}

//Función Examen Practico

function Calcular_8(){

  examen_8 = parseInt(document.getElementById('examen_8').value);
  nota_8 = parseInt(document.getElementById('nota_8').value);
  examen_9 = parseInt(document.getElementById('examen_9').value);
  nota_9 = parseInt(document.getElementById('nota_9').value);
  examen_10 = parseInt(document.getElementById('examen_10').value);
  nota_10 = parseInt(document.getElementById('nota_10').value);
  resultado_8 = ((examen_8 * nota_8) / 100) + ((examen_9 * nota_9) / 100) + ((examen_10 * nota_10) / 100) 
  contenido = document.getElementById('contenido_8')
  contenido.innerHTML = ' ' + resultado_8;
}

function Calcular_11(){

  examen_11 = parseInt(document.getElementById('examen_11').value);
  nota_11 = parseInt(document.getElementById('nota_11').value);
  examen_12 = parseInt(document.getElementById('examen_12').value);
  nota_12 = parseInt(document.getElementById('nota_12').value);
  examen_13 = parseInt(document.getElementById('examen_13').value);
  nota_13 = parseInt(document.getElementById('nota_13').value);
  resultado_11 = ((examen_11 * nota_11) / 100) +  ((examen_12 * nota_12) / 100) + ((examen_13 * nota_13) / 100) 
  contenido = document.getElementById('contenido_11')
  contenido.innerHTML = ' ' + resultado_11;
}

function Calcular_14(){
  
  examen_14 = parseInt(document.getElementById('examen_14').value);
  nota_14 = parseInt(document.getElementById('nota_14').value);
  examen_15 = parseInt(document.getElementById('examen_15').value);
  nota_15 = parseInt(document.getElementById('nota_15').value);
  examen_16 = parseInt(document.getElementById('examen_13').value);
  nota_16 = parseInt(document.getElementById('nota_13').value);
  resultado_14 = ((examen_14 * nota_14) / 100) +  ((examen_15 * nota_15) / 100) + ((examen_16 * nota_16) / 100) 
  contenido = document.getElementById('contenido_14')
  contenido.innerHTML = ' ' + resultado_14;
}

function Calcular_15(){

  examen_17 = parseInt(document.getElementById('examen_17').value);
  nota_17 = parseInt(document.getElementById('nota_17').value);
  examen_18 = parseInt(document.getElementById('examen_18').value);
  nota_18 = parseInt(document.getElementById('nota_18').value);
  examen_19 = parseInt(document.getElementById('examen_19').value);
  nota_19 = parseInt(document.getElementById('nota_19').value);
  resultado_15 = ((examen_17 * nota_17) / 100) +  ((examen_18 * nota_18) / 100) + ((examen_19 * nota_19) / 100) 
  contenido = document.getElementById('contenido_17')
  contenido.innerHTML = ' ' + resultado_15;


}

function Calcular_20(){

  examen_20 = parseInt(document.getElementById('examen_20').value);
  nota_20 = parseInt(document.getElementById('nota_20').value);
  examen_21 = parseInt(document.getElementById('examen_21').value);
  nota_21 = parseInt(document.getElementById('nota_21').value);
  examen_22 = parseInt(document.getElementById('examen_22').value);
  nota_22 = parseInt(document.getElementById('nota_22').value);
  resultado_20 = ((examen_20 * nota_20) / 100) +  ((examen_21 * nota_21) / 100) + ((examen_22 * nota_22) / 100) 
  contenido = document.getElementById('contenido_20')
  contenido.innerHTML = ' ' + resultado_20;

}

function Calcular_23(){

  examen_23 = parseInt(document.getElementById('examen_23').value);
  nota_23 = parseInt(document.getElementById('nota_23').value);
  examen_24 = parseInt(document.getElementById('examen_24').value);
  nota_24 = parseInt(document.getElementById('nota_24').value);
  examen_25 = parseInt(document.getElementById('examen_25').value);
  nota_25 = parseInt(document.getElementById('nota_25').value);
  resultado_23 = ((examen_23 * nota_23) / 100) +  ((examen_24 * nota_24) / 100) + ((examen_25 * nota_25) / 100) 
  contenido = document.getElementById('contenido_23')
  contenido.innerHTML = ' ' + resultado_23;
  
}

function Calcular_26(){

  examen_26 = parseInt(document.getElementById('examen_26').value);
  nota_26 = parseInt(document.getElementById('nota_26').value);
  examen_27 = parseInt(document.getElementById('examen_27').value);
  nota_27 = parseInt(document.getElementById('nota_27').value);
  examen_28 = parseInt(document.getElementById('examen_28').value);
  nota_28 = parseInt(document.getElementById('nota_28').value);
  resultado_26 = ((examen_26 * nota_26) / 100) +  ((examen_27 * nota_27) / 100) + ((examen_28 * nota_28) / 100) 
  contenido = document.getElementById('contenido_26')
  contenido.innerHTML = ' ' + resultado_26;
  
}


function Total_Examen_Teorico(){

contenido = document.getElementById('total')
contenido.innerHTML = ' ' + ( resultado_1 + resultado_2 + resultado_3 + resultado_4 + resultado_5 + resultado_6 + resultado_7) ;

}

function Total_Examen_Practico(){

  contenido = document.getElementById('total_1')
  contenido.innerHTML = ' ' + ( (resultado_8 + resultado_11 + resultado_14 + resultado_15 + resultado_20 + resultado_23 + resultado_26) /7 ) ;
  
} 


function Calcular_29(){

  examen_29 = parseInt(document.getElementById('examen_29').value);
  nota_29 = parseInt(document.getElementById('nota_29').value);
  resultado_29 =  ((examen_29 * nota_29) /100)
  contenido = document.getElementById('resultado_29')
  contenido.innerHTML = ' ' + resultado_29;
  
}
function Calcular_30(){

  examen_30 = parseInt(document.getElementById('examen_30').value);
  nota_30 = parseInt(document.getElementById('nota_30').value);
  resultado_30 =  ((examen_30 * nota_30) /100)
  contenido = document.getElementById('resultado_30')
  contenido.innerHTML = ' ' + resultado_30;
  
}



function Notal_final(){

examen_31 = parseInt(document.getElementById('examen_31').value);
nota_32 = parseInt(document.getElementById('nota_32').value);
nota_final = ((examen_31 * 80) / 100) +  ((nota_32 * 20) / 100)
contenido = document.getElementById('resultado_final')
contenido.innerHTML = ' ' + nota_final;

}
