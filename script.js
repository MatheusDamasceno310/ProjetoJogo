
let c = parseFloat(localStorage.getItem("progressaoDoLevel"))
let level =  parseInt(localStorage.getItem("levelUp"))
let dinheiro = parseFloat(localStorage.getItem("dinehiro"))
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


/** LocalStorage  */
if (localStorage.length > 0) {


} else {

    localStorage.setItem("porcentagemLevel", "0%")
    localStorage.setItem("levelUp", "1")
    localStorage.setItem("dinehiro", "0")
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

}

/** Status de Level */

document.getElementById('level').innerText = localStorage.getItem("levelUp");
document.getElementById('dinheiro').innerText = dinheiro;
document.getElementById('mPorcentagemDeLevel').title = localStorage.getItem("porcentagemLevel");
document.getElementById('progressao').style.transform = localStorage.getItem("barraDeLevel");

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

/** Cozinha Opaca */

function CozinhaOpacaY() {
    document.getElementById('cozinhaFundo').style.opacity = "0.5";
    document.getElementById('levelDoPet').style.opacity = "0.5";
    document.getElementById('statusDoPet').style.opacity = "0.5";
}
function CozinhaOpacaN() {
    document.getElementById('cozinhaFundo').style.opacity = "1";
    document.getElementById('levelDoPet').style.opacity = "1";
    document.getElementById('statusDoPet').style.opacity = "1";
}

/**Geladeira */

let geladeiraAberta = 0

if(geladeiraAberta == 0) {
    const geladeiraClick = document.querySelector('#geladeiraClick');

    geladeiraClick.addEventListener('mouseenter', () => {
        geladeiraClick.style.opacity = "1";
    })
    geladeiraClick.addEventListener('mouseleave', () => {
        geladeiraClick.style.opacity = "0";
    });
}
    

function abrirGeladeira() {
    document.getElementById('geladeira').style.display = "block";
    CozinhaOpacaY()

    document.getElementById('geladeiraClick').style.display = "none"
    geladeiraAberta = 1
}

function fecharGeladeira() {
    document.getElementById('geladeira').style.display = "none";
    CozinhaOpacaN()

    document.getElementById('geladeiraClick').style.display = "block"
    
    const geladeiraClick = document.querySelector('#geladeiraClick');

    geladeiraClick.addEventListener('mouseenter', () => {
        geladeiraClick.style.opacity = "1";
    })
    geladeiraClick.addEventListener('mouseleave', () => {
        geladeiraClick.style.opacity = "0";
    });
}

function mudar() {
        if (contStatusAlimentacao >= 10 && contStatusAlimentacao <= 100 ) {
        contStatusAlimentacao = contStatusAlimentacao - 10

        localStorage.setItem("contStatusAlimentacao", contStatusAlimentacao.toString())


        if(statusAlimentacaorGb >= 0 && statusAlimentacaorGb <= 200) {
            statusAlimentacaorGb += 50

            localStorage.setItem("statusAlimentacaorGb", statusAlimentacaorGb.toString())
        }

        if (contStatusAlimentacao < 25) {
            
            if(statusAlimentacaoRgb >= 100 && statusAlimentacaoRgb <= 250) {
                statusAlimentacaoRgb -= 100
    
                localStorage.setItem("statusAlimentacaoRgb", statusAlimentacaoRgb.toString())
            }

        }
        
    }

        if (c == 0) {

            if(level == 0) {
                level = 2
            }

            level++
            dinheiro = dinheiro + ((level - 1) * 10)

            document.getElementById('dinheiro').innerText = dinheiro

            localStorage.setItem("dinehiro", dinheiro);

            localStorage.setItem("levelUp", level.toString())

            document.getElementById('level').innerText = localStorage.getItem("levelUp");

            c = -100

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

        } else {
           
            c = c + 10;

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

} , 60000);

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
} , 1000);

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
}, 400);


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
} , 1000);

/** Subida */

setInterval(function() {
    if (contStatusEnergia <= 30 && contStatusAlimentacao <= 30) {
    if (contStatusFelicidade >= 1 && contStatusFelicidade <= 100 && limiteFelicidade == 0) {

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
}, 400);

/**Dormir */

function dormir() {
    limiteEnergia = 0
    limiteSaude = 0
    limiteFelicidade = 0

    if (contStatusEnergia >= 60) {
        setInterval(function() {
    
        if (contStatusEnergia > 0 && contStatusEnergia <= 100 && limiteEnergia == 0) {
    
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
    
            } else {

    
                const porcentagemDaEnergia = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempEnergia +",rgb("+ statusEnergiaRgb.toString() +","+ statusEnergiarGb.toString() +", 0) 0%)"
    
                localStorage.setItem("statusDeEnergia", porcentagemDaEnergia)
            }
    
        }

        document.getElementById("energiaDoPet").style.background = localStorage.getItem("statusDeEnergia")

        if (contStatusEnergia == 0) {
            limiteEnergia = 1
        }
    } , 200);
    }
    
}