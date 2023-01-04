
let c = parseFloat(localStorage.getItem("progressaoDoLevel"))
let level =  parseInt(localStorage.getItem("levelUp"))
let porcantagemLevel = parseFloat(localStorage.getItem("porcentagemLevel"))

if (localStorage.length > 0) {


} else {

    localStorage.setItem("porcentagemLevel", "0%")
    localStorage.setItem("levelUp", "1")
    localStorage.setItem("progressaoDoLevel" , "-100")
    localStorage.setItem("barraDeLevel", "translateX(-100%)")

}

document.getElementById('mostrarPorcentagemDeLevel').title = localStorage.getItem("porcentagemLevel");

document.getElementById('level').innerText = localStorage.getItem("levelUp");

document.getElementById('progressao').style.transform = localStorage.getItem("barraDeLevel");

function mudar() {

        if (c == 0) {

            if(level == 0) {
                level = 2
            }

            level++

            localStorage.setItem("levelUp", level.toString())

            document.getElementById('level').innerText = localStorage.getItem("levelUp");

            c = -100

            let porcantagemLevelSoma = c + 100

            if(porcantagemLevelSoma == 100) {
                porcantagemLevelSoma = 99
            }

            porcantagemLevel = porcantagemLevelSoma.toString() + "%"

            document.getElementById('mostrarPorcentagemDeLevel').title = porcantagemLevel;

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

            document.getElementById('mostrarPorcentagemDeLevel').title = porcantagemLevel;

            localStorage.setItem("porcentagemLevel", porcantagemLevel)
            
            localStorage.setItem("progressaoDoLevel" , c.toString())

            const stringAumento = c.toString() + "%";

            const progressao = "translateX(" + stringAumento + ")";

            document.getElementById('progressao').style.transform = progressao;

            localStorage.setItem("barraDeLevel", progressao)
        }

        
    
}
