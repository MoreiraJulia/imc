function CalculoIMC(){
    //pegar os valores de peso e altura
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //calcular o IMC --> PESO / (ALTURA * ALTURA)
    let imc = peso / (altura * altura);
    console.log(imc);

    //VERIFICAR SE O IMC < 20
    
    if(imc<20)
    {
        //SE FOR, MOSTRAR "MAGRO"
        document.getElementById("mensagem").innerText = "Talvez você esteja abaixo do peso"; 
        document.getElementById("imagem").src="images/magro.jpg";
    }

    //VERIFICAR SE IMC >= 25
    else if(imc >=25)
    {
        //SE FOR MOSTRAR "SOBREPESO"
        document.getElementById("mensagem").innerText = "Talvez você esteja um pouco acima do peso";
        document.getElementById("imagem").src="images/acima.jpg";
    }

    //SE NÃO, MOSTRA "OK"
    else{
        document.getElementById("mensagem").innerText = "O seu peso está bom";
        document.getElementById("imagem").src="images/normal01.jpg";
    }
}