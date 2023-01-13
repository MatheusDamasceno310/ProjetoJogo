
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

/** Geladeira */

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
    

function abrirGeladeira() {
    document.getElementById('geladeira').style.display = "block";
    document.getElementById('cozinhaFundo').style.opacity = "0.5";
    document.getElementById('alimentacaoDoPet').style.opacity = "1"

    document.getElementById('geladeiraHover').style.display = "none"
    geladeiraAberta = 1
}

function fecharGeladeira() {
    document.getElementById('geladeira').style.display = "none";
    document.getElementById('cozinhaFundo').style.opacity = "1";
    document.getElementById('principaisCoisas').style.opacity = "1";
    document.getElementById('tampaGeladeira').style.display = "block"

    document.getElementById('geladeiraHover').style.display = "block"
    
    const geladeiraHover = document.querySelector('#geladeiraHover');

    geladeiraHover.addEventListener('mouseenter', () => {
        geladeiraHover.style.opacity = "1";
    })
    geladeiraHover.addEventListener('mouseleave', () => {
        geladeiraHover.style.opacity = "0";
    });
}

function abrirTampaGeladeira() {
    document.getElementById('tampaGeladeira').style.display = "none"
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

function mudar() {

        if (contStatusAlimentacao >= 10 && contStatusAlimentacao <= 100 ) {
        contStatusAlimentacao = contStatusAlimentacao - 10

        let porcantagemAlimentacaoSoma = contStatusAlimentacao - 100 

        let convPorcentagemAlimentacao = porcantagemAlimentacaoSoma * -1

        if (contStatusAlimentacao == 0) {
            convPorcentagemAlimentacao = 100
        }

        localStorage.setItem("convPorcentagemAlimentacao", convPorcentagemAlimentacao.toString())

        document.getElementById('mPorcentagemDaAlimentacao').title = "Alimentação: "+ localStorage.getItem("convPorcentagemAlimentacao") +"%"

        const StringTempAlimentacao = contStatusAlimentacao + "%"

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

        const porcentagemDaAlimentacao = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempAlimentacao +",rgb("+ statusAlimentacaoRgb.toString() +","+ statusAlimentacaorGb.toString() +", 0) 0%)"

        localStorage.setItem("statusDeAlimentacao", porcentagemDaAlimentacao)

        document.getElementById("alimentacaoDoPet").style.background = localStorage.getItem("statusDeAlimentacao")
        
    }

        if (c == 0) {

            if(level == 0) {
                level = 2
            }

            level++
            dinheiro = dinheiro + ((level - 1) * 10)

            document.getElementById('dinheiro').innerText = dinheiro

            localStorage.setItem("dinheiro", dinheiro);

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

} , 5000);


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
} , 80);

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
}, 400);

/**Dormir */

function dormir() {
    limiteEnergia = 0
    limiteSaude = 0
    limiteFelicidade = 0

    if (contStatusEnergia >= 70) {
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

/** Loja */

function abrirLoja() {
    document.getElementById('loja').style.display = "block"
    document.getElementById('cozinhaFundo').style.opacity = "0.5";
    document.getElementById('levelDoPet').style.opacity = "0.5";
    document.getElementById('statusDoPet').style.opacity = "0.5";
    document.getElementById('dinheiroDoPet').style.zIndex = "3"
}

function fecharLoja() {
    document.getElementById('loja').style.display = "none"
    document.getElementById('compraItem').style.display = "none"
    document.getElementById('precoSoma').innerText = 0
    document.getElementById('cozinhaFundo').style.opacity = "1";
    document.getElementById('levelDoPet').style.opacity = "1";
    document.getElementById('statusDoPet').style.opacity = "1";
}

/** Itens da Loja */

function mostrarCongelados() {
    document.getElementById('congelados').style.display = "flex"
}

/** Compra de Itens */

let nomeDoItem = ""
let quantidadeDoItem = 0
let precoDoItem = 0

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

/** Confirmar Compra */

let nomesDosItens = []
let quantidadesDosItens = []
let precosDosItens = []

function confirmarCompra() {

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

/** Mostar Sacola */
 
function mostrarSacola() {
    document.getElementById('sacola').style.display = "block"
    document.getElementById('cozinhaFundo').style.opacity = "0.5";
    document.getElementById('levelDoPet').style.opacity = "0.5";
    document.getElementById('statusDoPet').style.opacity = "0.5";
    table.innerHTML = "";

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

const itensDaSacola = document.getElementById('itensDaSacola');
let table = document.createElement("table");
table.classList.add("tabelaSacola");

itensDaSacola.appendChild(table);

/** Fechar Sacola */

function fecharSacola() {
    document.getElementById('sacola').style.display = "none"
    document.getElementById('cozinhaFundo').style.opacity = "1";
    document.getElementById('levelDoPet').style.opacity = "1";
    document.getElementById('statusDoPet').style.opacity = "1";

    table.innerHTML = "";

}

