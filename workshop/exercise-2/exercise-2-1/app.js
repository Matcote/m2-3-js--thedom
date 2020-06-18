// Preset values
const FROGS = 3;
let container = document.querySelector(".track");
// 1. Create for loop that makes use of FROGS to know how many lanes to create.

// 2. Create li

// 3. Create span and add it to the li

// 4. Assign an id to each lane

for (let i = 1; i < 4; i++) {
  let lane = document.createElement("li");
  lane.innerHTML = `<span>${i}</span>`;
  container.appendChild(lane);
  lane.id = `lane-${i}`;
}
let racers = [];
for (i = 0; i < FROGS; i++) {
  racers.push(frogStable[i]);
}
console.log(racers);
racers.forEach(function (frog, index) {
  let newFrog = document.createElement("span");
  newFrog.innerText = frog.number;
  newFrog.style.backgroundColor = frog.color;
  newFrog.classList.add("frog");
  racers[index].progress = 0;
  document.getElementById(`lane-${index + 1}`).appendChild(newFrog);
  //   let progress = document.createElement("span");
  //   progress.innerText = racers[index].progress;
  //   progress.id = `frogProg-${index + 1}`;
  //   document.getElementById(`lane-${index + 1}`).appendChild(progress);
});

const styles = document.createElement("link");
styles.rel = "stylesheet";
styles.href = "../assets/styles.css";
document.querySelector("head").appendChild(styles);

function racingFrog(obj, frogNumber) {
  let distance = Math.floor(Math.random() * 20);
  let time = Math.random() * 3000;
  let newFrog = document.querySelector(`#lane-${frogNumber} > .frog`);
  console.log(newFrog);

  let hop = setInterval(function () {
    if (obj.progress < 100) {
      obj.progress += distance;
      newFrog.style.left = `${obj.progress}%`;
    } else {
      console.log(`${obj.name} is done!`);
      clearInterval(hop);
    }
  }, time);
}

racingFrog(racers[0], 1);
racingFrog(racers[1], 2);
racingFrog(racers[2], 3);
