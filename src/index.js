const buttons = document.getElementsByClassName('btn');


let totalClicks = 0
let weaponDamage = 1
for (const btn of buttons) {
    let enemyHealth = 2
    btn.addEventListener('click', function onClick() {
    enemyHealth -= weaponDamage
    console.log(enemyHealth);
    totalClicks +=1
    let btr = getRandomArrayElement(buttons)
    if (totalClicks % 3 == 0){

        btr.textContent = 'tank'
     
    }

    if (enemyHealth <= 0){
        btn.textContent = 'dead'
    }

    });
  }

  function spawnUnits(){

  }

function getRandomArrayElement(arr){
    return arr[Math.floor(Math.random()*arr.length)]
 }