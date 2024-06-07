let gameState = {
  strikes: 0,
  balls: 0,
  outs: 0,
  count: `${this.balls} balls & ${this.strikes} strikes`,
  runnersOnBase: 0,
  inning: 1,
  inTheZone: ['ball', 'strike'],
  resetCount: function () {
    (this.strikes = 0), (this.balls = 0);
  },
};

const hitTypes = {
  single: `single!`,
  double: `double!`,
  triple: `triple!`,
  inSideTheParkHomeRun: `Inside the park home run!`,
  soloHomeRun: `Solo home run!`,
  twoRunHomeRun: `Two run home run!`,
  threeRunHomeRun: `Three run home run!`,
  grandSlam: `Grand Slam!`
};

const pitchTypes = {
  fastball: `fastball`,
  twoSeamFastball: `Two seam fastball`,
  slider: `slider`,
  curveBall: `curveball`,
  changeUp: `changeup`,
  knuckleBall: `knuckleBall`,
  sweeper: `sweeper`,
  splitter: `splitter`,
  cutter: `cutter`,
}

const runnersOnBase = {
  first: `Runner on first`,
  second: `Runner on second`,
  third: `Runner on third`,
  firstAndSecond: `Runners on first and second`,
  firstAndThird: `Runners on first and third`,
  secondAndThird: `Runners on second and third`,
  basesLoaded: `bases loaded`,
};

let strikesDiv = document.getElementById("strikes");
let ballsDiv = document.getElementById("balls");
let countDiv = document.getElementById("count");
const throwPitchBtn = document.getElementById("throwPitch");
const homeScore = document.getElementById("homeScore");
const awayScore = document.getElementById("awayScore");
let outsDiv = document.getElementById("outs");
let runnersOn = document.getElementById("runnersOn");
let inningDiv = document.getElementById("inning");

const init = () => {
  strikesDiv.innerHTML = `Strikes: ${gameState.strikes}`;
  ballsDiv.innerHTML = `Balls: ${gameState.balls}`;
  countDiv.innerHTML = `Count: ${gameState.balls} balls & ${gameState.strikes} strikes`;
  runnersOn.innerHTML = `Runners on Base: ${gameState.runnersOnBase}`;
  inningDiv.innerHTML = `It is the top of ${gameState.inning}st inning`;
};

function shufflePitches(object) {
  let pitches = Object.keys(object);
  let pitch = object[pitches[Math.floor(Math.random() * pitches.length)]];
  console.log(pitch);
}




function throwPitch() {
  shufflePitches(pitchTypes);

  let inTheZone = ["ball", "strike"];
  let ballOrStrike = inTheZone[Math.floor(Math.random() * inTheZone.length)];
  if (ballOrStrike === "strike") {
    madeContact();
    gameState.strikes++;
    if (gameState.strikes === 3) {
      gameState.resetCount();
      console.log("YOURRREEE OUT!");
      gameState.outs++;
    }
  } else {
    console.log(`${pitchThrown} for a ball`);
    gameState.balls++;
    if (gameState.balls === 4) {
      gameState.resetCount();
      console.log("TAKE YOUR BASE!");
      gameState.runnersOnBase++;
    }
  }
  if (gameState.outs === 3) {
    gameState.outs = 0;
    gameState.runnersOnBase = 0;
  }
  init();
}

function madeContact() {
  let contact = [
    "single",
    "double",
    "triple",
    "hit-by-pitch",
    "ground ball",
    "fly ball",
  ];
  let hit = contact[Math.floor(Math.random() * contact.length)];
  switch (hit) {
    case contact[0]: //single
    case contact[3]: //hit by pitch
      console.log(hit);
      gameState.runnersOnBase++;
      gameState.resetCount();
      break;
    case contact[1]: //double
      console.log(hit);
      gameState.runnersOnBase++;
      gameState.resetCount();
      break;
    case contact[2]: //triple
      console.log(hit);
      gameState.runnersOnBase++;
      gameState.resetCount();
      break;
    case contact[4] || contact[5]: ///GB //FB
      console.log(hit);
      gameState.outs++;
      gameState.resetCount();
      break;
    default:
      break;
  }
}



throwPitchBtn.addEventListener("click", throwPitch);
init();