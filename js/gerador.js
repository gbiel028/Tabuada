function tabuada() {
    let saida = document.getElementById('saida');
    let name = document.getElementById('fname').value;
    let n1 = Number(document.getElementById('fnum1').value);
    let n2 = Number(document.getElementById('fnum2').value);
    
    saida.innerHTML += `<h2>Tabuada de ${n1}</h2>`;
    saida.innerHTML += `<h2>Tabuada de ${n2}</h2>`;

    let c1 = 1;
    let c2 = 1;
    if (n1 <= 10){
        if (n2 <= 10) {
            while (c1 <=10) {
                saida.innerHTML += `${n1} x ${c1} = <strong>${n1 * c1}</strong><br>`;
                c1++;

                while (c2 <=10) {
                   
                    saida.innerHTML += `${n2} x ${c2} = <strong>${n2 * c2}</strong><br>`;
                    c2++;
                }
            }     
        } 
    } else{
        saida.innerHTML = " Digite um numero menor que 10";

    }
}