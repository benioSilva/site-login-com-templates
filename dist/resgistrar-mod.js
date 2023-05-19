var usernameId = "username"
var emailId = "email"
var passwordId = "password"
var passwordRepeatId = "repeat-password"
var btnCreateAccountId = "btn-create-account"
var dadosGeraisKey = "dadosGerais"

function getElementById(id) {
    return document.getElementById(id)
}

function getDadosGeraisStorage() {
    const storageDadosGerais = localStorage.getItem(dadosGeraisKey)
    return JSON.parse(storageDadosGerais) || []
}


function dadosCadastrais() {
    if (!getElementById(usernameId).value) {
        alert("preencher campo username")
        return false
    }
    if (!getElementById(emailId).value) {
        alert("preencher campo email")
        return false
    }
    if (!getElementById(passwordId).value) {
        alert("preencher campo password")
        return false
    }
    if (!getElementById(passwordRepeatId).value) {
        alert("preencher campo repeat - password")
        return false
    }
    return true
}

getElementById(btnCreateAccountId).addEventListener('click', function (event) {
    event.preventDefault();
    if (!dadosCadastrais()) {
        return
    }
    if (getElementById(passwordId).value != getElementById(passwordRepeatId).value) {
        alert("senhas não conferem")
    } else {
        let dadosEssenciais = {
            usernameRegistro: getElementById(usernameId).value,
            emailRegistro: getElementById(emailId).value,
            passwordRegistro: getElementById(passwordId).value,
            status: "Desativado"
        }
        const dadosListaCadastro = getDadosGeraisStorage()
        dadosListaCadastro.push(dadosEssenciais)
        localStorage.setItem(dadosGeraisKey, JSON.stringify(dadosListaCadastro))
        getElementById(usernameId).value = ""
        getElementById(emailId).value = ""
        getElementById(passwordId).value = ""
        getElementById(passwordRepeatId).value = ""
    }

})