
let c = parseFloat(localStorage.getItem("progressaoDoLevel"))
let level =  parseInt(localStorage.getItem("levelUp"))
let dinheiro = parseFloat(localStorage.getItem("dinheiro"))
let porcantagemLevel = parseFloat(localStorage.getItem("porcentagemLevel"))

/** Status Energia */

let contStatusEnergia = parseFloat(localStorage.getItem("contStatusEnergia"))
let statusEnergiaRgb = parseFloat(localStorage.getItem("statusEnergiaRgb"))
let statusEnergiarGb = parseFloat(localStorage.getItem("statusEnergiarGb"))
let convPorcentagemEnergia = parseFloat(localStorage.getItem("convPorcentagemEnergia"))

/** Status Saude */

let contStatusSaude = parseFloat(localStorage.getItem("contStatusSaude"))
let statusSaudeRgb = parseFloat(localStorage.getItem("statusSaudeRgb"))
let statusSauderGb = parseFloat(localStorage.getItem("statusSauderGb"))
let convPorcentagemSaude = parseFloat(localStorage.getItem("convPorcentagemSaude"))

/** Status Alimentacao */

let contStatusAlimentacao = parseFloat(localStorage.getItem("contStatusAlimentacao"))
let statusAlimentacaoRgb = parseFloat(localStorage.getItem("statusAlimentacaoRgb"))
let statusAlimentacaorGb = parseFloat(localStorage.getItem("statusAlimentacaorGb"))
let convPorcentagemAlimentacao = parseFloat(localStorage.getItem("convPorcentagemAlimentacao"))

/** Status Inteligencia */



/** Status Felicidade */

let contStatusFelicidade = parseFloat(localStorage.getItem("contStatusFelicidade"))
let statusFelicidadeRgb = parseFloat(localStorage.getItem("statusFelicidadeRgb"))
let statusFelicidaderGb = parseFloat(localStorage.getItem("statusFelicidaderGb"))
let convPorcentagemFelicidade = parseFloat(localStorage.getItem("convPorcentagemFelicidade"))
let rostoStatus = localStorage.getItem("rostoStatus")

/** Status Higiene */

let contStatusHigiene = parseFloat(localStorage.getItem("contStatusHigiene"))
let statusHigieneRgb = parseFloat(localStorage.getItem("statusHigieneRgb"))
let statusHigienerGb = parseFloat(localStorage.getItem("statusHigienerGb"))
let convPorcentagemHigiene = parseFloat(localStorage.getItem("convPorcentagemHigiene"))

/** Quantidade de Itens da Geladeira */

let quantidade1 = parseInt(localStorage.getItem("quantidade1"))
let quantidade2 = parseInt(localStorage.getItem("quantidade2"))
let quantidade3 = parseInt(localStorage.getItem("quantidade3"))
let quantidade4 = parseInt(localStorage.getItem("quantidade4"))
let quantidade5 = parseInt(localStorage.getItem("quantidade5"))
let quantidade6 = parseInt(localStorage.getItem("quantidade6"))
let quantidade7 = parseInt(localStorage.getItem("quantidade7"))
let quantidade8 = parseInt(localStorage.getItem("quantidade8"))
let quantidade9 = parseInt(localStorage.getItem("quantidade9"))
let quantidade10 = parseInt(localStorage.getItem("quantidade10"))
let quantidade11 = parseInt(localStorage.getItem("quantidade11"))
let quantidade12 = parseInt(localStorage.getItem("quantidade12"))
let quantidade13 = parseInt(localStorage.getItem("quantidade13"))
let quantidade14 = parseInt(localStorage.getItem("quantidade14"))
let quantidade15 = parseInt(localStorage.getItem("quantidade15"))
let quantidade16 = parseInt(localStorage.getItem("quantidade16"))
let quantidade17 = parseInt(localStorage.getItem("quantidade17"))
let quantidade18 = parseInt(localStorage.getItem("quantidade18"))
let quantidade19 = parseInt(localStorage.getItem("quantidade19"))
let quantidade20 = parseInt(localStorage.getItem("quantidade20"))
let quantidade21 = parseInt(localStorage.getItem("quantidade21"))
let quantidade22 = parseInt(localStorage.getItem("quantidade22"))
let quantidade23 = parseInt(localStorage.getItem("quantidade23"))
let quantidade24 = parseInt(localStorage.getItem("quantidade24"))
let quantidade25 = parseInt(localStorage.getItem("quantidade25"))
let quantidade26 = parseInt(localStorage.getItem("quantidade26"))
let quantidade27 = parseInt(localStorage.getItem("quantidade27"))

/** Comodo */

let comodo = localStorage.getItem("comodo");

/** Medalha */

let medalha = localStorage.getItem("medalha")

/** LocalStorage  */

if (localStorage.length > 0) {


} else {

    localStorage.setItem("porcentagemLevel", "0%")
    localStorage.setItem("levelUp", "1")
    localStorage.setItem("dinheiro", "0")
    localStorage.setItem("progressaoDoLevel" , "-100")
    localStorage.setItem("barraDeLevel", "translateX(-100%)")

    /** Status Energia */

    localStorage.setItem("contStatusEnergia", "0")
    localStorage.setItem("statusEnergiaRgb", "0")
    localStorage.setItem("statusEnergiarGb", "250")
    localStorage.setItem("statusDeEnergia", "linear-gradient(rgba(255, 255, 255, 0) 0%,rgb(0, 250, 0) 0%)")
    localStorage.setItem("convPorcentagemEnergia", "100")

    /** Status Saude */

    localStorage.setItem("contStatusSaude", "0")
    localStorage.setItem("statusSaudeRgb", "0")
    localStorage.setItem("statusSauderGb", "250")
    localStorage.setItem("statusDeSaude", "linear-gradient(rgba(255, 255, 255, 0) 0%,rgb(0, 250, 0) 0%)")
    localStorage.setItem("convPorcentagemSaude", "100")

    /** Status Alimentacao */

    localStorage.setItem("contStatusAlimentacao", "0")
    localStorage.setItem("statusAlimentacaoRgb", "0")
    localStorage.setItem("statusAlimentacaorGb", "250")
    localStorage.setItem("statusDeAlimentacao", "linear-gradient(rgba(255, 255, 255, 0) 0%,rgb(0, 250, 0) 0%)")
    localStorage.setItem("convPorcentagemAlimentacao", "100")
    
    /** Status Inteligencia */



    /** Status Felicidade */

    localStorage.setItem("contStatusFelicidade", "0")
    localStorage.setItem("statusFelicidadeRgb", "0")
    localStorage.setItem("statusFelicidaderGb", "250")
    localStorage.setItem("statusDeFelicidade", "linear-gradient(rgba(255, 255, 255, 0) 0%,rgb(0, 250, 0) 0%)")
    localStorage.setItem("convPorcentagemFelicidade", "100")
    localStorage.setItem("rostoStatus", "Imagens/Status/happy-face.png")

    /** Status Higiene */

    localStorage.setItem("contStatusHigiene", "0")
    localStorage.setItem("statusHigieneRgb", "0")
    localStorage.setItem("statusHigienerGb", "250")
    localStorage.setItem("statusDeHigiene", "linear-gradient(rgba(255, 255, 255, 0) 0%,rgb(0, 250, 0) 0%)")
    localStorage.setItem("convPorcentagemHigiene", "100")

    /** Itens da Geladeira */

    localStorage.setItem("quantidade1", "0")
    localStorage.setItem("quantidade2", "0")
    localStorage.setItem("quantidade3", "0")
    localStorage.setItem("quantidade4", "0")
    localStorage.setItem("quantidade5", "0")
    localStorage.setItem("quantidade6", "0")
    localStorage.setItem("quantidade7", "0")
    localStorage.setItem("quantidade8", "0")
    localStorage.setItem("quantidade9", "0")
    localStorage.setItem("quantidade10", "0")
    localStorage.setItem("quantidade11", "0")
    localStorage.setItem("quantidade12", "0")
    localStorage.setItem("quantidade13", "0")
    localStorage.setItem("quantidade14", "0")
    localStorage.setItem("quantidade15", "0")
    localStorage.setItem("quantidade16", "0")
    localStorage.setItem("quantidade17", "0")
    localStorage.setItem("quantidade18", "0")
    localStorage.setItem("quantidade19", "0")
    localStorage.setItem("quantidade20", "0")
    localStorage.setItem("quantidade21", "0")
    localStorage.setItem("quantidade22", "0")
    localStorage.setItem("quantidade23", "0")
    localStorage.setItem("quantidade24", "0")
    localStorage.setItem("quantidade25", "0")
    localStorage.setItem("quantidade26", "0")
    localStorage.setItem("quantidade27", "0")

    /** Comodo */

    localStorage.setItem("comodo", "")

}

if (comodo != "") {
 
    /** Status de Level */

    document.getElementById('level').innerText = localStorage.getItem("levelUp");
    document.getElementById('dinheiro').innerText = dinheiro;
    document.getElementById('mPorcentagemDeLevel').title = localStorage.getItem("porcentagemLevel");
    document.getElementById('progressao').style.transform = localStorage.getItem("barraDeLevel");

    /** Medalha */

    function receberMedalha() {

        if (level >= 10 && level < 20) {
            medalha = "Imagens/Medalhas/Captura_de_tela_20230119_194053-removebg-preview.png"
            localStorage.setItem("medalha", medalha)
        }
        if (level >= 20 && level < 30) {
            medalha = "Imagens/Medalhas/Captura_de_tela_20230119_194118-removebg-preview.png"
            localStorage.setItem("medalha", medalha)
        }
        if (level >= 30 && level < 40) {
            medalha = "Imagens/Medalhas/Captura_de_tela_20230119_194127-removebg-preview.png"
            localStorage.setItem("medalha", medalha)
        }
        if (level >= 40 && level < 50) {
            medalha = "Imagens/Medalhas/Captura_de_tela_20230119_194150-removebg-preview.png"
            localStorage.setItem("medalha", medalha)
        }
        if (level >= 50 && level < 60) {
            medalha = "Imagens/Medalhas/Captura_de_tela_20230119_194216-removebg-preview.png"
            localStorage.setItem("medalha", medalha)
        }
        if (level >= 60 && level < 70) {
            medalha = "Imagens/Medalhas/Captura_de_tela_20230119_194228-removebg-preview.png"
            localStorage.setItem("medalha", medalha)
        }
        if (level >= 70 && level < 80) {
            medalha = "Imagens/Medalhas/Captura_de_tela_20230119_194312-removebg-preview.png"
            localStorage.setItem("medalha", medalha)
        }
        if (level >= 80 && level < 90) {
            medalha = "Imagens/Medalhas/Captura_de_tela_20230119_194322-removebg-preview.png"
            localStorage.setItem("medalha", medalha)
        }
        if (level >= 90 && level < 100) {
            medalha = "Imagens/Medalhas/Captura_de_tela_20230119_194358-removebg-preview.png"
            localStorage.setItem("medalha", medalha)
        }
        if (level >= 100) {
            medalha = "Imagens/Medalhas/Captura_de_tela_20230119_194417-removebg-preview.png"
            localStorage.setItem("medalha", medalha)
        }
    }

    /** Status Energia */

    document.getElementById('mPorcentagemDaEnergia').title = "Energia: "+ localStorage.getItem("convPorcentagemEnergia") +"%";

    document.getElementById("energiaDoPet").style.background = localStorage.getItem("statusDeEnergia")

    /** Status Saude */

    document.getElementById('mPorcentagemDaSaude').title = "Saúde: "+ localStorage.getItem("convPorcentagemSaude") +"%";

    document.getElementById("saudeDoPet").style.background = localStorage.getItem("statusDeSaude")

    /** Status Alimentacao */

    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentação: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%";

    document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao")

    /** Status Inteligencia */



    /** Status Felicidade */

    document.getElementById('mPorcentagemDaFelicidade').title = "Felicidade: "+ localStorage.getItem("convPorcentagemFelicidade") +"%";

    document.getElementById("felicidadeDoPet").style.background = localStorage.getItem("statusDeFelicidade")

    document.getElementById('rostoStatus').src = localStorage.getItem("rostoStatus")

    /** Status Higiene */

    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%";

    document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")

    /** Sem fome */

    function semFome() {
        document.getElementById('semFome').style.display = "none"
    }

    /** Geladeira */

    if (comodo == "Cozinha") {
        let geladeiraAberta = 0

    if(geladeiraAberta == 0) {
        const geladeiraHover = document.querySelector('#geladeiraHover');

        geladeiraHover.addEventListener('mouseenter', () => {
            geladeiraHover.style.opacity = "1";
        })
        geladeiraHover.addEventListener('mouseleave', () => {
            geladeiraHover.style.opacity = "0";
        });
    }

    let temItem1 = 0
    function item1() {

        if (temItem1 == 1) {
            document.getElementById('opcaoComerItem1').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem1').style.display = "none"
        }
    }
    function comerItem1() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 50; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 25; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade1 -= 1
            localStorage.setItem("quantidade1", quantidade1)
            document.getElementById('coxaDeBoi').title = "Coxa de Boi: "+ quantidade1 +" UND"
            document.getElementById('opcaoComerItem1').style.display = "none"
            if(quantidade1 == 0) {
                document.getElementById('item1').style.opacity = "0.2"
                document.getElementById('item1').style.cursor = "default"
                temItem1 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem1() {
        document.getElementById('opcaoComerItem1').style.display = "none"
    }

    let temItem2 = 0
    function item2() {

        if (temItem2 == 1) {
            document.getElementById('opcaoComerItem2').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem2').style.display = "none"
        }
    }
    function comerItem2() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 10; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 5; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade2 -= 1
            localStorage.setItem("quantidade2", quantidade2)
            document.getElementById('cubosDeCarne').title = "Cubos de Carne: "+ quantidade2 +" UND"
            document.getElementById('opcaoComerItem2').style.display = "none"
            if(quantidade2 == 0) {
                document.getElementById('item2').style.opacity = "0.2"
                document.getElementById('item2').style.cursor = "default"
                temItem2 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem2() {
        document.getElementById('opcaoComerItem2').style.display = "none"
    }

    let temItem3 = 0
    function item3() {

        if (temItem3 == 1) {
            document.getElementById('opcaoComerItem3').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem3').style.display = "none"
        }
    }
    function comerItem3() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 10; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 5; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade3 -= 1
            localStorage.setItem("quantidade3", quantidade3)
            document.getElementById('sushi').title = "Sushi: "+ quantidade3 +" UND"
            document.getElementById('opcaoComerItem3').style.display = "none"
            if(quantidade3 == 0) {
                document.getElementById('item3').style.opacity = "0.2"
                document.getElementById('item3').style.cursor = "default"
                temItem3 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem3() {
        document.getElementById('opcaoComerItem3').style.display = "none"
    }

    let temItem4 = 0
    function item4() {

        if (temItem4 == 1) {
            document.getElementById('opcaoComerItem4').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem4').style.display = "none"
        }
    }
    function comerItem4() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 30; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 15; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade4 -= 1
            localStorage.setItem("quantidade4", quantidade4)
            document.getElementById('peixe').title = "Peixe: "+ quantidade4 +" UND"
            document.getElementById('opcaoComerItem4').style.display = "none"
            if(quantidade4 == 0) {
                document.getElementById('item4').style.opacity = "0.2"
                document.getElementById('item4').style.cursor = "default"
                temItem4 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem4() {
        document.getElementById('opcaoComerItem4').style.display = "none"
    }

    let temItem5 = 0
    function item5() {

        if (temItem5 == 1) {
            document.getElementById('opcaoComerItem5').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem5').style.display = "none"
        }
    }
    function comerItem5() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 20; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 10; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade5 -= 1
            localStorage.setItem("quantidade5", quantidade5)
            document.getElementById('sorveteDeBlueberry').title = "Sorvete de Blueberry: "+ quantidade5 +" UND"
            document.getElementById('opcaoComerItem5').style.display = "none"
            if(quantidade5 == 0) {
                document.getElementById('item5').style.opacity = "0.2"
                document.getElementById('item5').style.cursor = "default"
                temItem5 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem5() {
        document.getElementById('opcaoComerItem5').style.display = "none"
    }

    let temItem6 = 0
    function item6() {

        if (temItem6 == 1) {
            document.getElementById('opcaoComerItem6').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem6').style.display = "none"
        }
    }
    function comerItem6() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 20; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 10; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade6 -= 1
            localStorage.setItem("quantidade6", quantidade6)
            document.getElementById('sorveteDeStrawberry').title = "Sorvete de Strawberry: "+ quantidade6 +" UND"
            document.getElementById('opcaoComerItem6').style.display = "none"
            if(quantidade6 == 0) {
                document.getElementById('item6').style.opacity = "0.2"
                document.getElementById('item6').style.cursor = "default"
                temItem6 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem6() {
        document.getElementById('opcaoComerItem6').style.display = "none"
    }

    let temItem7 = 0
    function item7() {

        if (temItem7 == 1) {
            document.getElementById('opcaoComerItem7').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem7').style.display = "none"
        }
    }
    function comerItem7() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 10; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 5; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade7 -= 1
            localStorage.setItem("quantidade7", quantidade7)
            document.getElementById('cubosDeQueijo').title = "Cubos de Queijo: "+ quantidade7 +" UND"
            document.getElementById('opcaoComerItem7').style.display = "none"
            if(quantidade7 == 0) {
                document.getElementById('item7').style.opacity = "0.2"
                document.getElementById('item7').style.cursor = "default"
                temItem7 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem7() {
        document.getElementById('opcaoComerItem7').style.display = "none"
    }

    let temItem8 = 0
    function item8() {

        if (temItem8 == 1) {
            document.getElementById('opcaoComerItem8').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem8').style.display = "none"
        }
    }
    function comerItem8() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 20; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 10; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade8 -= 1
            localStorage.setItem("quantidade8", quantidade8)
            document.getElementById('queijoGouda').title = "Queijo Gouda: "+ quantidade8 +" UND"
            document.getElementById('opcaoComerItem8').style.display = "none"
            if(quantidade8 == 0) {
                document.getElementById('item8').style.opacity = "0.2"
                document.getElementById('item8').style.cursor = "default"
                temItem8 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem8() {
        document.getElementById('opcaoComerItem8').style.display = "none"
    }

    let temItem9 = 0
    function item9() {

        if (temItem9 == 1) {
            document.getElementById('opcaoComerItem9').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem9').style.display = "none"
        }
    }
    function comerItem9() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 20; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 10; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade9 -= 1
            localStorage.setItem("quantidade9", quantidade9)
            document.getElementById('fatiasDeQueijo').title = "Fatias de Queijo: "+ quantidade9 +" UND"
            document.getElementById('opcaoComerItem9').style.display = "none"
            if(quantidade9 == 0) {
                document.getElementById('item9').style.opacity = "0.2"
                document.getElementById('item9').style.cursor = "default"
                temItem9 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem9() {
        document.getElementById('opcaoComerItem9').style.display = "none"
    }

    let temItem10 = 0
    function item10() {

        if (temItem10 == 1) {
            document.getElementById('opcaoComerItem10').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem10').style.display = "none"
        }
    }
    function comerItem10() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 30; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 15; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade10 -= 1
            localStorage.setItem("quantidade10", quantidade10)
            document.getElementById('pao').title = "Pão: "+ quantidade10 +" UND"
            document.getElementById('opcaoComerItem10').style.display = "none"
            if(quantidade10 == 0) {
                document.getElementById('item10').style.opacity = "0.2"
                document.getElementById('item10').style.cursor = "default"
                temItem10 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem10() {
        document.getElementById('opcaoComerItem10').style.display = "none"
    }

    let temItem11 = 0
    function item11() {

        if (temItem11 == 1) {
            document.getElementById('opcaoComerItem11').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem11').style.display = "none"
        }
    }
    function comerItem11() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 40; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 20; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade11 -= 1
            localStorage.setItem("quantidade11", quantidade11)
            document.getElementById('boloDeMorango').title = "Bolo de Morango: "+ quantidade11 +" UND"
            document.getElementById('opcaoComerItem11').style.display = "none"
            if(quantidade11 == 0) {
                document.getElementById('item11').style.opacity = "0.2"
                document.getElementById('item11').style.cursor = "default"
                temItem11 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem11() {
        document.getElementById('opcaoComerItem11').style.display = "none"
    }

    let temItem12 = 0
    function item12() {

        if (temItem12 == 1) {
            document.getElementById('opcaoComerItem12').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem12').style.display = "none"
        }
    }
    function comerItem12() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 40; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 20; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade12 -= 1
            localStorage.setItem("quantidade12", quantidade12)
            document.getElementById('boloDeChocolate').title = "Bolo de Chocolate: "+ quantidade12 +" UND"
            document.getElementById('opcaoComerItem12').style.display = "none"
            if(quantidade12 == 0) {
                document.getElementById('item12').style.opacity = "0.2"
                document.getElementById('item12').style.cursor = "default"
                temItem12 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem12() {
        document.getElementById('opcaoComerItem12').style.display = "none"
    }

    let temItem13 = 0
    function item13() {

        if (temItem13 == 1) {
            document.getElementById('opcaoComerItem13').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem13').style.display = "none"
        }
    }
    function comerItem13() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 5; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 15; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade13 -= 1
            localStorage.setItem("quantidade13", quantidade13)
            document.getElementById('leite').title = "Leite: "+ quantidade13 +" UND"
            document.getElementById('opcaoComerItem13').style.display = "none"
            if(quantidade13 == 0) {
                document.getElementById('item13').style.opacity = "0.2"
                document.getElementById('item13').style.cursor = "default"
                temItem13 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem13() {
        document.getElementById('opcaoComerItem13').style.display = "none"
    }

    let temItem14 = 0
    function item14() {

        if (temItem14 == 1) {
            document.getElementById('opcaoComerItem14').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem14').style.display = "none"
        }
    }
    function comerItem14() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 20; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 10; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade14 -= 1
            localStorage.setItem("quantidade14", quantidade14)
            document.getElementById('lataDeAtum').title = "Lata de Atum: "+ quantidade14 +" UND"
            document.getElementById('opcaoComerItem14').style.display = "none"
            if(quantidade14 == 0) {
                document.getElementById('item14').style.opacity = "0.2"
                document.getElementById('item14').style.cursor = "default"
                temItem14 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem14() {
        document.getElementById('opcaoComerItem14').style.display = "none"
    }

    let temItem15 = 0
    function item15() {

        if (temItem15 == 1) {
            document.getElementById('opcaoComerItem15').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem15').style.display = "none"
        }
    }
    function comerItem15() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 20; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 10; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade15 -= 1
            localStorage.setItem("quantidade15", quantidade15)
            document.getElementById('espaguete').title = "Espaguete: "+ quantidade15 +" UND"
            document.getElementById('opcaoComerItem15').style.display = "none"
            if(quantidade15 == 0) {
                document.getElementById('item15').style.opacity = "0.2"
                document.getElementById('item15').style.cursor = "default"
                temItem15 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem15() {
        document.getElementById('opcaoComerItem2').style.display = "none"
    }

    let temItem16 = 0
    function item16() {

        if (temItem16 == 1) {
            document.getElementById('opcaoComerItem16').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem16').style.display = "none"
        }
    }
    function comerItem16() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 20; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 10; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade16 -= 1
            localStorage.setItem("quantidade16", quantidade16)
            document.getElementById('sopaDeTomate').title = "Sopa de Tomate: "+ quantidade16 +" UND"
            document.getElementById('opcaoComerItem16').style.display = "none"
            if(quantidade16 == 0) {
                document.getElementById('item16').style.opacity = "0.2"
                document.getElementById('item16').style.cursor = "default"
                temItem16 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem16() {
        document.getElementById('opcaoComerItem16').style.display = "none"
    }

    let temItem17 = 0
    function item17() {

        if (temItem17 == 1) {
            document.getElementById('opcaoComerItem17').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem17').style.display = "none"
        }
    }
    function comerItem17() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 20; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 10; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade17 -= 1
            localStorage.setItem("quantidade17", quantidade17)
            document.getElementById('almondegas').title = "Almôndegas: "+ quantidade17 +" UND"
            document.getElementById('opcaoComerItem17').style.display = "none"
            if(quantidade17 == 0) {
                document.getElementById('item17').style.opacity = "0.2"
                document.getElementById('item17').style.cursor = "default"
                temItem17 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem17() {
        document.getElementById('opcaoComerItem17').style.display = "none"
    }

    let temItem18 = 0
    function item18() {

        if (temItem18 == 1) {
            document.getElementById('opcaoComerItem18').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem18').style.display = "none"
        }
    }
    function comerItem18() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 10; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 5; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade18 -= 1
            localStorage.setItem("quantidade18", quantidade18)
            document.getElementById('polpaDeManga').title = "Polpa de Manga: "+ quantidade18 +" UND"
            document.getElementById('opcaoComerItem18').style.display = "none"
            if(quantidade18 == 0) {
                document.getElementById('item18').style.opacity = "0.2"
                document.getElementById('item18').style.cursor = "default"
                temItem18 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem18() {
        document.getElementById('opcaoComerItem18').style.display = "none"
    }

    let temItem19 = 0
    function item19() {

        if (temItem19 == 1) {
            document.getElementById('opcaoComerItem19').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem19').style.display = "none"
        }
    }
    function comerItem19() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 20; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 10; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade19 -= 1
            localStorage.setItem("quantidade19", quantidade19)
            document.getElementById('presunto').title = "Presunto: "+ quantidade19 +" UND"
            document.getElementById('opcaoComerItem19').style.display = "none"
            if(quantidade19 == 0) {
                document.getElementById('item19').style.opacity = "0.2"
                document.getElementById('item19').style.cursor = "default"
                temItem19 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem19() {
        document.getElementById('opcaoComerItem19').style.display = "none"
    }

    let temItem20 = 0
    function item20() {

        if (temItem20 == 1) {
            document.getElementById('opcaoComerItem20').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem20').style.display = "none"
        }
    }
    function comerItem20() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 10; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 5; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade20 -= 1
            localStorage.setItem("quantidade20", quantidade20)
            document.getElementById('brocolis').title = "Brócolis: "+ quantidade20 +" UND"
            document.getElementById('opcaoComerItem20').style.display = "none"
            if(quantidade20 == 0) {
                document.getElementById('item20').style.opacity = "0.2"
                document.getElementById('item20').style.cursor = "default"
                temItem20 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem20() {
        document.getElementById('opcaoComerItem20').style.display = "none"
    }

    let temItem21 = 0
    function item21() {

        if (temItem21 == 1) {
            document.getElementById('opcaoComerItem21').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem21').style.display = "none"
        }
    }
    function comerItem21() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 10; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 5; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade21 -= 1
            localStorage.setItem("quantidade21", quantidade21)
            document.getElementById('cenoura').title = "Cenoura: "+ quantidade21 +" UND"
            document.getElementById('opcaoComerItem21').style.display = "none"
            if(quantidade21 == 0) {
                document.getElementById('item21').style.opacity = "0.2"
                document.getElementById('item21').style.cursor = "default"
                temItem21 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem21() {
        document.getElementById('opcaoComerItem21').style.display = "none"
    }

    let temItem22 = 0
    function item22() {

        if (temItem22 == 1) {
            document.getElementById('opcaoComerItem22').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem22').style.display = "none"
        }
    }
    function comerItem22() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 10; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 5; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade22 -= 1
            localStorage.setItem("quantidade22", quantidade22)
            document.getElementById('repolho').title = "Repolho: "+ quantidade22 +" UND"
            document.getElementById('opcaoComerItem22').style.display = "none"
            if(quantidade22 == 0) {
                document.getElementById('item22').style.opacity = "0.2"
                document.getElementById('item22').style.cursor = "default"
                temItem22 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem22() {
        document.getElementById('opcaoComerItem22').style.display = "none"
    }

    let temItem23 = 0
    function item23() {

        if (temItem23 == 1) {
            document.getElementById('opcaoComerItem23').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem23').style.display = "none"
        }
    }
    function comerItem23() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 10; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 5; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade23 -= 1
            localStorage.setItem("quantidade23", quantidade23)
            document.getElementById('maca').title = "Maça: "+ quantidade23 +" UND"
            document.getElementById('opcaoComerItem23').style.display = "none"
            if(quantidade23 == 0) {
                document.getElementById('item23').style.opacity = "0.2"
                document.getElementById('item23').style.cursor = "default"
                temItem23 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem23() {
        document.getElementById('opcaoComerItem23').style.display = "none"
    }

    let temItem24 = 0
    function item24() {

        if (temItem24 == 1) {
            document.getElementById('opcaoComerItem24').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem24').style.display = "none"
        }
    }
    function comerItem24() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 10; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 5; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade24 -= 1
            localStorage.setItem("quantidade24", quantidade24)
            document.getElementById('laranja').title = "Laranja: "+ quantidade24 +" UND"
            document.getElementById('opcaoComerItem24').style.display = "none"
            if(quantidade24 == 0) {
                document.getElementById('item24').style.opacity = "0.2"
                document.getElementById('item24').style.cursor = "default"
                temItem24 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem24() {
        document.getElementById('opcaoComerItem24').style.display = "none"
    }

    let temItem25 = 0
    function item25() {

        if (temItem25 == 1) {
            document.getElementById('opcaoComerItem25').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem25').style.display = "none"
        }
    }
    function comerItem25() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 10; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 5; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade25 -= 1
            localStorage.setItem("quantidade25", quantidade25)
            document.getElementById('cachoDeUvas').title = "Cacho de Uvas: "+ quantidade25 +" UND"
            document.getElementById('opcaoComerItem25').style.display = "none"
            if(quantidade25 == 0) {
                document.getElementById('item25').style.opacity = "0.2"
                document.getElementById('item25').style.cursor = "default"
                temItem25 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem25() {
        document.getElementById('opcaoComerItem25').style.display = "none"
    }

    let temItem26 = 0
    function item26() {

        if (temItem26 == 1) {
            document.getElementById('opcaoComerItem26').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem26').style.display = "none"
        }
    }
    function comerItem26() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 5; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 20; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade26 -= 1
            localStorage.setItem("quantidade26", quantidade26)
            document.getElementById('agua').title = "Água: "+ quantidade26 +" UND"
            document.getElementById('opcaoComerItem26').style.display = "none"
            if(quantidade26 == 0) {
                document.getElementById('item26').style.opacity = "0.2"
                document.getElementById('item26').style.cursor = "default"
                temItem26 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem26() {
        document.getElementById('opcaoComerItem26').style.display = "none"
    }

    let temItem27 = 0
    function item27() {

        if (temItem27 == 1) {
            document.getElementById('opcaoComerItem27').style.display = "flex"
        } else {
            document.getElementById('opcaoComerItem27').style.display = "none"
        }
    }
    function comerItem27() {

        if (contStatusAlimentacao > 2) {
            /** Alimentacao */
            for (let i = 0; i < 5; i++) {
            
                if (contStatusAlimentacao > 0 && contStatusAlimentacao <= 100 && limiteAlimentacao == 0) {
            
                    if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 245) {
                        statusAlimentacaorGb += 5
            
                        localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
                    }
        
                    if (contStatusAlimentacao < 25) {
                        
                        if(statusAlimentacaoRgb >= 10 && statusAlimentacaoRgb <= 250) {
                            statusAlimentacaoRgb -= 10
                
                            localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
                        }
        
                    }
            
                    --contStatusAlimentacao
                    let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 
            
                    let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1
            
                    if (contStatusAlimentacao == 0) {
                        convPorcentagemAlimentacao = 100
                    }
            
                    localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())
            
                    document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentacao: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"
            
                    localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())
            
                    const StringTempAlimentacao = contStatusAlimentacao + "%"
            
                    if (contStatusAlimentacao <= 65) {
            
                        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao+",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)
            
                    }
            
                }
        
                document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao");         
            }
            /** Higiene */
            for (let i = 0; i < 20; i++) {
                if (contStatusHigiene >= 0 && contStatusHigiene < 100) {

                    if(statusHigieneRgb >= 0 && statusHigieneRgb <= 245) {
                        statusHigieneRgb += 5
            
                        localStorage.setItem("statusHigieneRgb", statusHigieneRgb.toString())
                    }
            
                    contStatusHigiene++
            
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene > 65) {
                        if(statusHigienerGb >= 10 && statusHigienerGb <= 250) {
                        statusHigienerGb -= 10
            
                        localStorage.setItem("statusSauderGb", statusSauderGb.toString())
                    }
                    }
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                }
                
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
            }

            expBasico()
            quantidade27 -= 1
            localStorage.setItem("quantidade27", quantidade27)
            document.getElementById('refrigerante').title = "Refrigerante: "+ quantidade27 +" UND"
            document.getElementById('opcaoComerItem27').style.display = "none"
            if(quantidade27 == 0) {
                document.getElementById('item27').style.opacity = "0.2"
                document.getElementById('item27').style.cursor = "default"
                temItem27 = 0
            }

        } else {
            document.getElementById('semFome').style.display = "block"
        }

    }
    function fecharItem27() {
        document.getElementById('opcaoComerItem27').style.display = "none"
    }

    /** Abrir Geladeira */

    function abrirGeladeira() {

        document.getElementById('geladeira').style.display = "block";
        document.getElementById('cozinhaFundo').style.opacity = "0.5";
        document.getElementById('alimentacaoDoPet').style.opacity = "1"
        document.getElementById('tampaGeladeira').style.display = "block"
        document.getElementById('geladeiraHover').style.display = "none"
        document.getElementById('fogaoHover').style.display = "none"
        document.getElementById('microondasHover').style.display = "none"
        document.getElementById('mudarDeCenario').style.display = "none"

        if (quantidade1 > 0) {
            document.getElementById('item1').style.opacity = "1"
            document.getElementById('item1').style.cursor = "pointer"
            temItem1 = 1
        } else {
            document.getElementById('item1').style.opacity = "0.2"
            document.getElementById('item1').style.cursor = "default"
            temItem1 = 0
        }
        document.getElementById('coxaDeBoi').title = "Coxa de Boi: "+ quantidade1 +" UND"

        if (quantidade2 > 0) {
            document.getElementById('item2').style.opacity = "1"
            document.getElementById('item2').style.cursor = "pointer"
            temItem2 = 1
        } else {
            document.getElementById('item2').style.opacity = "0.2"
            document.getElementById('item2').style.cursor = "default"
            temItem2 = 0 
        }
        document.getElementById('cubosDeCarne').title = "Cubos de Carne: "+ quantidade2 +" UND"

        if (quantidade3 > 0) {
            document.getElementById('item3').style.opacity = "1"
            document.getElementById('item3').style.cursor = "pointer"
            temItem3 = 1
        } else {
            document.getElementById('item3').style.opacity = "0.2"
            document.getElementById('item3').style.cursor = "default"
            temItem3 = 0
        }
        document.getElementById('sushi').title = "Shushi: "+ quantidade3 +" UND"
        
        if (quantidade4 > 0) {
            document.getElementById('item4').style.opacity = "1"
            document.getElementById('item4').style.cursor = "pointer"
            temItem4 = 1
        } else {
            document.getElementById('item4').style.opacity = "0.2"
            document.getElementById('item4').style.cursor = "default"
            temItem4 = 0
        }
        document.getElementById('peixe').title = "Peixe: "+ quantidade4 +" UND"
        
        if (quantidade5 > 0) {
            document.getElementById('item5').style.opacity = "1"
            document.getElementById('item5').style.cursor = "pointer"
            temItem5 = 1
        } else {
            document.getElementById('item5').style.opacity = "0.2"
            document.getElementById('item5').style.cursor = "default"
            temItem5 = 0
        }
        document.getElementById('sorveteDeBlueberry').title = "Sorvete de Blueberry: "+ quantidade5 +" UND"
        
        if (quantidade6 > 0) {
            document.getElementById('item6').style.opacity = "1"
            document.getElementById('item6').style.cursor = "pointer"
            temItem6 = 1
        } else {
            document.getElementById('item6').style.opacity = "0.2"
            document.getElementById('item6').style.cursor = "default"
            temItem6 = 0
        }
        document.getElementById('sorveteDeStrawberry').title = "Sorvete de Strawberry: "+ quantidade6 +" UND"
        
        if (quantidade7 > 0) {
            document.getElementById('item7').style.opacity = "1"
            document.getElementById('item7').style.cursor = "pointer"
            temItem7 = 1
        } else {
            document.getElementById('item7').style.opacity = "0.2"
            document.getElementById('item7').style.cursor = "default"
            temItem7 = 0
        }
        document.getElementById('cubosDeQueijo').title = "Cubos de Queijo: "+ quantidade7 +" UND"
        
        if (quantidade8 > 0) {
            document.getElementById('item8').style.opacity = "1"
            document.getElementById('item8').style.cursor = "pointer"
            temItem8 = 1
        } else {
            document.getElementById('item8').style.opacity = "0.2"
            document.getElementById('item8').style.cursor = "default"
            temItem8 = 0
        }
        document.getElementById('queijoGouda').title = "Queijo Godua: "+ quantidade8 +" UND"
        
        if (quantidade9 > 0) {
            document.getElementById('item9').style.opacity = "1"
            document.getElementById('item9').style.cursor = "pointer"
            temItem9 = 1
        } else {
            document.getElementById('item9').style.opacity = "0.2"
            document.getElementById('item9').style.cursor = "default"
            temItem9 = 0
        }
        document.getElementById('fatiasDeQueijo').title = "Fatias de Queijo: "+ quantidade9 +" UND"
        
        if (quantidade10 > 0) {
            document.getElementById('item10').style.opacity = "1"
            document.getElementById('item10').style.cursor = "pointer"
            temItem10 = 1
        } else {
            document.getElementById('item10').style.opacity = "0.2"
            document.getElementById('item10').style.cursor = "default"
            temItem10 = 0
        }
        document.getElementById('pao').title = "Pão: "+ quantidade10 +" UND"
        
        if (quantidade11 > 0) {
            document.getElementById('item11').style.opacity = "1"
            document.getElementById('item11').style.cursor = "pointer"
            temItem11 = 1
        } else {
            document.getElementById('item11').style.opacity = "0.2"
            document.getElementById('item11').style.cursor = "default"
            temItem11 = 0
        }
        document.getElementById('boloDeMorango').title = "Bolo de Morango: "+ quantidade11 +" UND"
        
        if (quantidade12 > 0) {
            document.getElementById('item12').style.opacity = "1"
            document.getElementById('item12').style.cursor = "pointer"
            temItem12 = 1
        } else {
            document.getElementById('item12').style.opacity = "0.2"
            document.getElementById('item12').style.cursor = "default"
            temItem12 = 0
        }
        document.getElementById('boloDeChocolate').title = "Bolo de Chocolate: "+ quantidade12 +" UND"
        
        if (quantidade13 > 0) {
            document.getElementById('item13').style.opacity = "1"
            document.getElementById('item13').style.cursor = "pointer"
            temItem13 = 1
        } else {
            document.getElementById('item13').style.opacity = "0.2"
            document.getElementById('item13').style.cursor = "default"
            temItem13 = 0
        }
        document.getElementById('leite').title = "Leite: "+ quantidade13 +" UND"
        
        if (quantidade14 > 0) {
            document.getElementById('item14').style.opacity = "1"
            document.getElementById('item14').style.cursor = "pointer"
            temItem14 = 1
        } else {
            document.getElementById('item14').style.opacity = "0.2"
            document.getElementById('item14').style.cursor = "default"
            temItem14 = 0
        }
        document.getElementById('lataDeAtum').title = "Lata de Atum: "+ quantidade14 +" UND"
        
        if (quantidade15 > 0) {
            document.getElementById('item15').style.opacity = "1"
            document.getElementById('item15').style.cursor = "pointer"
            temItem15 = 1
        } else {
            document.getElementById('item15').style.opacity = "0.2"
            document.getElementById('item15').style.cursor = "default"
            temItem15 = 0
        }
        document.getElementById('espaguete').title = "Espaguete: "+ quantidade15 +" UND"
        
        if (quantidade16 > 0) {
            document.getElementById('item16').style.opacity = "1"
            document.getElementById('item16').style.cursor = "pointer"
            temItem16 = 1
        } else {
            document.getElementById('item16').style.opacity = "0.2"
            document.getElementById('item16').style.cursor = "default"
            temItem16 = 0
        }
        document.getElementById('sopaDeTomate').title = "Sopa de Tomate: "+ quantidade16 +" UND"
        
        if (quantidade17 > 0) {
            document.getElementById('item17').style.opacity = "1"
            document.getElementById('item17').style.cursor = "pointer"
            temItem17 = 1
        } else {
            document.getElementById('item17').style.opacity = "0.2"
            document.getElementById('item17').style.cursor = "default"
            temItem17 = 0
        }
        document.getElementById('almondegas').title = "Almôndegas: "+ quantidade17 +" UND"
        
        if (quantidade18 > 0) {
            document.getElementById('item18').style.opacity = "1"
            document.getElementById('item18').style.cursor = "pointer"
            temItem18 = 1
        } else {
            document.getElementById('item18').style.opacity = "0.2"
            document.getElementById('item18').style.cursor = "default"
            temItem18 = 0
        }
        document.getElementById('polpaDeManga').title = "Polpa de Manga: "+ quantidade18 +" UND"
        
        if (quantidade19 > 0) {
            document.getElementById('item19').style.opacity = "1"
            document.getElementById('item19').style.cursor = "pointer"
            temItem19 = 1
        } else {
            document.getElementById('item19').style.opacity = "0.2"
            document.getElementById('item19').style.cursor = "default"
            temItem19 = 0
        }
        document.getElementById('presunto').title = "Presunto: "+ quantidade19 +" UND"
        
        if (quantidade20 > 0) {
            document.getElementById('item20').style.opacity = "1"
            document.getElementById('item20').style.cursor = "pointer"
            temItem20 = 1
        } else {
            document.getElementById('item20').style.opacity = "0.2"
            document.getElementById('item20').style.cursor = "default"
            temItem20 = 0
        }
        document.getElementById('brocolis').title = "Brócolis: "+ quantidade20 +" UND"
        
        if (quantidade21 > 0) {
            document.getElementById('item21').style.opacity = "1"
            document.getElementById('item21').style.cursor = "pointer"
            temItem21 = 1
        } else {
            document.getElementById('item21').style.opacity = "0.2"
            document.getElementById('item21').style.cursor = "default"
            temItem21 = 0
        }
        document.getElementById('cenoura').title = "Cenoura: "+ quantidade21 +" UND"
        
        if (quantidade22 > 0) {
            document.getElementById('item22').style.opacity = "1"
            document.getElementById('item22').style.cursor = "pointer"
            temItem22 = 1
        } else {
            document.getElementById('item22').style.opacity = "0.2"
            document.getElementById('item22').style.cursor = "default"
            temItem22 = 0
        }
        document.getElementById('repolho').title = "Repolho: "+ quantidade22 +" UND"
        
        if (quantidade23 > 0) {
            document.getElementById('item23').style.opacity = "1"
            document.getElementById('item23').style.cursor = "pointer"
            temItem23 = 1
        } else {
            document.getElementById('item23').style.opacity = "0.2"
            document.getElementById('item23').style.cursor = "default"
            temItem23 = 0
        }3
        document.getElementById('maca').title = "Maça: "+ quantidade23 +" UND"
        
        if (quantidade24 > 0) {
            document.getElementById('item24').style.opacity = "1"
            document.getElementById('item24').style.cursor = "pointer"
            temItem24 = 1
        } else {
            document.getElementById('item24').style.opacity = "0.2"
            document.getElementById('item24').style.cursor = "default"
            temItem24 = 0
        }
        document.getElementById('laranja').title = "Laranja: "+ quantidade24 +" UND"
        
        if (quantidade25 > 0) {
            document.getElementById('item25').style.opacity = "1"
            document.getElementById('item25').style.cursor = "pointer"
            temItem25 = 1
        } else {
            document.getElementById('item25').style.opacity = "0.2"
            document.getElementById('item25').style.cursor = "default"
            temItem25 = 0
        }
        document.getElementById('cachoDeUvas').title = "Cacho de Uvas: "+ quantidade25 +" UND"
        
        if (quantidade26 > 0) {
            document.getElementById('item26').style.opacity = "1"
            document.getElementById('item26').style.cursor = "pointer"
            temItem26 = 1
        } else {
            document.getElementById('item26').style.opacity = "0.2"
            document.getElementById('item26').style.cursor = "default"
            temItem26 = 0
        }
        document.getElementById('agua').title = "Água: "+ quantidade26 +" UND"
        
        if (quantidade27 > 0) {
            document.getElementById('item27').style.opacity = "1"
            document.getElementById('item27').style.cursor = "pointer"
            temItem27 = 1
        } else {
            document.getElementById('item27').style.opacity = "0.2"
            document.getElementById('item27').style.cursor = "default"
            temItem27 = 0
        }
        document.getElementById('refrigerante').title = "Refrigerante: "+ quantidade27 +" UND"

    }

    function abrirTampaGeladeira() {
        document.getElementById('tampaGeladeira').style.display = "none"
    }

    function fecharGeladeira() {
        document.getElementById('geladeira').style.display = "none";
        document.getElementById('cozinhaFundo').style.opacity = "1";
        document.getElementById('principaisCoisas').style.opacity = "1";

        document.getElementById('geladeiraHover').style.display = "block"
        document.getElementById('fogaoHover').style.display = "block"
        document.getElementById('microondasHover').style.display = "block"
        document.getElementById('mudarDeCenario').style.display = "flex"
        
        const geladeiraHover = document.querySelector('#geladeiraHover');

        geladeiraHover.addEventListener('mouseenter', () => {
            geladeiraHover.style.opacity = "1";
        })
        geladeiraHover.addEventListener('mouseleave', () => {
            geladeiraHover.style.opacity = "0";
        });

        const fogaoHover = document.querySelector('#fogaoHover');

        fogaoHover.addEventListener('mouseenter', () => {
        fogaoHover.style.opacity = "1";
        })
        fogaoHover.addEventListener('mouseleave', () => {
        fogaoHover.style.opacity = "0";
        });  

        const microondasHover = document.querySelector('#microondasHover');

        microondasHover.addEventListener('mouseenter', () => {
            microondasHover.style.opacity = "1";
        })
        microondasHover.addEventListener('mouseleave', () => {
            microondasHover.style.opacity = "0";
        }); 

        document.getElementById('opcaoComerItem1').style.display = "none"
        document.getElementById('opcaoComerItem2').style.display = "none"
        document.getElementById('opcaoComerItem3').style.display = "none"
        document.getElementById('opcaoComerItem4').style.display = "none"
        document.getElementById('opcaoComerItem5').style.display = "none"
        document.getElementById('opcaoComerItem6').style.display = "none"
        document.getElementById('opcaoComerItem7').style.display = "none"
        document.getElementById('opcaoComerItem8').style.display = "none"
        document.getElementById('opcaoComerItem9').style.display = "none"
        document.getElementById('opcaoComerItem10').style.display = "none"
        document.getElementById('opcaoComerItem11').style.display = "none"
        document.getElementById('opcaoComerItem12').style.display = "none"
        document.getElementById('opcaoComerItem13').style.display = "none"
        document.getElementById('opcaoComerItem14').style.display = "none"
        document.getElementById('opcaoComerItem15').style.display = "none"
        document.getElementById('opcaoComerItem16').style.display = "none"
        document.getElementById('opcaoComerItem17').style.display = "none"
        document.getElementById('opcaoComerItem18').style.display = "none"
        document.getElementById('opcaoComerItem19').style.display = "none"
        document.getElementById('opcaoComerItem20').style.display = "none"
        document.getElementById('opcaoComerItem21').style.display = "none"
        document.getElementById('opcaoComerItem22').style.display = "none"
        document.getElementById('opcaoComerItem23').style.display = "none"
        document.getElementById('opcaoComerItem24').style.display = "none"
        document.getElementById('opcaoComerItem25').style.display = "none"
        document.getElementById('opcaoComerItem26').style.display = "none"
        document.getElementById('opcaoComerItem27').style.display = "none"
    }

    /** Fogão */

    const fogaoHover = document.querySelector('#fogaoHover');

    fogaoHover.addEventListener('mouseenter', () => {
    fogaoHover.style.opacity = "1";
    })
    fogaoHover.addEventListener('mouseleave', () => {
    fogaoHover.style.opacity = "0";
    });


    /** Micro-ondas */

    const microondasHover = document.querySelector('#microondasHover');

    microondasHover.addEventListener('mouseenter', () => {
        microondasHover.style.opacity = "1";
    })
    microondasHover.addEventListener('mouseleave', () => {
        microondasHover.style.opacity = "0";
    });   

    /** Panela Eletrica */

    const panelaEletricaHover = document.querySelector('#panelaEletricaHover');

    panelaEletricaHover.addEventListener('mouseenter', () => {
        panelaEletricaHover.style.opacity = "1";
    })
    panelaEletricaHover.addEventListener('mouseleave', () => {
        panelaEletricaHover.style.opacity = "0";
    }); 

    }


    function receberLv() {

        const somMoeda = new Audio("EfeitosSonoros/Som moeda.m4a");
        somMoeda.play();
        document.getElementById('dinheiro').innerText = dinheiro
        document.getElementById('level').innerText = localStorage.getItem("levelUp");
        document.getElementById('mPorcentagemDeLevel').title = porcantagemLevel;
        document.getElementById('progressao').style.transform = localStorage.getItem("barraDeLevel");
        document.getElementById('levelUp').style.display = "none"

        receberMedalha()

        if (comodo == "Quarto") {
            document.getElementById('mostrarMedalha').src = medalha
        }

    }

    let entrega = 0

    setInterval(function() {
        
        if (entrega >= 1 && entrega <= 10) {    
            entrega++

            if(entrega == 6) {
                const somLevel = new Audio("EfeitosSonoros/Som i food.m4a");
                somLevel.play();
            }
            if(entrega == 10) {
                document.getElementById('sacolaDeCompras').style.display = "block"
            }
            

        }

    } , 1000);

    function expBasico() {
        if (c >= 0) {

            const somLevel = new Audio("EfeitosSonoros/Som Level Up.m4a");
            somLevel.play();

            c = -100

            if(level == 0) {
                level = 2
            }

            level++

            if (level == 10) {
                document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194053-removebg-preview.png"
            }
            if (level == 20) {
                document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194118-removebg-preview.png"
            }
            if (level == 30) {
                document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194127-removebg-preview.png"
            }
            if (level == 40) {
                document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194150-removebg-preview.png"
            }
            if (level == 50) {
                document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194216-removebg-preview.png"
            }
            if (level == 60) {
                document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194228-removebg-preview.png"
            }
            if (level == 70) {
                document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194312-removebg-preview.png"
            }
            if (level == 80) {
                document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194322-removebg-preview.png"
            }
            if (level == 90) {
                document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194358-removebg-preview.png"
            }
            if (level == 100) {
                document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194417-removebg-preview.png"
            }

            receberMedalha()

            dinheiro = dinheiro + ((level - 1) * 10)

            document.getElementById('novoNivel').innerText = level
            document.getElementById('maisMoedas').innerText = ((level - 1) * 10)

            localStorage.setItem("dinheiro", dinheiro);

            localStorage.setItem("levelUp", level.toString())

            let porcantagemLevelSoma = c + 100

            if(porcantagemLevelSoma == 100) {
                porcantagemLevelSoma = 99
            }

            porcantagemLevel = porcantagemLevelSoma.toString() + "%"

            localStorage.setItem("porcentagemLevel", porcantagemLevel)
            
            localStorage.setItem("progressaoDoLevel" , c.toString())

            const stringAumento = c.toString() + "%";

            const progressao = "translateX(" + stringAumento + ")";

            localStorage.setItem("barraDeLevel", progressao)

            document.getElementById('levelUp').style.display = "block"

        } else {
        
            if (c > -10) {
                c = 0
            } else {
                c = c + 10;
            }

            let porcantagemLevelSoma = c + 100

            if(porcantagemLevelSoma == 100) {
                porcantagemLevelSoma = 99
            }

            porcantagemLevel = porcantagemLevelSoma.toString() + "%"

            document.getElementById('mPorcentagemDeLevel').title = porcantagemLevel;

            localStorage.setItem("porcentagemLevel", porcantagemLevel)
            
            localStorage.setItem("progressaoDoLevel" , c.toString())

            const stringAumento = c.toString() + "%";

            const progressao = "translateX(" + stringAumento + ")";

            document.getElementById('progressao').style.transform = progressao;

            localStorage.setItem("barraDeLevel", progressao)
        }

        for (let i = 0; i < 10; i++) {
            
            if (contStatusFelicidade > 60 && contStatusFelicidade <= 100 && limiteFelicidade == 0) {

                if(statusFelicidaderGb >= 0 && statusFelicidaderGb <= 245) {
                    statusFelicidaderGb += 5
        
                    localStorage.setItem("statusFelicidaderGb", statusFelicidaderGb.toString())
                }
        
                --contStatusFelicidade
        
                let porcantagemFelicidadeSoma = contStatusFelicidade - 100 
        
                let convPorcentagemFelicidade = porcantagemFelicidadeSoma * -1
        
                if (contStatusFelicidade == 0) {
                    convPorcentagemFelicidade = 100
                }
        
                localStorage.setItem("convPorcentagemFelicidade", convPorcentagemFelicidade.toString())
        
                document.getElementById('mPorcentagemDaFelicidade').title = "Felicidade: "+ localStorage.getItem("convPorcentagemFelicidade") +"%"
        
                localStorage.setItem("contStatusFelicidade", contStatusFelicidade.toString())
        
                const StringTempFelicidade = contStatusFelicidade + "%"
        
                if (contStatusFelicidade < 25) {
            
                    if(statusFelicidadeRgb >= 10 && statusFelicidadeRgb <= 250) {
                        statusFelicidadeRgb -= 10
            
                        localStorage.setItem("statuFelicidadeRgb", statusFelicidadeRgb.toString())
                    }
        
                }
        
                    const porcentagemDaFelicidade = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempFelicidade +",rgb("+ statusFelicidadeRgb.toString() +","+ statusFelicidaderGb.toString() +", 0) 0%)"
        
                    localStorage.setItem("statusDeFelicidade", porcentagemDaFelicidade)
        
            }
            document.getElementById("felicidadeDoPet").style.background = localStorage.getItem("statusDeFelicidade")
        
            if (contStatusFelicidade >= 60) {
                localStorage.setItem("rostoStatus", "Imagens/Status/sad-face.png")
            } else {
                localStorage.setItem("rostoStatus", "Imagens/Status/happy-face.png")
            }
        
            document.getElementById("rostoStatus").src = localStorage.getItem("rostoStatus")
            
        }
    }

    function mudar() {

            if (c >= 0) {

                const somLevel = new Audio("EfeitosSonoros/Som Level Up.m4a");
                somLevel.play();

                c = -100

                if(level == 0) {
                    level = 2
                }

                level++

                if (level == 10) {
                    document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194053-removebg-preview.png"
                }
                if (level == 20) {
                    document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194118-removebg-preview.png"
                }
                if (level == 30) {
                    document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194127-removebg-preview.png"
                }
                if (level == 40) {
                    document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194150-removebg-preview.png"
                }
                if (level == 50) {
                    document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194216-removebg-preview.png"
                }
                if (level == 60) {
                    document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194228-removebg-preview.png"
                }
                if (level == 70) {
                    document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194312-removebg-preview.png"
                }
                if (level == 80) {
                    document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194322-removebg-preview.png"
                }
                if (level == 90) {
                    document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194358-removebg-preview.png"
                }
                if (level == 100) {
                    document.getElementById('medalha').src = "Imagens/Medalhas/Captura_de_tela_20230119_194417-removebg-preview.png"
                }

                receberMedalha()

                dinheiro = dinheiro + ((level - 1) * 10)

                document.getElementById('novoNivel').innerText = level
                document.getElementById('maisMoedas').innerText = ((level - 1) * 10)

                localStorage.setItem("dinheiro", dinheiro);

                localStorage.setItem("levelUp", level.toString())

                let porcantagemLevelSoma = c + 100

                if(porcantagemLevelSoma == 100) {
                    porcantagemLevelSoma = 99
                }

                porcantagemLevel = porcantagemLevelSoma.toString() + "%"

                localStorage.setItem("porcentagemLevel", porcantagemLevel)
                
                localStorage.setItem("progressaoDoLevel" , c.toString())

                const stringAumento = c.toString() + "%";

                const progressao = "translateX(" + stringAumento + ")";

                localStorage.setItem("barraDeLevel", progressao)

                document.getElementById('levelUp').style.display = "block"

            } else {
            
                if (c > -50) {
                    c = 0
                } else {
                    c = c + 50;
                }

                let porcantagemLevelSoma = c + 100

                if(porcantagemLevelSoma == 100) {
                    porcantagemLevelSoma = 99
                }

                porcantagemLevel = porcantagemLevelSoma.toString() + "%"

                document.getElementById('mPorcentagemDeLevel').title = porcantagemLevel;

                localStorage.setItem("porcentagemLevel", porcantagemLevel)
                
                localStorage.setItem("progressaoDoLevel" , c.toString())

                const stringAumento = c.toString() + "%";

                const progressao = "translateX(" + stringAumento + ")";

                document.getElementById('progressao').style.transform = progressao;

                localStorage.setItem("barraDeLevel", progressao)
            }

    }

    /**Status Energia */

    let limiteEnergia = 0

    /** Queda */

    setInterval(function() {
        
        if (contStatusEnergia >= 0 && contStatusEnergia < 100) {

            if(statusEnergiaRgb >= 0 && statusEnergiaRgb <= 245) {
                statusEnergiaRgb += 5

                localStorage.setItem("statusEnergiaRgb", statusEnergiaRgb.toString())
            }

            contStatusEnergia++

            let porcantagemEnergiaSoma = contStatusEnergia - 100 

            let convPorcentagemEnergia = porcantagemEnergiaSoma * -1

            if (contStatusEnergia == 0) {
                convPorcentagemEnergia = 100
            }

            localStorage.setItem("convPorcentagemEnergia", convPorcentagemEnergia.toString())

            document.getElementById('mPorcentagemDaEnergia').title = "Energia: "+ localStorage.getItem("convPorcentagemEnergia") +"%"

            localStorage.setItem("contStatusEnergia", contStatusEnergia.toString())

            const StringTempEnergia = contStatusEnergia + "%"

            if (contStatusEnergia > 65) {
                if(statusEnergiarGb >= 10 && statusEnergiarGb <= 250) {
                statusEnergiarGb -= 10

                localStorage.setItem("statusEnergiarGb", statusEnergiarGb.toString())
            }
            }

                const porcentagemDaEnergia = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempEnergia +",rgb("+ statusEnergiaRgb.toString() +","+ statusEnergiarGb.toString() +", 0) 0%)"

                localStorage.setItem("statusDeEnergia", porcentagemDaEnergia)

        }
        
        document.getElementById("energiaDoPet").style.background = localStorage.getItem("statusDeEnergia")

    } , 20000);

    /** Status de Saude */

    let limiteSaude = 0

    /** Queda */

    setInterval(function() {
        if (contStatusEnergia >= 100 || contStatusAlimentacao >= 100) {
        if (contStatusSaude >= 0 && contStatusSaude < 95) {

            if(statusSaudeRgb >= 0 && statusSaudeRgb <= 245) {
                statusSaudeRgb += 5

                localStorage.setItem("statusSaudeRgb", statusSaudeRgb.toString())
            }

            contStatusSaude++

            let porcantagemSaudeSoma = contStatusSaude - 100 

            let convPorcentagemSaude = porcantagemSaudeSoma * -1

            if (contStatusSaude == 0) {
                convPorcentagemSaude = 100
            }

            localStorage.setItem("convPorcentagemSaude", convPorcentagemSaude.toString())

            document.getElementById('mPorcentagemDaSaude').title = "Saúde: "+ localStorage.getItem("convPorcentagemSaude") +"%"

            localStorage.setItem("contStatusSaude", contStatusSaude.toString())

            const StringTempSaude = contStatusSaude + "%"

            if (contStatusSaude > 65) {
                if(statusSauderGb >= 10 && statusSauderGb <= 250) {
                statusSauderGb -= 10

                localStorage.setItem("statusSauderGb", statusSauderGb.toString())
            }
            }

                const porcentagemDaSaude = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempSaude +",rgb("+ statusSaudeRgb.toString() +","+ statusSauderGb.toString() +", 0) 0%)"

                localStorage.setItem("statusDeSaude", porcentagemDaSaude)

        }
        
        document.getElementById("saudeDoPet").style.background = localStorage.getItem("statusDeSaude")
        }

        if (contStatusSaude == 0) {
            limiteSaude = 1
        }
    } , 5000);

    /** Subida */

    setInterval(function() {
        if (contStatusEnergia <= 30 && contStatusAlimentacao <= 30) {
        if (contStatusSaude >= 1 && contStatusSaude <= 100 && limiteSaude == 0) {

            if(statusSauderGb >= 0 && statusSauderGb <= 245) {
                statusSauderGb += 5

                localStorage.setItem("statusSauderGb", statusSauderGb.toString())
            }

            --contStatusSaude

            let porcantagemSaudeSoma = contStatusSaude - 100 

            let convPorcentagemSaude = porcantagemSaudeSoma * -1

            if (contStatusSaude == 0) {
                convPorcentagemSaude = 100
            }

            localStorage.setItem("convPorcentagemSaude", convPorcentagemSaude.toString())

            document.getElementById('mPorcentagemDaSaude').title = "Saúde: "+ localStorage.getItem("convPorcentagemSaude") +"%"

            localStorage.setItem("contStatusSaude", contStatusSaude.toString())

            const StringTempSaude = contStatusSaude + "%"

            if (contStatusSaude < 25) {
        
                if(statusSaudeRgb >= 10 && statusSaudeRgb <= 250) {
                    statusSaudeRgb -= 10
        
                    localStorage.setItem("statusSaudeRgb", statusSaudeRgb.toString())
                }

            }

                const porcentagemDaSaude = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempSaude +",rgb("+ statusSaudeRgb.toString() +","+ statusSauderGb.toString() +", 0) 0%)"

                localStorage.setItem("statusDeSaude", porcentagemDaSaude)

        }
        document.getElementById("saudeDoPet").style.background = localStorage.getItem("statusDeSaude")
    }
    }, 1000);


    /** Status Alimentacao */

    let limiteAlimentacao = 0

    /** Queda */

    setInterval(function() {
        
        if (contStatusAlimentacao >= 0 && contStatusAlimentacao < 100) {

            if(statusAlimentacaoRgb >= 0 && statusAlimentacaoRgb <= 245) {
                statusAlimentacaoRgb += 5

                localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
            }

            contStatusAlimentacao++

            let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 

            let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1

            if (contStatusAlimentacao == 0) {
                convPorcentagemAlimentacao = 100
            }

            localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())

            document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentação: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"

            localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())

            const StringTempAlimentacao = contStatusAlimentacao + "%"

            if (contStatusAlimentacao > 65) {
                if(statusAlimentacaorGb >= 10 && statusAlimentacaorGb <= 250) {
                statusAlimentacaorGb -= 10

                localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
            }
            }

                const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao +",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"

                localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)

        }
        
        document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao")

    } , 10000);


    /** Status Inteligencia */



    /** Status Felicidade */

    let limiteFelicidade = 0

    /** Queda */

    setInterval(function() {
        if (contStatusEnergia >= 100 || contStatusAlimentacao >= 100) {
        if (contStatusFelicidade >= 0 && contStatusFelicidade < 100) {

            if(statusFelicidadeRgb >= 0 && statusFelicidadeRgb <= 245) {
                statusFelicidadeRgb += 5

                localStorage.setItem("statusFelicidadeRgb", statusFelicidadeRgb.toString())
            }

            contStatusFelicidade++

            let porcantagemFelicidadeSoma = contStatusFelicidade - 100 

            let convPorcentagemFelicidade = porcantagemFelicidadeSoma * -1

            if (contStatusFelicidade == 0) {
                convPorcentagemFelicidade = 100
            }

            localStorage.setItem("convPorcentagemFelicidade", convPorcentagemFelicidade.toString())

            document.getElementById('mPorcentagemDaFelicidade').title = "Felicidade: "+ localStorage.getItem("convPorcentagemFelicidade") +"%"

            localStorage.setItem("contStatusFelicidade", contStatusFelicidade.toString())

            const StringTempFelicidade = contStatusFelicidade + "%"

            if (contStatusFelicidade > 65) {
                if(statusFelicidaderGb >= 10 && statusFelicidaderGb <= 250) {
                statusFelicidaderGb -= 10

                localStorage.setItem("statusFelicidaderGb", statusFelicidaderGb.toString())
            }
            }

                const porcentagemDaFelicidade = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempFelicidade +",rgb("+ statusFelicidadeRgb.toString() +","+ statusFelicidaderGb.toString() +", 0) 0%)"

                localStorage.setItem("statusDeFelicidade", porcentagemDaFelicidade)

        }
        
        document.getElementById("felicidadeDoPet").style.background = localStorage.getItem("statusDeFelicidade")
        }
        
        if (contStatusFelicidade >= 60) {
            localStorage.setItem("rostoStatus", "Imagens/Status/sad-face.png")
        } else {
            localStorage.setItem("rostoStatus", "Imagens/Status/happy-face.png")
        }

        document.getElementById("rostoStatus").src = localStorage.getItem("rostoStatus") 

        if (contStatusFelicidade == 0) {
            limiteFelicidade = 1
        }
    } , 5000);

    /** Subida */

    setInterval(function() {
        /*alterar*/if (contStatusEnergia <= 30 && contStatusAlimentacao <= 30) {
        if (contStatusFelicidade > 60 && contStatusFelicidade <= 100 && limiteFelicidade == 0) {

            if(statusFelicidaderGb >= 0 && statusFelicidaderGb <= 245) {
                statusFelicidaderGb += 5

                localStorage.setItem("statusFelicidaderGb", statusFelicidaderGb.toString())
            }

            --contStatusFelicidade

            let porcantagemFelicidadeSoma = contStatusFelicidade - 100 

            let convPorcentagemFelicidade = porcantagemFelicidadeSoma * -1

            if (contStatusFelicidade == 0) {
                convPorcentagemFelicidade = 100
            }

            localStorage.setItem("convPorcentagemFelicidade", convPorcentagemFelicidade.toString())

            document.getElementById('mPorcentagemDaFelicidade').title = "Felicidade: "+ localStorage.getItem("convPorcentagemFelicidade") +"%"

            localStorage.setItem("contStatusFelicidade", contStatusFelicidade.toString())

            const StringTempFelicidade = contStatusFelicidade + "%"

            if (contStatusFelicidade < 25) {
        
                if(statusFelicidadeRgb >= 10 && statusFelicidadeRgb <= 250) {
                    statusFelicidadeRgb -= 10
        
                    localStorage.setItem("statuFelicidadeRgb", statusFelicidadeRgb.toString())
                }

            }

                const porcentagemDaFelicidade = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempFelicidade +",rgb("+ statusFelicidadeRgb.toString() +","+ statusFelicidaderGb.toString() +", 0) 0%)"

                localStorage.setItem("statusDeFelicidade", porcentagemDaFelicidade)

        }
        document.getElementById("felicidadeDoPet").style.background = localStorage.getItem("statusDeFelicidade")

        if (contStatusFelicidade >= 60) {
            localStorage.setItem("rostoStatus", "Imagens/Status/sad-face.png")
        } else {
            localStorage.setItem("rostoStatus", "Imagens/Status/happy-face.png")
        }

        document.getElementById("rostoStatus").src = localStorage.getItem("rostoStatus")    

    }
    }, 1000);

    /**Dormir */

    function dormir() {
        limiteEnergia = 0
        limiteSaude = 0
        limiteFelicidade = 0
        
            setInterval(function() {
        
            if (contStatusEnergia > 0 && contStatusEnergia <= 100 && limiteEnergia == 0) {

                document.getElementById('quartoFundo').style.opacity = "0.2"
                document.getElementById('mostrarMedalha').style.opacity = "0.2"
                document.getElementById('dinheiroDoPet').style.opacity = "0.2"
                document.getElementById('levelDoPet').style.opacity = "0.2"
        
                if(statusEnergiarGb >= 0 && statusEnergiarGb <= 245) {
                    statusEnergiarGb += 5
        
                    localStorage.setItem("statusEnergiarGb", statusEnergiarGb.toString())
                }

                if (contStatusEnergia < 25) {
                    
                    if(statusEnergiaRgb >= 10 && statusEnergiaRgb <= 250) {
                        statusEnergiaRgb -= 10
            
                        localStorage.setItem("statusEnergiaRgb", statusEnergiaRgb.toString())
                    }

                }
        
                --contStatusEnergia
                let porcantagemEnergiaSoma = contStatusEnergia - 100 
        
                let convPorcentagemEnergia = porcantagemEnergiaSoma * -1
        
                if (contStatusEnergia == 0) {
                    convPorcentagemEnergia = 100
                }
        
                localStorage.setItem("convPorcentagemEnergia", convPorcentagemEnergia.toString())
        
                document.getElementById('mPorcentagemDaEnergia').title = "Energia: "+ localStorage.getItem("convPorcentagemEnergia") +"%"
        
                localStorage.setItem("contStatusEnergia", contStatusEnergia.toString())
        
                const StringTempEnergia = contStatusEnergia + "%"
        
                if (contStatusEnergia <= 65) {
        
                    const porcentagemDaEnergia = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempEnergia +",rgb("+ statusEnergiaRgb.toString() +","+ statusEnergiarGb.toString() +", 0) 0%)"
        
                    localStorage.setItem("statusDeEnergia", porcentagemDaEnergia)
        
                }
        
            }

            document.getElementById("energiaDoPet").style.background = localStorage.getItem("statusDeEnergia")

            if (contStatusEnergia == 0) {
                limiteEnergia = 1

                document.getElementById('quartoFundo').style.opacity = "1"
                document.getElementById('mostrarMedalha').style.opacity = "1"
                document.getElementById('dinheiroDoPet').style.opacity = "1"
                document.getElementById('levelDoPet').style.opacity = "1"
            }
        } , 400);

        expBasico()
    }

    /** Loja */

    function abrirLoja() {
        document.getElementById('loja').style.display = "block"
        document.getElementById('cozinhaFundo').style.opacity = "0.5";
        document.getElementById('levelDoPet').style.opacity = "0.5";
        document.getElementById('statusDoPet').style.opacity = "0.5";
        document.getElementById('dinheiroDoPet').style.zIndex = "3"
        document.getElementById('mudarDeCenario').style.display = "none"

        document.getElementById('geladeiraHover').style.display = "none"
        document.getElementById('fogaoHover').style.display = "none"
        document.getElementById('microondasHover').style.display = "none"
    }

    function fecharLoja() {
        document.getElementById('loja').style.display = "none"
        document.getElementById('compraItem').style.display = "none"
        document.getElementById('precoSoma').innerText = 0
        document.getElementById('cozinhaFundo').style.opacity = "1";
        document.getElementById('levelDoPet').style.opacity = "1";
        document.getElementById('statusDoPet').style.opacity = "1";
        document.getElementById('mudarDeCenario').style.display = "flex"

        document.getElementById('geladeiraHover').style.display = "block"
        document.getElementById('fogaoHover').style.display = "block"
        document.getElementById('microondasHover').style.display = "block"

        const geladeiraHover = document.querySelector('#geladeiraHover');

        geladeiraHover.addEventListener('mouseenter', () => {
            geladeiraHover.style.opacity = "1";
        })
        geladeiraHover.addEventListener('mouseleave', () => {
            geladeiraHover.style.opacity = "0";
        });

        const fogaoHover = document.querySelector('#fogaoHover');

        fogaoHover.addEventListener('mouseenter', () => {
        fogaoHover.style.opacity = "1";
        })
        fogaoHover.addEventListener('mouseleave', () => {
        fogaoHover.style.opacity = "0";
        });  

        const microondasHover = document.querySelector('#microondasHover');

        microondasHover.addEventListener('mouseenter', () => {
            microondasHover.style.opacity = "1";
        })
        microondasHover.addEventListener('mouseleave', () => {
            microondasHover.style.opacity = "0";
        }); 
    }

    /** Itens da Loja */

    function mostrarAcougue() {
        document.getElementById('acougue').style.display = "grid"
        document.getElementById('bebidas').style.display = "none"
        document.getElementById('congelados').style.display = "none"
        document.getElementById('enlatados').style.display = "none"
        document.getElementById('hortifruti').style.display = "none"
        document.getElementById('laticinios').style.display = "none"
        document.getElementById('padaria').style.display = "none"
        document.getElementById('peixaria').style.display = "none"
    }

    function mostrarBebidas() {
        document.getElementById('acougue').style.display = "none"
        document.getElementById('bebidas').style.display = "grid"
        document.getElementById('congelados').style.display = "none"
        document.getElementById('enlatados').style.display = "none"
        document.getElementById('hortifruti').style.display = "none"
        document.getElementById('laticinios').style.display = "none"
        document.getElementById('padaria').style.display = "none"
        document.getElementById('peixaria').style.display = "none"
    }

    function mostrarCongelados() {
        document.getElementById('acougue').style.display = "none"
        document.getElementById('bebidas').style.display = "none"
        document.getElementById('congelados').style.display = "grid"
        document.getElementById('enlatados').style.display = "none"
        document.getElementById('hortifruti').style.display = "none"
        document.getElementById('laticinios').style.display = "none"
        document.getElementById('padaria').style.display = "none"
        document.getElementById('peixaria').style.display = "none"
    }

    function mostrarEnlatados() {
        document.getElementById('acougue').style.display = "none"
        document.getElementById('bebidas').style.display = "none"
        document.getElementById('congelados').style.display = "none"
        document.getElementById('enlatados').style.display = "grid"
        document.getElementById('hortifruti').style.display = "none"
        document.getElementById('laticinios').style.display = "none"
        document.getElementById('padaria').style.display = "none"
        document.getElementById('peixaria').style.display = "none"
    }

    function mostrarHortifruti() {
        document.getElementById('acougue').style.display = "none"
        document.getElementById('bebidas').style.display = "none"
        document.getElementById('congelados').style.display = "none"
        document.getElementById('enlatados').style.display = "none"
        document.getElementById('hortifruti').style.display = "grid"
        document.getElementById('laticinios').style.display = "none"
        document.getElementById('padaria').style.display = "none"
        document.getElementById('peixaria').style.display = "none"
    }

    function mostrarLaticinios() {
        document.getElementById('acougue').style.display = "none"
        document.getElementById('bebidas').style.display = "none"
        document.getElementById('congelados').style.display = "none"
        document.getElementById('enlatados').style.display = "none"
        document.getElementById('hortifruti').style.display = "none"
        document.getElementById('laticinios').style.display = "grid"
        document.getElementById('padaria').style.display = "none"
        document.getElementById('peixaria').style.display = "none"
    }

    function mostrarPadaria() {
        document.getElementById('acougue').style.display = "none"
        document.getElementById('bebidas').style.display = "none"
        document.getElementById('congelados').style.display = "none"
        document.getElementById('enlatados').style.display = "none"
        document.getElementById('hortifruti').style.display = "none"
        document.getElementById('laticinios').style.display = "none"
        document.getElementById('padaria').style.display = "grid"
        document.getElementById('peixaria').style.display = "none"
    }

    function mostrarPeixaria() {
        document.getElementById('acougue').style.display = "none"
        document.getElementById('bebidas').style.display = "none"
        document.getElementById('congelados').style.display = "none"
        document.getElementById('enlatados').style.display = "none"
        document.getElementById('hortifruti').style.display = "none"
        document.getElementById('laticinios').style.display = "none"
        document.getElementById('padaria').style.display = "none"
        document.getElementById('peixaria').style.display = "grid"
    }

    /** Compra de Itens */

    let nomeDoItem = ""
    let quantidadeDoItem = 0
    let precoDoItem = 0

    /** Acougue 1 */

    let quantidadeAcougue1 = 1

    function menosAcougue1() {
        if (quantidadeAcougue1 > 1) {
            --quantidadeAcougue1
            document.getElementById('quantidadeAcougue1').innerText = quantidadeAcougue1;
        }
    }

    function maisAcougue1() {
        quantidadeAcougue1++
        document.getElementById('quantidadeAcougue1').innerText = quantidadeAcougue1;
    }

    function comprarAcougue1() {

        const precoSoma = 55 * quantidadeAcougue1
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Coxa de Boi"
        quantidadeDoItem = quantidadeAcougue1
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeAcougue1 = 1
        document.getElementById('quantidadeAcougue1').innerText = quantidadeAcougue1;
    }

    /** Acougue 2 */

    let quantidadeAcougue2 = 1

    function menosAcougue2() {
        if (quantidadeAcougue2 > 1) {
            --quantidadeAcougue2
            document.getElementById('quantidadeAcougue2').innerText = quantidadeAcougue2;
        }
    }

    function maisAcougue2() {
        quantidadeAcougue2++
        document.getElementById('quantidadeAcougue2').innerText = quantidadeAcougue2;
    }

    function comprarAcougue2() {

        const precoSoma = 5 * quantidadeAcougue2
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Cubos de Carne"
        quantidadeDoItem = quantidadeAcougue2
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeAcougue2 = 1
        document.getElementById('quantidadeAcougue2').innerText = quantidadeAcougue2;
    }

    /** Bebida 1 */

    let quantidadeBebida1 = 1

    function menosBebida1() {
        if (quantidadeBebida1 > 1) {
            --quantidadeBebida1
            document.getElementById('quantidadeBebida1').innerText = quantidadeBebida1;
        }
    }

    function maisBebida1() {
        quantidadeBebida1++
        document.getElementById('quantidadeBebida1').innerText = quantidadeBebida1;
    }

    function comprarBebida1() {

        const precoSoma = 0.50 * quantidadeBebida1
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Agua"
        quantidadeDoItem = quantidadeBebida1
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeBebida1 = 1
        document.getElementById('quantidadeBebida1').innerText = quantidadeBebida1;
    }

    /** Bebida 2 */

    let quantidadeBebida2 = 1

    function menosBebida2() {
        if (quantidadeBebida2 > 1) {
            --quantidadeBebida2
            document.getElementById('quantidadeBebida2').innerText = quantidadeBebida2;
        }
    }

    function maisBebida2() {
        quantidadeBebida2++
        document.getElementById('quantidadeBebida2').innerText = quantidadeBebida2;
    }

    function comprarBebida2() {

        const precoSoma = 9 * quantidadeBebida2
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Leite"
        quantidadeDoItem = quantidadeBebida2
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeBebida2 = 1
        document.getElementById('quantidadeBebida2').innerText = quantidadeBebida2;
    }

    /** Bebida 3 */

    let quantidadeBebida3 = 1

    function menosBebida3() {
        if (quantidadeBebida3 > 1) {
            --quantidadeBebida3
            document.getElementById('quantidadeBebida3').innerText = quantidadeBebida3;
        }
    }

    function maisBebida3() {
        quantidadeBebida3++
        document.getElementById('quantidadeBebida3').innerText = quantidadeBebida3;
    }

    function comprarBebida3() {

        const precoSoma = 5 * quantidadeBebida2
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Refrigerante"
        quantidadeDoItem = quantidadeBebida3
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeBebida3 = 1
        document.getElementById('quantidadeBebida3').innerText = quantidadeBebida3;
    }

    /** Congelados 1 */

    let quantidadeCongelado1 = 1

    function menosCongelado1() {
        if (quantidadeCongelado1 > 1) {
            --quantidadeCongelado1
            document.getElementById('quantidadeCongelado1').innerText = quantidadeCongelado1;
        }
    }

    function maisCongelado1() {
        quantidadeCongelado1++
        document.getElementById('quantidadeCongelado1').innerText = quantidadeCongelado1;
    }

    function comprarCongelado1() {

        const precoSoma = 20 * quantidadeCongelado1
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Sorvete de Blueberry"
        quantidadeDoItem = quantidadeCongelado1
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeCongelado1 = 1
        document.getElementById('quantidadeCongelado1').innerText = quantidadeCongelado1;
    }

    /** Congelados 2 */

    let quantidadeCongelado2 = 1

    function menosCongelado2() {
        if (quantidadeCongelado2 > 1) {
            --quantidadeCongelado2
            document.getElementById('quantidadeCongelado2').innerText = quantidadeCongelado2;
        }
    }

    function maisCongelado2() {
        quantidadeCongelado2++
        document.getElementById('quantidadeCongelado2').innerText = quantidadeCongelado2;
    }

    function comprarCongelado2() {

        const precoSoma = 20 * quantidadeCongelado2
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Sorvete de Strawberry"
        quantidadeDoItem = quantidadeCongelado2
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeCongelado2 = 1
        document.getElementById('quantidadeCongelado2').innerText = quantidadeCongelado2;
    }

    /** Enlatado 1 */

    let quantidadeEnlatado1 = 1

    function menosEnlatado1() {
        if (quantidadeEnlatado1 > 1) {
            --quantidadeEnlatado1
            document.getElementById('quantidadeEnlatado1').innerText = quantidadeEnlatado1;
        }
    }

    function maisEnlatado1() {
        quantidadeEnlatado1++
        document.getElementById('quantidadeEnlatado1').innerText = quantidadeEnlatado1;
    }

    function comprarEnlatado1() {

        const precoSoma = 6 * quantidadeEnlatado1
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Lata de Atum"
        quantidadeDoItem = quantidadeEnlatado1
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeEnlatado1 = 1
        document.getElementById('quantidadeEnlatado1').innerText = quantidadeEnlatado1;
    }

    /** Enlatado 2 */

    let quantidadeEnlatado2 = 1

    function menosEnlatado2() {
        if (quantidadeEnlatado2 > 1) {
            --quantidadeEnlatado2
            document.getElementById('quantidadeEnlatado2').innerText = quantidadeEnlatado2;
        }
    }

    function maisEnlatado2() {
        quantidadeEnlatado2++
        document.getElementById('quantidadeEnlatado2').innerText = quantidadeEnlatado2;
    }

    function comprarEnlatado2() {

        const precoSoma = 5 * quantidadeEnlatado2
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Polpa de Manga"
        quantidadeDoItem = quantidadeEnlatado2
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeEnlatado2 = 1
        document.getElementById('quantidadeEnlatado2').innerText = quantidadeEnlatado2;
    }

    /** Enlatado 3 */

    let quantidadeEnlatado3 = 1

    function menosEnlatado3() {
        if (quantidadeEnlatado3 > 1) {
            --quantidadeEnlatado3
            document.getElementById('quantidadeEnlatado3').innerText = quantidadeEnlatado3;
        }
    }

    function maisEnlatado3() {
        quantidadeEnlatado3++
        document.getElementById('quantidadeEnlatado3').innerText = quantidadeEnlatado3;
    }

    function comprarEnlatado3() {

        const precoSoma = 6 * quantidadeEnlatado3
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Espaguete"
        quantidadeDoItem = quantidadeEnlatado3
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeEnlatado3 = 1
        document.getElementById('quantidadeEnlatado3').innerText = quantidadeEnlatado3;
    }

    /** Enlatado 4 */

    let quantidadeEnlatado4 = 1

    function menosEnlatado4() {
        if (quantidadeEnlatado4 > 1) {
            --quantidadeEnlatado4
            document.getElementById('quantidadeEnlatado4').innerText = quantidadeEnlatado4;
        }
    }

    function maisEnlatado4() {
        quantidadeEnlatado4++
        document.getElementById('quantidadeEnlatado4').innerText = quantidadeEnlatado4;
    }

    function comprarEnlatado4() {

        const precoSoma = 5 * quantidadeEnlatado4
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Sopa de Tomate"
        quantidadeDoItem = quantidadeEnlatado4
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeEnlatado4 = 1
        document.getElementById('quantidadeEnlatado4').innerText = quantidadeEnlatado4;
    }

    /** Enlatado 5 */

    let quantidadeEnlatado5 = 1

    function menosEnlatado5() {
        if (quantidadeEnlatado5 > 1) {
            --quantidadeEnlatado5
            document.getElementById('quantidadeEnlatado5').innerText = quantidadeEnlatado5;
        }
    }

    function maisEnlatado5() {
        quantidadeEnlatado5++
        document.getElementById('quantidadeEnlatado5').innerText = quantidadeEnlatado5;
    }

    function comprarEnlatado5() {

        const precoSoma = 6 * quantidadeEnlatado5
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Almondegas"
        quantidadeDoItem = quantidadeEnlatado5
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeEnlatado5 = 1
        document.getElementById('quantidadeEnlatado5').innerText = quantidadeEnlatado5;
    }

    /** Enlatado 6 */

    let quantidadeEnlatado6 = 1

    function menosEnlatado6() {
        if (quantidadeEnlatado6 > 1) {
            --quantidadeEnlatado6
            document.getElementById('quantidadeEnlatado6').innerText = quantidadeEnlatado6;
        }
    }

    function maisEnlatado6() {
        quantidadeEnlatado6++
        document.getElementById('quantidadeEnlatado6').innerText = quantidadeEnlatado6;
    }

    function comprarEnlatado6() {

        const precoSoma = 6 * quantidadeEnlatado6
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Presunto"
        quantidadeDoItem = quantidadeEnlatado6
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeEnlatado6 = 1
        document.getElementById('quantidadeEnlatado6').innerText = quantidadeEnlatado6;
    }

    /** Hortifruti 1 */

    let quantidadeHortifruti1 = 1

    function menosHortifruti1() {
        if (quantidadeHortifruti1 > 1) {
            --quantidadeHortifruti1
            document.getElementById('quantidadeHortifruti1').innerText = quantidadeHortifruti1;
        }
    }

    function maisHortifruti1() {
        quantidadeHortifruti1++
        document.getElementById('quantidadeHortifruti1').innerText = quantidadeHortifruti1;
    }

    function comprarHortifruti1() {

        const precoSoma = 4 * quantidadeHortifruti1
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Brocolis"
        quantidadeDoItem = quantidadeHortifruti1
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeHortifruti1 = 1
        document.getElementById('quantidadeHortifruti1').innerText = quantidadeHortifruti1;
    }

    /** Hortifruti 2 */

    let quantidadeHortifruti2 = 1

    function menosHortifruti2() {
        if (quantidadeHortifruti2 > 1) {
            --quantidadeHortifruti2
            document.getElementById('quantidadeHortifruti2').innerText = quantidadeHortifruti2;
        }
    }

    function maisHortifruti2() {
        quantidadeHortifruti2++
        document.getElementById('quantidadeHortifruti2').innerText = quantidadeHortifruti2;
    }

    function comprarHortifruti2() {

        const precoSoma = 2.5 * quantidadeHortifruti2
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Maca"
        quantidadeDoItem = quantidadeHortifruti2
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeHortifruti2 = 1
        document.getElementById('quantidadeHortifruti2').innerText = quantidadeHortifruti2;
    }

    /** Hortifruti 3 */

    let quantidadeHortifruti3 = 1

    function menosHortifruti3() {
        if (quantidadeHortifruti3 > 1) {
            --quantidadeHortifruti3
            document.getElementById('quantidadeHortifruti3').innerText = quantidadeHortifruti3;
        }
    }

    function maisHortifruti3() {
        quantidadeHortifruti3++
        document.getElementById('quantidadeHortifruti3').innerText = quantidadeHortifruti3;
    }

    function comprarHortifruti3() {

        const precoSoma = 2.5 * quantidadeHortifruti3
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Laranja"
        quantidadeDoItem = quantidadeHortifruti3
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeHortifruti3 = 1
        document.getElementById('quantidadeHortifruti3').innerText = quantidadeHortifruti3;
    }

    /** Hortifruti 4 */

    let quantidadeHortifruti4 = 1

    function menosHortifruti4() {
        if (quantidadeHortifruti4 > 1) {
            --quantidadeHortifruti4
            document.getElementById('quantidadeHortifruti4').innerText = quantidadeHortifruti4;
        }
    }

    function maisHortifruti4() {
        quantidadeHortifruti4++
        document.getElementById('quantidadeHortifruti4').innerText = quantidadeHortifruti4;
    }

    function comprarHortifruti4() {

        const precoSoma = 4 * quantidadeHortifruti4
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Repolho"
        quantidadeDoItem = quantidadeHortifruti4
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeHortifruti4 = 1
        document.getElementById('quantidadeHortifruti4').innerText = quantidadeHortifruti4;
    }

    /** Hortifruti 5 */

    let quantidadeHortifruti5 = 1

    function menosHortifruti5() {
        if (quantidadeHortifruti5 > 1) {
            --quantidadeHortifruti5
            document.getElementById('quantidadeHortifruti5').innerText = quantidadeHortifruti5;
        }
    }

    function maisHortifruti5() {
        quantidadeHortifruti5++
        document.getElementById('quantidadeHortifruti5').innerText = quantidadeHortifruti5;
    }

    function comprarHortifruti5() {

        const precoSoma = 6 * quantidadeHortifruti5
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Cacho de Uvas"
        quantidadeDoItem = quantidadeHortifruti5
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeHortifruti5 = 1
        document.getElementById('quantidadeHortifruti5').innerText = quantidadeHortifruti5;
    }

    /** Hortifruti 6 */

    let quantidadeHortifruti6 = 1

    function menosHortifruti6() {
        if (quantidadeHortifruti6 > 1) {
            --quantidadeHortifruti6
            document.getElementById('quantidadeHortifruti6').innerText = quantidadeHortifruti6;
        }
    }

    function maisHortifruti6() {
        quantidadeHortifruti6++
        document.getElementById('quantidadeHortifruti6').innerText = quantidadeHortifruti6;
    }

    function comprarHortifruti6() {

        const precoSoma = 5 * quantidadeHortifruti6
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Cenoura"
        quantidadeDoItem = quantidadeHortifruti6
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeHortifruti6 = 1
        document.getElementById('quantidadeHortifruti6').innerText = quantidadeHortifruti6;
    }

    /** Laticinio 1 */

    let quantidadeLaticinio1 = 1

    function menosLaticinio1() {
        if (quantidadeLaticinio1 > 1) {
            --quantidadeLaticinio1
            document.getElementById('quantidadeLaticinio1').innerText = quantidadeLaticinio1;
        }
    }

    function maisLaticinio1() {
        quantidadeLaticinio1++
        document.getElementById('quantidadeLaticinio1').innerText = quantidadeLaticinio1;
    }

    function comprarLaticinio1() {

        const precoSoma = 10 * quantidadeLaticinio1
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Cubos de Queijo"
        quantidadeDoItem = quantidadeLaticinio1
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeLaticinio1 = 1
        document.getElementById('quantidadeLaticinio1').innerText = quantidadeLaticinio1;
    }

    /** Laticinio 2 */

    let quantidadeLaticinio2 = 1

    function menosLaticinio2() {
        if (quantidadeLaticinio2 > 1) {
            --quantidadeLaticinio2
            document.getElementById('quantidadeLaticinio2').innerText = quantidadeLaticinio2;
        }
    }

    function maisLaticinio2() {
        quantidadeLaticinio2++
        document.getElementById('quantidadeLaticinio2').innerText = quantidadeLaticinio2;
    }

    function comprarLaticinio2() {

        const precoSoma = 25 * quantidadeLaticinio2
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Queijo Gouda"
        quantidadeDoItem = quantidadeLaticinio2
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeLaticinio2 = 1
        document.getElementById('quantidadeLaticinio2').innerText = quantidadeLaticinio2;
    }

    /** Laticinio 3 */

    let quantidadeLaticinio3 = 1

    function menosLaticinio3() {
        if (quantidadeLaticinio3 > 1) {
            --quantidadeLaticinio3
            document.getElementById('quantidadeLaticinio3').innerText = quantidadeLaticinio3;
        }
    }

    function maisLaticinio3() {
        quantidadeLaticinio3++
        document.getElementById('quantidadeLaticinio3').innerText = quantidadeLaticinio3;
    }

    function comprarLaticinio3() {

        const precoSoma = 15 * quantidadeLaticinio3
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Fatias de Queijo"
        quantidadeDoItem = quantidadeLaticinio3
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadeLaticinio3 = 1
        document.getElementById('quantidadeLaticinio3').innerText = quantidadeLaticinio3;
    }

    /** Padaria 1 */

    let quantidadePadaria1 = 1

    function menosPadaria1() {
        if (quantidadePadaria1 > 1) {
            --quantidadePadaria1
            document.getElementById('quantidadePadaria1').innerText = quantidadePadaria1;
        }
    }

    function maisPadaria1() {
        quantidadePadaria1++
        document.getElementById('quantidadePadaria1').innerText = quantidadePadaria1;
    }

    function comprarPadaria1() {

        const precoSoma = 1 * quantidadePadaria1
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Pao"
        quantidadeDoItem = quantidadePadaria1
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadePadaria1 = 1
        document.getElementById('quantidadePadaria1').innerText = quantidadePadaria1;
    }

    /** Padaria 2 */

    let quantidadePadaria2 = 1

    function menosPadaria2() {
        if (quantidadePadaria2 > 1) {
            --quantidadePadaria2
            document.getElementById('quantidadePadaria2').innerText = quantidadePadaria2;
        }
    }

    function maisPadaria2() {
        quantidadePadaria2++
        document.getElementById('quantidadePadaria2').innerText = quantidadePadaria2;
    }

    function comprarPadaria2() {

        const precoSoma = 30 * quantidadePadaria2
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Bolo de Morango"
        quantidadeDoItem = quantidadePadaria2
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadePadaria2 = 1
        document.getElementById('quantidadePadaria2').innerText = quantidadePadaria2;
    }

    /** Padaria 3 */

    let quantidadePadaria3 = 1

    function menosPadaria3() {
        if (quantidadePadaria3 > 1) {
            --quantidadePadaria3
            document.getElementById('quantidadePadaria3').innerText = quantidadePadaria3;
        }
    }

    function maisPadaria3() {
        quantidadePadaria3++
        document.getElementById('quantidadePadaria3').innerText = quantidadePadaria3;
    }

    function comprarPadaria3() {

        const precoSoma = 30 * quantidadePadaria3
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Bolo de Chocolate"
        quantidadeDoItem = quantidadePadaria3
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadePadaria3 = 1
        document.getElementById('quantidadePadaria3').innerText = quantidadePadaria3;
    }

    /** Peixaria 1 */

    let quantidadePeixaria1 = 1

    function menosPeixaria1() {
        if (quantidadePeixaria1 > 1) {
            --quantidadePeixaria1
            document.getElementById('quantidadePeixaria1').innerText = quantidadePeixaria1;
        }
    }

    function maisPeixaria1() {
        quantidadePeixaria1++
        document.getElementById('quantidadePeixaria1').innerText = quantidadePeixaria1;
    }

    function comprarPeixaria1() {

        const precoSoma = 15 * quantidadePeixaria1
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Peixe"
        quantidadeDoItem = quantidadePeixaria1
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadePeixaria1 = 1
        document.getElementById('quantidadePeixaria1').innerText = quantidadePeixaria1;
    }

    /** Peixaria 2 */

    let quantidadePeixaria2 = 1

    function menosPeixaria2() {
        if (quantidadePeixaria2 > 1) {
            --quantidadePeixaria2
            document.getElementById('quantidadePeixaria2').innerText = quantidadePeixaria2;
        }
    }

    function maisPeixaria2() {
        quantidadePeixaria2++
        document.getElementById('quantidadePeixaria2').innerText = quantidadePeixaria2;
    }

    function comprarPeixaria2() {

        const precoSoma = 10 * quantidadePeixaria2
        
        document.getElementById('precoSoma').innerText = precoSoma

        nomeDoItem = "Sushi"
        quantidadeDoItem = quantidadePeixaria2
        precoDoItem = precoSoma
        
        if (precoSoma > dinheiro) {
            document.getElementById('compraAviso').style.display = "block"
        } else {
            document.getElementById('compraItem').style.display = "block";
        }

        quantidadePeixaria2 = 1
        document.getElementById('quantidadePeixaria2').innerText = quantidadePeixaria2;
    }

    /** Confirmar Compra */

    let nomesDosItens = []
    let quantidadesDosItens = []
    let precosDosItens = []

    function confirmarCompra() {

        pegarSacola = 1

        nomesDosItens.push(nomeDoItem)
        quantidadesDosItens.push(quantidadeDoItem)
        precosDosItens.push(precoDoItem)

        dinheiro -= precoDoItem

        document.getElementById('dinheiro').innerText = dinheiro

        localStorage.setItem("dinheiro", dinheiro.toString())

        nomeDoItem = ""
        quantidadeDoItem = 0
        precoDoItem = 0

        document.getElementById('quantidadeCongelado1').innerText = 1
        document.getElementById('compraItem').style.display = "none"
        document.getElementById('precoSoma').innerText = 0

        entrega = 1
    }

    /** Fechar Confirmacao de  Compra */

    function fecharConfirmarCompra() {
        document.getElementById('compraItem').style.display = "none"
        document.getElementById('precoSoma').innerText = 0
    }

    /** Fechar Aviso */

    function fecharAviso() {
        document.getElementById('compraAviso').style.display = "none"
    }

    let pegarSacola = 0

    /** Mostar Sacola */
    
    function mostrarSacola() {
        document.getElementById('sacola').style.display = "block"
        document.getElementById('cozinhaFundo').style.opacity = "0.5";
        document.getElementById('levelDoPet').style.opacity = "0.5";
        document.getElementById('statusDoPet').style.opacity = "0.5";
        document.getElementById('mudarDeCenario').style.display = "none"

        document.getElementById('geladeiraHover').style.display = "none"
        document.getElementById('fogaoHover').style.display = "none"
        document.getElementById('microondasHover').style.display = "none"

        table.innerHTML = ''

        table = document.createElement("table");
        table.classList.add("tabelaSacola");

        for (let i = 0; i < nomesDosItens.length; i++) {

            const tabelaRow = document.createElement("tr");

            const item = document.createElement("td");
            const quantidade = document.createElement("td");
            const preco = document.createElement("td");

            tabelaRow.appendChild(item);
            tabelaRow.appendChild(quantidade);
            tabelaRow.appendChild(preco);

            item.innerHTML = nomesDosItens[i];
            quantidade.innerHTML = quantidadesDosItens[i];
            preco.innerHTML = "R$" + precosDosItens[i];

            table.appendChild(tabelaRow);
            itensDaSacola.appendChild(table);

        }

    }

    /** Tabela Sacola */

    let itensDaSacola = document.getElementById('itensDaSacola');
    let table = document.createElement("table");
    table.classList.add("tabelaSacola");

    /** Fechar Sacola */

    function fecharSacola() {
        document.getElementById('sacola').style.display = "none"
        document.getElementById('cozinhaFundo').style.opacity = "1";
        document.getElementById('levelDoPet').style.opacity = "1";
        document.getElementById('statusDoPet').style.opacity = "1";
        document.getElementById('mudarDeCenario').style.display = "flex"

        document.getElementById('geladeiraHover').style.display = "block"
        document.getElementById('fogaoHover').style.display = "block"
        document.getElementById('microondasHover').style.display = "block"
        
        const geladeiraHover = document.querySelector('#geladeiraHover');

        geladeiraHover.addEventListener('mouseenter', () => {
            geladeiraHover.style.opacity = "1";
        })
        geladeiraHover.addEventListener('mouseleave', () => {
            geladeiraHover.style.opacity = "0";
        });

        const fogaoHover = document.querySelector('#fogaoHover');

        fogaoHover.addEventListener('mouseenter', () => {
        fogaoHover.style.opacity = "1";
        })
        fogaoHover.addEventListener('mouseleave', () => {
        fogaoHover.style.opacity = "0";
        });  

        const microondasHover = document.querySelector('#microondasHover');

        microondasHover.addEventListener('mouseenter', () => {
            microondasHover.style.opacity = "1";
        })
        microondasHover.addEventListener('mouseleave', () => {
            microondasHover.style.opacity = "0";
        }); 

    }

    /** Coletar Sacola */

    function coletarSacola() {

        document.getElementById('mudarDeCenario').style.display = "flex"

        for (let i = 0; i < nomesDosItens.length; i++) {
            
            if(nomesDosItens[i] == "Coxa de Boi") {

                quantidade1 += quantidadesDosItens[i]
                localStorage.setItem("quantidade1", quantidade1)
                document.getElementById('item1').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Cubos de Carne") {

                quantidade2 += quantidadesDosItens[i]
                localStorage.setItem("quantidade2", quantidade2)
                document.getElementById('item2').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Sushi") {

                quantidade3 += quantidadesDosItens[i]
                localStorage.setItem("quantidade3", quantidade3)
                document.getElementById('item3').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Peixe") {

                quantidade4 += quantidadesDosItens[i]
                localStorage.setItem("quantidade4", quantidade4)
                document.getElementById('item4').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Sorvete de Blueberry") {

                quantidade5 += quantidadesDosItens[i]
                localStorage.setItem("quantidade5", quantidade5)
                document.getElementById('item5').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Sorvete de Strawberry") {

                quantidade6 += quantidadesDosItens[i]
                localStorage.setItem("quantidade6", quantidade6)
                document.getElementById('item6').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Cubos de Queijo") {

                quantidade7 += quantidadesDosItens[i]
                localStorage.setItem("quantidade7", quantidade7)
                document.getElementById('item7').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Queijo Godua") {

                quantidade8 += quantidadesDosItens[i]
                localStorage.setItem("quantidade8", quantidade8)
                document.getElementById('item8').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Fatias de Queijo") {

                quantidade9 += quantidadesDosItens[i]
                localStorage.setItem("quantidade9", quantidade9)
                document.getElementById('item9').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Pao") {

                quantidade10 += quantidadesDosItens[i]
                localStorage.setItem("quantidade10", quantidade10)
                document.getElementById('item10').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Bolo de Morango") {

                quantidade11 += quantidadesDosItens[i]
                localStorage.setItem("quantidade11", quantidade11)
                document.getElementById('item11').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Bolo de Chocolate") {

                quantidade12 += quantidadesDosItens[i]
                localStorage.setItem("quantidade12", quantidade12)
                document.getElementById('item12').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Leite") {

                quantidade13 += quantidadesDosItens[i]
                localStorage.setItem("quantidade13", quantidade13)
                document.getElementById('item13').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Lata de Atum") {

                quantidade14 += quantidadesDosItens[i]
                localStorage.setItem("quantidade14", quantidade14)
                document.getElementById('item14').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Espaguete") {

                quantidade15 += quantidadesDosItens[i]
                localStorage.setItem("quantidade15", quantidade15)
                document.getElementById('item15').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Sopa de Tomate") {

                quantidade16 += quantidadesDosItens[i]
                localStorage.setItem("quantidade16", quantidade16)
                document.getElementById('item16').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Almondegas") {

                quantidade17 += quantidadesDosItens[i]
                localStorage.setItem("quantidade17", quantidade17)
                document.getElementById('item17').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Polpa de Manga") {

                quantidade18 += quantidadesDosItens[i]
                localStorage.setItem("quantidade18", quantidade18)
                document.getElementById('item18').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Presunto") {

                quantidade19 += quantidadesDosItens[i]
                localStorage.setItem("quantidade19", quantidade19)
                document.getElementById('item19').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Brocolis") {

                quantidade20 += quantidadesDosItens[i]
                localStorage.setItem("quantidade20", quantidade20)
                document.getElementById('item20').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Cenoura") {

                quantidade21 += quantidadesDosItens[i]
                localStorage.setItem("quantidade21", quantidade21)
                document.getElementById('item21').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Repolho") {

                quantidade22 += quantidadesDosItens[i]
                localStorage.setItem("quantidade22", quantidade22)
                document.getElementById('item22').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Maca") {

                quantidade23 += quantidadesDosItens[i]
                localStorage.setItem("quantidade23", quantidade23)
                document.getElementById('item23').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Laranja") {

                quantidade24 += quantidadesDosItens[i]
                localStorage.setItem("quantidade24", quantidade24)
                document.getElementById('item24').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Cacho de Uvas") {

                quantidade25 += quantidadesDosItens[i]
                localStorage.setItem("quantidade25", quantidade25)
                document.getElementById('item25').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Agua") {

                quantidade26 += quantidadesDosItens[i]
                localStorage.setItem("quantidade26", quantidade26)
                document.getElementById('item26').style.opacity = "1"

            }
            if(nomesDosItens[i] == "Refrigerante") {

                quantidade27 += quantidadesDosItens[i]
                localStorage.setItem("quantidade27", quantidade27)
                document.getElementById('item27').style.opacity = "1"

            }

        }

        document.getElementById('sacolaDeCompras').style.display = "none"
        fecharSacola()

        while(nomesDosItens.length > 0) {
            nomesDosItens.pop();
            quantidadesDosItens.pop();
            precosDosItens.pop();
        }

        pegarSacola = 0

    }

    /** Pegue as Compras */

    function fecharAviso2() {
        document.getElementById('avisoCompras').style.display = "none"
    }

    /** Ir pro Cozinha */

    function irPraCozinha() {
        location.href = "index.html"

        comodo = "Cozinha"
        localStorage.setItem("comodo", comodo)
    }

    /** Ir pro Quarto */

    pegarSacola = 0

    function irProQuarto() {

        if (comodo == "Cozinha") {
            if (pegarSacola == 1) {
                document.getElementById('avisoCompras').style.display = "block"
            } else {
                
                location.href = "quarto.html"
        
                comodo = "Quarto"
                localStorage.setItem("comodo", comodo)
        
            }
        } else {
            location.href = "quarto.html"

            comodo = "Quarto"
            localStorage.setItem("comodo", comodo)
        }  
    }

    if (comodo == "Quarto") {
        receberMedalha()
        document.getElementById('mostrarMedalha').src = medalha

        /** Monitor */

        let monitorLigado = 0

        if(monitorLigado == 0) {
            const monitorHover = document.querySelector('#monitorHover');

            monitorHover.addEventListener('mouseenter', () => {
                monitorHover.style.opacity = "1";
            })
            monitorHover.addEventListener('mouseleave', () => {
                monitorHover.style.opacity = "0";
            });
        }

        /** Navegar no Monitor */

        function mexerNoMonitor() {
            document.getElementById('monitor').style.display = "block"
            document.getElementById('mudarDeCenario').style.display = "none"
            document.getElementById('quartoFundo').style.opacity = "0.2"
            document.getElementById('mostrarMedalha').style.opacity = "0.2"
            document.getElementById('dinheiroDoPet').style.opacity = "0.2"
            document.getElementById('rgbMonitor').style.display = "block"
            document.getElementById('desligarMonitor').style.display = "block"
            camaOcupada = 1
        }
        function desligarMonitor() {
            document.getElementById('monitor').style.display = "none"
            document.getElementById('mudarDeCenario').style.display = "flex"
            document.getElementById('quartoFundo').style.opacity = "1"
            document.getElementById('mostrarMedalha').style.opacity = "1"
            document.getElementById('dinheiroDoPet').style.opacity = "1"
            document.getElementById('rgbMonitor').style.display = "none"
            document.getElementById('desligarMonitor').style.display = "none"
            camaOcupada = 0
        }

        /** Programas do Monitor */

        /** Programa 1 */

        /** Abrir Programa 1 */

        function abrirPrograma1() {
            document.getElementById('programa1').style.display = "block"
        }

        /** Pesquisar */

        function editando() {
            document.getElementById("pesquisa").classList.add("pesquisando");
          }
          
        function terminou() {
            document.getElementById("pesquisa").classList.remove("pesquisando");
        }

        function pesquisar() {
            let coisaPesquisada = document.getElementById('pesquisa').value

            location.href = "https://www."+ coisaPesquisada +".com"

            document.getElementById('pesquisa').value = ""
        }

        /** Fechar Programa 1 */

        function fecharPrograma1() {
            document.getElementById('programa1').style.display = "none"
        }

        /** Programa 2 */



        /** Programa 3 */

        function irProYouTube() {
            location.href = "https://www.youtube.com"
            for (let i = 0; i < 5; i++) {  
                expBasico()
                receberLv()
            }
            
        }


        /** Cama */

        let camaOcupada = 0

        if(camaOcupada == 0) {
            const camaHover = document.querySelector('#camaHover');

            camaHover.addEventListener('mouseenter', () => {
                camaHover.style.opacity = "1";
            })
            camaHover.addEventListener('mouseleave', () => {
                camaHover.style.opacity = "0";
            });
        }

    }

    /** Ir pro Banheiro */

    function irProBanheiro() {

        if (comodo == "Cozinha") {
            if (pegarSacola == 1) {
                document.getElementById('avisoCompras').style.display = "block"
            } else {
                location.href = "banheiro.html"
        
                comodo = "Banheiro"
                localStorage.setItem("comodo", comodo)
            }
        } else {
            location.href = "banheiro.html"

            comodo = "Banheiro"
            localStorage.setItem("comodo", comodo)
        }
    }

    if (comodo == "Banheiro") {
        document.getElementById('cenario').style.color = "black"

        let banheiraOcupada = 0

        if(banheiraOcupada == 0) {
            const banheiraHover = document.querySelector('#banheiraHover');

            banheiraHover.addEventListener('mouseenter', () => {
                banheiraHover.style.opacity = "1";
            })
            banheiraHover.addEventListener('mouseleave', () => {
                banheiraHover.style.opacity = "0";
            });
        }
        const vasoSanitarioHover = document.querySelector('#vasoSanitarioHover');

        vasoSanitarioHover.addEventListener('mouseenter', () => {
            vasoSanitarioHover.style.opacity = "1";
        })
        vasoSanitarioHover.addEventListener('mouseleave', () => {
            vasoSanitarioHover.style.opacity = "0";
        }); 

        /** Status Higiene */

        let limiteHigiene = 0

        function tomarBanho() {

            setInterval(function() {
        
                if (contStatusHigiene > 0 && contStatusHigiene <= 100 && limiteHigiene == 0) {
            
                    if(statusHigienerGb >= 0 && statusHigienerGb <= 245) {
                        statusHigienerGb += 5
            
                        localStorage.setItem("statusHigienerGb", statusHigienerGb.toString())
                    }
        
                    if (contStatusHigiene < 25) {
                        
                        if(statusHigieneRgb >= 10 && statusHigieneRgb <= 250) {
                            statusHigieneRgb -= 10
                
                            localStorage.setItem("statusHigieneRgb", statusEnergiaRgb.toString())
                        }
        
                    }
            
                    --contStatusHigiene
                    let porcantagemHigieneSoma = contStatusHigiene - 100 
            
                    let convPorcentagemHigiene = porcantagemHigieneSoma * -1
            
                    if (contStatusHigiene == 0) {
                        convPorcentagemHigiene = 100
                    }
            
                    localStorage.setItem("convPorcentagemHigiene", convPorcentagemHigiene.toString())
            
                    document.getElementById('mPorcentagemDaHigiene').title = "Higiene: "+ localStorage.getItem("convPorcentagemHigiene") +"%"
            
                    localStorage.setItem("contStatusHigiene", contStatusHigiene.toString())
            
                    const StringTempHigiene = contStatusHigiene + "%"
            
                    if (contStatusHigiene <= 65) {
            
                        const porcentagemDaHigiene = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempHigiene +",rgb("+ statusHigieneRgb.toString() +","+ statusHigienerGb.toString() +", 0) 0%)"
            
                        localStorage.setItem("statusDeHigiene", porcentagemDaHigiene)
            
                    }
            
                }
        
                document.getElementById("higieneDoPet").style.background = localStorage.getItem("statusDeHigiene")
        
                if (contStatusHigiene == 0) {
                    limiteHigiene = 1
                }
            } , 400);

        }

    }

    /** Ir pra Sala */

    function irPraSala() {

        if (comodo == "Cozinha") {
            if (pegarSacola == 1) {
                document.getElementById('avisoCompras').style.display = "block"
            } else {
                location.href = "sala.html"
        
                comodo = "Sala"
                localStorage.setItem("comodo", comodo)
            }
        } else {
            location.href = "sala.html"

            comodo = "Sala"
            localStorage.setItem("comodo", comodo)
        } 
    }
}

/** Jogo 1 */

let linhaNumero = 0

let palavraSorteada1 = "marte"

function checkEnter(event) {
    if (event.which === 13) {
        event.preventDefault();
        
        let palavra1 = palavraSorteada1        

        let letra1 = document.getElementById('letra1').value
        let letra2 = document.getElementById('letra2').value
        let letra3 = document.getElementById('letra3').value
        let letra4 = document.getElementById('letra4').value
        let letra5 = document.getElementById('letra5').value
      
        linhaNumero++
        document.getElementById('linha1input').style.order = linhaNumero

        if (linhaNumero == 1) {

            /** Letra 1 */
            document.getElementById('l2l1').style.background = "white"
            document.getElementById('l2l1').style.boxShadow = "none"
            if (letra1 == palavra1.slice(0, 1)) {
                document.getElementById('l2l1').style.color = "limegreen"
                document.getElementById('l2l1').style.border = "2px solid limegreen"
                palavra1 = "-" + palavra1.substring(1)
            } else {

                let min = 0
                let max = 1

                for (let i = 0; i < 4; i++) {
                    
                    if (letra1 == palavra1.slice(min, max)) {
                        document.getElementById('l2l2').style.color = "rgb(255, 223, 0)"
                        document.getElementById('l2l2').style.border = "2px solid rgb(255, 223, 0)"
                    }
                    min++
                    max++
                }
            }

            /** Letra 2 */
            document.getElementById('l2l2').style.background = "white"
            document.getElementById('l2l2').style.boxShadow = "none"
            if (letra2 == palavra1.slice(1, 2)) {
                document.getElementById('l2l2').style.color = "limegreen"
                document.getElementById('l2l2').style.border = "2px solid limegreen"
                palavra1 = "-" + palavra1.substring(2)
            } else {

                let min = 0
                let max = 1

                for (let i = 0; i < 4; i++) {
                    
                    if (letra2 == palavra1.slice(min, max)) {
                        document.getElementById('l2l2').style.color = "rgb(255, 223, 0)"
                        document.getElementById('l2l2').style.border = "2px solid rgb(255, 223, 0)"
                    }
                    min++
                    max++
                }
            }

            document.getElementById('l2l3').style.background = "white"
            document.getElementById('l2l3').style.boxShadow = "none"
            

            document.getElementById('l2l4').style.background = "white"
            document.getElementById('l2l4').style.boxShadow = "none"
    

            document.getElementById('l2l5').style.background = "white"
            document.getElementById('l2l5').style.boxShadow = "none"
            

            document.getElementById('l2l1').innerText = letra1
            document.getElementById('l2l2').innerText = letra2
            document.getElementById('l2l3').innerText = letra3
            document.getElementById('l2l4').innerText = letra4
            document.getElementById('l2l5').innerText = letra5
        }
        if (linhaNumero == 2) {
            document.getElementById('l3l1').innerText = letra1
            document.getElementById('l3l2').innerText = letra2
            document.getElementById('l3l3').innerText = letra3
            document.getElementById('l3l4').innerText = letra4
            document.getElementById('l3l5').innerText = letra5
        }

        document.getElementById('letra1').value = ""
        document.getElementById('letra2').value = ""
        document.getElementById('letra3').value = ""
        document.getElementById('letra4').value = ""
        document.getElementById('letra5').value = ""
    }
}

var letra1Limite = document.getElementById("letra1");
letra1Limite.addEventListener("input", function() {
  this.value = this.value.replace(/[^A-Za-z]/g, "");
});
var letra2Limite = document.getElementById("letra2");
letra2Limite.addEventListener("input", function() {
  this.value = this.value.replace(/[^A-Za-z]/g, "");
});
var letra3Limite = document.getElementById("letra3");
letra3Limite.addEventListener("input", function() {
  this.value = this.value.replace(/[^A-Za-z]/g, "");
});
var letra4Limite = document.getElementById("letra4");
letra4Limite.addEventListener("input", function() {
  this.value = this.value.replace(/[^A-Za-z]/g, "");
});
var letra5Limite = document.getElementById("letra5");
letra5Limite.addEventListener("input", function() {
  this.value = this.value.replace(/[^A-Za-z]/g, "");
});

function editandoWords1() {
    document.getElementById("letra1").classList.add("ativo");
}
function terminouWords1() {
    document.getElementById("letra1").classList.remove("ativo");
}  
function editandoWords2() {
    document.getElementById("letra2").classList.add("ativo");
}
function terminouWords2() {
    document.getElementById("letra2").classList.remove("ativo");
}  
function editandoWords3() {
    document.getElementById("letra3").classList.add("ativo");
}
function terminouWords3() {
    document.getElementById("letra3").classList.remove("ativo");
}  
function editandoWords4() {
    document.getElementById("letra4").classList.add("ativo");
}
function terminouWords4() {
    document.getElementById("letra4").classList.remove("ativo");
}  
function editandoWords5() {
    document.getElementById("letra5").classList.add("ativo");
}
function terminouWords5() {
    document.getElementById("letra5").classList.remove("ativo");
}  