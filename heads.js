import { powerUps, displayPowerUp, setPrices, currentTotem  } from "./click.js";
const lavaBox = document.querySelector(".lava-box");

spawnHead();
function spawnHead (){
    let spawnLocation = Math.round (Math.random()*30);
    const head = document.createElement("img");
    let powerUp = Math.floor(Math.random()*5);
    head.classList.add("lava-box-head");
    head.style.left =(50+ spawnLocation) + "%";
    lavaBox.appendChild(head);
    head.addEventListener("click",()=>{
        switch(powerUp){
            case 0:
                powerUps.x2 = true;
                displayPowerUp(0,powerUps.x2Duration,"powerUps.x2");
            break;
            case 1:
                powerUps.x4 = true;
                displayPowerUp(1,powerUps.x4Duration,"powerUps.x4");
            break;
            case 2:
                powerUps.flashSale = true;
                setPrices(.5);
                displayPowerUp(2,powerUps.flashSaleDuration,"powerUps.flashSale");
            break;
            case 3:
                powerUps.temporaryTotemUpgrade = true;
                currentTotem++;
                displayPowerUp(3,powerUps.temporaryTotemUpgradeDuration,"powerUps.temporaryTotemUpgrade");
            break;
            case 4:
                powerUps.percent10 = true;
                setPrices(.1);
                displayPowerUp(4,powerUps.percent10Duration, "powerUps.percent10");
            break;
        }
        destroy(head);
    });
    descend(head)
}


function descend(head){
    setTimeout(() => {
        head.style.top = "30%";
    }, .01);
    setTimeout(()=>{
       destroy(head);
    }, 5000);
    
}

function destroy(head){
    lavaBox.removeChild(head);
    setTimeout(()=>{
        spawnHead();
      } , 60000);
}