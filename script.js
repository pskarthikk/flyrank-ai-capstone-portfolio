const fields = {
  traffic: document.querySelector("#traffic"),
  clicks: document.querySelector("#clicks"),
  rank: document.querySelector("#rank"),
  age: document.querySelector("#age")
};
const outputs = {
  traffic: document.querySelector("#trafficOut"),
  clicks: document.querySelector("#clickOut"),
  rank: document.querySelector("#rankOut"),
  age: document.querySelector("#ageOut")
};
const scoreEl = document.querySelector("#score");
const priorityEl = document.querySelector("#priority");
const explainEl = document.querySelector("#explain");

function update(){
  const traffic = +fields.traffic.value;
  const clicks = +fields.clicks.value;
  const rank = +fields.rank.value;
  const age = +fields.age.value;

  outputs.traffic.textContent = `${traffic}%`;
  outputs.clicks.textContent = `${clicks}%`;
  outputs.rank.textContent = `${rank > 0 ? "+" : ""}${rank}`;
  outputs.age.textContent = `${age} mo`;

  // Transparent demonstration logic. It is deliberately NOT presented as the trained model.
  let score = 25;
  score += Math.max(0, -traffic) * 0.55;
  score += Math.max(0, -clicks) * 0.35;
  score += Math.max(0, rank) * 2.1;
  score += Math.max(0, age - 12) * 0.65;
  score = Math.max(0, Math.min(100, Math.round(score)));

  scoreEl.textContent = score;
  const priority = score >= 70 ? "High priority" : score >= 45 ? "Medium priority" : "Low priority";
  priorityEl.textContent = priority;
  explainEl.textContent =
    score >= 70 ? "The combination of declining traffic/clicks, worsening rank, and older content raises review priority." :
    score >= 45 ? "There are some warning signals, but the page is not yet in the highest-priority review group." :
    "The current signals are relatively stable; this page would sit lower in the review queue.";
}
Object.values(fields).forEach(el => el.addEventListener("input", update));
update();
