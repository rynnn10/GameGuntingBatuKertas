class Start {
  constructor() {
    this.playerName = "ANDA🏆";
    this.botName = "BOT🤖";
    this.playerOption;
    this.botOption;
    this.winner = "";
  }

  get getBotOption() {
    return this.botOption;
  }

  set setBotOption(option) {
    this.botOption = option;
  }

  get getPlayerOption() {
    return this.playerOption;
  }

  set setPlayerOption(option) {
    this.playerOption = option;
  }

  botBrain() {
    const option = ["🖐", "✌", "✊"];
    const bot = option[Math.floor(Math.random() * option.length)];
    return bot;
  }

  winCalculation() {
    if (this.botOption == "🖐" && this.playerOption == "✌") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "🖐" && this.playerOption == "✊") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✌" && this.playerOption == "🖐") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✌" && this.playerOption == "✊") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✊" && this.playerOption == "🖐") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✊" && this.playerOption == "✌") {
      return (this.winner = this.botName);
    } else {
      return (this.winner = "SERI");
    }
  }

  matchResult() {
    if (this.winner != "SERI") {
      return `${this.winner} MENANG!`;
    } else {
      return `WAAA ${this.winner}, GAK ADA YG MENANG 🤪`;
    }
  }
}

function pickOption(params) {
  const start = new Start();
  start.setPlayerOption = params;
  start.setBotOption = start.botBrain();
  start.winCalculation();

  const backsound = document.getElementById("backsound");
  backsound.play();
  const inGame = document.getElementById("inGame");
  const result = document.getElementById("result");

  // Get audio elements
  const winSound = document.getElementById("winSound");
  const loseSound = document.getElementById("loseSound");
  const drawSound = document.getElementById("drawSound");

  // Reset in-game text
  inGame.textContent = "...";
  result.textContent = "...";

  setTimeout(() => {
    inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`;
    result.textContent = start.matchResult();

    // Play corresponding SFX based on the result
    if (start.winner === start.playerName) {
      winSound.play(); // Play win sound
    } else if (start.winner === start.botName) {
      loseSound.play(); // Play lose sound
    } else {
      drawSound.play(); // Play draw sound
    }
  }, 1500);
}

// Start backsound when the page loads
window.onload = function () {
  const backsound = document.getElementById("backsound");
  const winSound = document.getElementById("winSound");
  const loseSound = document.getElementById("loseSound");
  const drawSound = document.getElementById("drawSound");

  // Set semua audio menjadi mute
  backsound.muted = true;
  winSound.muted = true;
  loseSound.muted = true;
  drawSound.muted = true;
};

backsound.volume = 0.5; // Mengatur volume backsound ke 50%
winSound.volume = 0.7; // Mengatur volume SFX menang ke 70%

function toggleSound() {
  const soundButton = document.getElementById("soundButton");
  const muteButton = document.getElementById("muteButton");
  const backsound = document.getElementById("backsound");
  const winSound = document.getElementById("winSound");
  const loseSound = document.getElementById("loseSound");
  const drawSound = document.getElementById("drawSound");

  if (backsound.muted) {
    // Unmute semua suara
    backsound.muted = false;
    winSound.muted = false;
    loseSound.muted = false;
    drawSound.muted = false;
    backsound.play();
    soundButton.style.display = "inline";
    muteButton.style.display = "none";
  } else {
    // Mute semua suara
    backsound.muted = true;
    winSound.muted = true;
    loseSound.muted = true;
    drawSound.muted = true;

    soundButton.style.display = "none";
    muteButton.style.display = "inline";
  }
}
