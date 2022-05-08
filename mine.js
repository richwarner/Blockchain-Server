let mining = true;
mine();

function startMining() {
  mining = true;
  mine();
}

function stopMining() {
  mining = false;
}

function mine() {
  if(!mining) return;

  console.log(`Mined block`);

  setTimeout(mine, 2500);
}

module.exports = {
  startMining,
  stopMining,
};