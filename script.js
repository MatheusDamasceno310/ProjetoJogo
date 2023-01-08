
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
    
}
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
        if (contStatusEnergia >= 10 && contStatusEnergia <= 100 ) {
        contStatusEnergia = contStatusEnergia - 10

        localStorage.setItem("contStatusEnergia", contStatusEnergia.toString())


        if(statusEnergiarGb >= 0 && statusEnergiarGb <= 200) {
            statusEnergiarGb += 50

            localStorage.setItem("statusEnergiarGb", statusEnergiarGb.toString())
        }

        if (contStatusEnergia < 25) {
            
            if(statusEnergiaRgb >= 100 && statusEnergiaRgb <= 250) {
                statusEnergiaRgb -= 100
    
                localStorage.setItem("statusEnergiaRgb", statusEnergiaRgb.toString())
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

} , 200);

/** Status de Saude */

    setInterval(function() {
        if (contStatusEnergia >= 99) {
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
    } , 200);

let limiteSaude = 0

        setInterval(function() {
            if (contStatusEnergia <= 30) {
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
        }, 50);
    


/**Dormir */

let limiteEnergia = 0

function dormir() {
    limiteEnergia = 0
    limiteSaude = 0

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
    } , 50);
    }
    
}