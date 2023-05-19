function onclickReturnRegister() {
    window.location.href = "file:///home/marcos/Desktop/ESTUDOS/site%20de%20registro%20com%20template/coreui-free-bootstrap-admin-template-main/dist/registrar-mod.html"
}
var usernameLoginId = "usernameLogin"
var passwordLoginId = "passwordLogin"
var btnLogin = "btnLogin"
var cadastrosAtivosKey = "cadastrosAtivos"
function getElementById(id) {
    return document.getElementById(id)
}
function getCadastrosAtivos() {
    const storageCadastrosAtivos = localStorage.getItem(cadastrosAtivosKey)
    return JSON.parse(storageCadastrosAtivos) || []
}

function confirmarCampos() {
    if (!getElementById(usernameLoginId).value) {
        alert("preencher campo username")
        return false
    }
    if (!getElementById(passwordLoginId).value) {
        alert("preencher campo password")
        return false
    }
    return true
}

function acessarPage() {
    if (!confirmarCampos()) {
        return
    }
    validarLogin()
}

function validarLogin(){
    let realocandoAtivo = getCadastrosAtivos()
    realocandoAtivo = realocandoAtivo.filter(function(element, index){
       return element.usernameAtivo == getElementById(usernameLoginId).value
    })
    if(realocandoAtivo.length == 1){
        if(realocandoAtivo[0].passwordAtivo == getElementById(passwordLoginId).value){
            window.location.href = "file:///home/marcos/Desktop/ESTUDOS/site%20de%20registro%20com%20template/coreui-free-bootstrap-admin-template-main/dist/base/tabela-de-cadastros.html"
            return
        }
        
    }
    alert("usuario ou senha invalido")
    getElementById(usernameLoginId).value = ""
    getElementById(passwordLoginId).value = ""
}