function buscaNumeroPrimos(n) {
//não altere a linha acima

/*
 * Nas linhas a seguir, escreva um código que encontre todos
 * os números primos entre 0 e n e coloque-os num array chamado
 * `numerosPrimos`(você deve criar esse array)
 */
    var numerosPrimos=[]; 
    
    
    for(var i=numerosPrimos.length;i<n;i++){
        if (i===2){
            numerosPrimos.push(i);
        };
        if (i===numerosPrimos){
            numerosPrimos.push(i);
        };
    }
    
    

 //não altere as linhas abaixo
  return numerosPrimos;
}
