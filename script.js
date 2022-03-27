let nome = document.getElementById("nome")
let email = document.getElementById("email")
let rua = document.getElementById("rua")
let num = document.getElementById("num")
let formulario = document.getElementById("formulario")
let wpp = document.getElementById("link")
let pag = document.getElementsByName("pag")
let metodo = ''

function enviar(){
    if (pag[0].checked){
        metodo = 'Dinheiro'
    } else if (pag[1].checked){
        metodo = 'Pix'
    }else if (pag[2].checked){
        metodo = 'Débito'
    } else{
        metodo = 'Crétdio'
    }
    formulario.innerHTML = `Nome: ${nome.value} <br> email: ${email.value} <br>
    Endereço: <br>
    Rua: ${rua.value} n° ${num.value} <br>
    Método de Pagamento: ${metodo}`

    let link = `Nome: ${nome.value} | E-mail: ${email.value} | Endereço: Rua: ${rua.value} n° ${num.value} | Método de Pagamento: ${metodo}`
    wpp.href = `https://api.whatsapp.com/send?phone=5511945615278&text=${link}`
}

