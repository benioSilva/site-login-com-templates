console.log("hello")
var corpoTabela = "base-de-dados"
var dadosGeraisKey = "dadosGerais"
var cadastrosAtivosKey = "cadastrosAtivos"

function getElementById(id) {
    return document.getElementById(id)
}

function getDadosGeraisStorage() {
    const storageDadosGerais = localStorage.getItem(dadosGeraisKey)
    return JSON.parse(storageDadosGerais) || []
}
function getCadastrosAtivos(){
    const storageCadastrosAtivos = localStorage.getItem(cadastrosAtivosKey)
    return JSON.parse(storageCadastrosAtivos) || []
}
preencherLista()
function preencherLista() {
    getElementById(corpoTabela).innerHTML = ""

    getDadosGeraisStorage().forEach(function (element, index) {
        console.log(element, index)
        getElementById(corpoTabela).innerHTML += '<tr>' +
            '<th scope="row">' + (index + 1) + '</th>' +
            '<td>' + element.usernameRegistro + '</td>' +
            '<td>' + element.emailRegistro + '</td>' +
            '<td>' + element.status + '</td>' +
            '<td><button class="btn btn-block btn-warning btn-sm" onclick="onClickAlterar(' + index + ')">Alterar</button><button class="btn btn-block btn-danger btn-sm" onclick=" onClickExcluir(' + index + ')">Excluir</button></td>' +
            '</tr>'
    });
}
function onClickAlterar(index) {
    const realocandoStorage = getDadosGeraisStorage()

    if (realocandoStorage[index].status == "Desativado") {
        realocandoStorage[index].status = "Ativado"
        localStorage.setItem(dadosGeraisKey, JSON.stringify(realocandoStorage))
    } else {
        realocandoStorage[index].status = "Desativado"
        localStorage.setItem(dadosGeraisKey, JSON.stringify(realocandoStorage))
    }
    preencherLista()
    dadosAtivados(index)

}

function onClickExcluir(param) {
    let realocandoStorage = getDadosGeraisStorage()
    realocandoStorage = realocandoStorage.filter(function (element, index) {
        return param != index
    })
    localStorage.setItem(dadosGeraisKey, JSON.stringify(realocandoStorage))
    preencherLista()
}

function dadosAtivados(indexParam){
    const realocandoStorage = getDadosGeraisStorage()
    if (realocandoStorage[indexParam].status == "Desativado"){
       let realocandoAtivo = getCadastrosAtivos()
       realocandoAtivo = realocandoAtivo.filter(function (element, index){
        return indexParam != index
       })
       localStorage.setItem(cadastrosAtivosKey, JSON.stringify(realocandoAtivo))
       
    } else if (realocandoStorage[indexParam].status == "Ativado"){
        let dadosParaLogin = {
            usernameAtivo: realocandoStorage[indexParam].usernameRegistro,
            passwordAtivo: realocandoStorage[indexParam].passwordRegistro
        }
        const realocandoAtivo = getCadastrosAtivos()
        realocandoAtivo.push(dadosParaLogin)
        localStorage.setItem(cadastrosAtivosKey, JSON.stringify(realocandoAtivo))
        preencherLista()
    }
}