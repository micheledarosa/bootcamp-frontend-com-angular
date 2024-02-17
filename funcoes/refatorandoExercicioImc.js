function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    condicao = imc < 18.5 ? "Abaixo do peso" 
    : imc >= 18.5 && imc <= 25 ? "Peso normal"
    : imc > 25 && imc <= 30 ? "Acima do peso"
    : imc > 30 && imc <= 40 ? "Obeso"
    : "Obesidade Grave";
    return condicao;
}

// main
(function() {  
    const imc = calcularImc(66, 1.63);
    
    console.log(`IMC: ${imc.toFixed(1)}, Condição: ${classificarImc(imc)}`);
})();  // função autoinvocada