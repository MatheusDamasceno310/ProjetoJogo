
let c = parseFloat(localStorage.getItem("progressaoDoLevel"))
let level =  parseInt(localStorage.getItem("levelUp"))
let dinheiro = parseFloat(localStorage.getItem("dinehiro"))
let porcantagemLevel = parseFloat(localStorage.getItem("porcentagemLevel"))
let contStatusEnergia = parseFloat(localStorage.getItem("contStatusEnergia"))
let statusEnergiaRgb = parseFloat(localStorage.getItem("statusEnergiaRgb"))
let statusEnergiarGb = parseFloat(localStorage.getItem("statusEnergiarGb"))
let convPorcentagemEnergia = parseFloat(localStorage.getItem("convPorcentagemEnergia"))


if (localStorage.length > 0) {


} else {

    localStorage.setItem("porcentagemLevel", "0%")
    localStorage.setItem("levelUp", "1")
    localStorage.setItem("dinehiro", "0")
    localStorage.setItem("progressaoDoLevel" , "-100")
    localStorage.setItem("barraDeLevel", "translateX(-100%)")

    localStorage.setItem("contStatusEnergia", "0")
    localStorage.setItem("statusEnergiaRgb", "0")
    localStorage.setItem("statusEnergiarGb", "250")
    localStorage.setItem("statusDeEnergia", "linear-gradient(rgba(255, 255, 255, 0) 0%,rgb(0, 220, 0) 0%)")
    localStorage.setItem("convPorcentagemEnergia", "100")
    
}
document.getElementById('level').innerText = localStorage.getItem("levelUp");
document.getElementById('dinheiro').innerText = dinheiro;
document.getElementById('mPorcentagemDeLevel').title = localStorage.getItem("porcentagemLevel");
document.getElementById('progressao').style.transform = localStorage.getItem("barraDeLevel");


document.getElementById('mPorcentagemDaEnergia').title = "Energia: "+ localStorage.getItem("convPorcentagemEnergia") +"%";

document.getElementById("energiaDoPet").style.background = localStorage.getItem("statusDeEnergia")

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

    document.getElementById('geladeiraClick').style.display = "none"
    geladeiraAberta = 1
}
function fecharGeladeira() {
    document.getElementById('geladeira').style.display = "none";

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

        if (contStatusEnergia <= 65) {

            const porcentagemDaEnergia = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempEnergia +",rgb("+ statusEnergiaRgb.toString() +","+ statusEnergiarGb.toString() +", 0) 0%)"

            localStorage.setItem("statusDeEnergia", porcentagemDaEnergia)

        } else {

            if(statusEnergiarGb >= 10 && statusEnergiarGb <= 250) {
                statusEnergiarGb -= 10
    
                localStorage.setItem("statusEnergiarGb", statusEnergiarGb.toString())
            }

            const porcentagemDaEnergia = "linear-gradient(rgba(255, 255, 255, 0) "+ StringTempEnergia +",rgb("+ statusEnergiaRgb.toString() +","+ statusEnergiarGb.toString() +", 0) 0%)"

            localStorage.setItem("statusDeEnergia", porcentagemDaEnergia)
        }

    }
    
    document.getElementById("energiaDoPet").style.background = localStorage.getItem("statusDeEnergia")

} , 500);

/**Status de Energia Zerado */

/**Dormir */

let limiteEnergia = 0

function dormir() {
    limiteEnergia = 0

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

    } , 100);
    }
    


}