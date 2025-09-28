const os = require("os");
const { exec } = require("child_process");

function monitorCPU() {
  setInterval(() => {
    const cpus = os.loadavg()[0];  // 1-minute load avg
    const cores = os.cpus().length;
    let  usagePercent = (cpus / cores) * 100;
    // usagePercent = 80   // restart server condition.
    console.log(`...CPU Usage: ${usagePercent.toFixed(2)}%`);

    if (usagePercent > 70) {
      console.log(" High CPU usage! Restarting server...");
      exec("pm2 restart all", (err, stdout, stderr) => {
        if (err) console.error(" Restart failed:", err);
        else console.log(" Server restarted successfully");
      });
    }
  }, 5000); // check every 5 sec
}

module.exports = monitorCPU;
