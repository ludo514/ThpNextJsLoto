function test(){
    const name = document.getElementById('name')
    const firstName = document.getElementById('first_name')
    const email = document.getElementById('email')
    const number = document.getElementById('number')
    function verif() {
        if(name.value && firstName.value && /^[-+.\w]{7,30}@[-.\w]{1,20}\.[-.\w]{2,3}$/.test(email.value) && /(?<=\d) (?=\d)/.test(number.value)){
            return true
        }if(/^[-+.\w]{7,30}@[-.\w]{1,20}\.[-.\w]{2,3}$/.test(email.value) == false){
            alert("Erreur dans l'email")
            return false
        }if(/(?<=\d) (?=\d)/.test(number.value) ==  false){
            alert("Erreur dans le tirage")
            return false
        }else{
            return false
        }
    }
    if(verif()){
        //alert('name ' + name.value + 'prenom ' + firstName.value + 'email ' + email.value + 'nombre ' + number.value)
        let loto = tirage()
        
        const checkLoto = (lotoNumber) => {
            let player_tirage = playerTirageToInt(lotoNumber)
            let count = 0
            for (let i = 0; i < loto.length; i++) {
                if(player_tirage.includes(loto[i]) == true){
                    count++
                    if(count == 6){
                        alert("Vous avez gagnez")
                        break
                    }
                }else if(count < 6){
                    alert("Bravo vous avez perdu les nombres gagnant sont : " + loto + " nombre de chiffre trouver " + count)
                    break
                }
            }
        }
        checkLoto(number.value)
    }

}

function tirage(){
    let tab = []
    for (let i = 0; i < 6; i++) {
        tab.push(getRandomIntInclusive(1,49))
    }
    return tab
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function playerTirageToInt(tirage){
    tirage = tirage.split(" ")
    let tirageToInt = []
    let inter = ""
    for (let i = 0; i < tirage.length; i++){
        inter += tirage[i]
        if(inter.length === 2){
            tirageToInt.push(parseInt(inter))
            inter = ""
        }
        else{
            tirageToInt.push(parseInt(inter))
            inter = ""
        }
    }
    return tirageToInt
}
