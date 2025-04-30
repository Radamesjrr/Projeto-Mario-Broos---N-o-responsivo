const formulario = document.querySelector (".form-orçamento")
const mascara = document.querySelector (".mascara-formulario")
const servicos = document.querySelector(".div-servicos")
const mascara2 = document.querySelector(".mascara-servicos")

function mostrarformulario() {
    formulario.style.left ="650px"
    mascara.style.visibility = "visible"
}

function esconderformulario() {
    mascara.style.visibility="hidden"
    formulario.style.left ="-290px"
}

function mostrarserviços() {
    servicos.style.right ="590px"
    mascara2.style.visibility ="visible"
}

function esconderservicos() {
    mascara2.style.visibility="hidden"
    servicos.style.right= "-290px"
}





