const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}
function resetAll() {
  procrastinationPercent = 0;
  focusStreak = 0;
  isWorking = true;
  confettiGiven = false;
  lastActivity = Date.now();
  progressBar.style.width = "0%";
  switchToWorkingMode();

  trapActive = false;

  document.querySelectorAll('.trapBox').forEach(box => box.remove());
  boxCount = 0;

  complimentPopup.classList.remove('show');
}


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
document.getElementById("pledgeSubmitBtn").onclick = () => {
  const input = document.getElementById("pledgeInput").value.trim().toLowerCase();
  const modal = document.getElementById("pledgeModal");

  if (input === "i will stop procrastinating now.") {
    modal.style.display = "none";
    resetAll();
    alert("You are free... for now.");
  } else {
    alert("Incorrect. Try again.");
    for (let i = 0; i < 3; i++) createTrapBox();
  }
};
