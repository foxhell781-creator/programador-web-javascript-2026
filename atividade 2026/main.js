function identificaIdadeUsuario(idade){
    if (idade >= 18 && idade<120){
        alert("Você é maior de idade!")
    } else if(idade >=120){
    alert("idade invalida")
    } else if (idade < 0){
   alert("COMO??KKKKKKKK")
    }
    else{
        alert ("Você é menor de idade!")
    }
    
}
const idade = paserTnt(prompt("Qual a sua idade"))identificaIdadeUsuario(idade);
document.getElementById("idade").innerText