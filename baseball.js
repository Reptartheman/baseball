let contact = [
  "single",
  "double",
  "triple",
  "walk",
  "hit-by-pitch",
  "ground ball",
  "fly ball",
];
let homeRuns = ["solo", "2-run", "3-run", "Grand Slam"];
let pitches = ["fastball", "changeup", "curveball", "slider"];
let strikes = 0;
let balls = 0;
let runnersOnBase = 0;
let outs = 0;
let count = `${balls} balls & ${strikes} strikes`;
let inTheZone = ["ball", "strike"];
let strikesDiv = document.getElementById("strikes");
let ballsDiv = document.getElementById("balls");
let countDiv = document.getElementById("count");
const throwPitchBtn = document.getElementById("throwPitch");
const homeScore = document.getElementById("homeScore");
const awayScore = document.getElementById("awayScore");
let outsDiv = document.getElementById("outs");
let runnersOn = document.getElementById("runnersOn");
let inning = 1;
let inningDiv = document.getElementById("inning");

strikesDiv.innerHTML = `Strikes: ${strikes}`;
ballsDiv.innerHTML = `Balls: ${balls}`;
countDiv.innerHTML = `Count: ${balls} balls & ${strikes} strikes`;
runnersOn.innerHTML = `Runners on Base: ${runnersOnBase}`;
inningDiv.innerHTML = `It is the top of ${inning}st inning`;



function throwPitch() {
  let pitchThrown = pitches[Math.floor(Math.random() * pitches.length)];
  let ballOrStrike = inTheZone[Math.floor(Math.random() * inTheZone.length)];
  if (ballOrStrike === "strike") {
    madeContact();
    strikes++;
    if (strikes === 3) {
      console.log("YOURRREEE OUT!");
      outs++;
      resetCount();
    }
  } else {
    console.log(`${pitchThrown} for a ball`);
    balls++;
    if (balls === 4) {
      console.log("TAKE YOUR BASE!");
      runnersOnBase++;
      resetCount();
    }
  }
  if (outs === 3) {
    outs = 0;
    runnersOnBase = 0;
  }

  
  strikesDiv.innerHTML = `Strikes: ${strikes}`;
  ballsDiv.innerHTML = `Balls: ${balls}`;
  countDiv.innerHTML = `Count: ${balls} balls & ${strikes} strikes`;
  outsDiv.innerHTML = `Outs: ${outs}`;
  runnersOn.innerHTML = `Runners on Base: ${runnersOnBase}`;
}

function resetCount() {
  strikes = 0;
  balls = 0;
}

function madeContact() {
  let hit = contact[Math.floor(Math.random() * contact.length)];
  switch (hit) {
    case contact[0]:
    case contact[3]:
    case contact[4]:
      resetCount();
      console.log(hit);
      runnersOnBase++;
      break;
    case contact[1]:
      resetCount();
      console.log(hit);
      runnersOnBase++;
      break;
    case contact[2]:
      resetCount();
      console.log(hit);
      runnersOnBase++;
      break;
    case contact[5] || contact[6]:
      resetCount();
      console.log(hit);
      outs++;
      break;
    default:
      break; 
  }
}

function upAtBat() {
  let atBatDiv = document.getElementById("upAtBat");
  
}



throwPitchBtn.addEventListener("click", throwPitch);

