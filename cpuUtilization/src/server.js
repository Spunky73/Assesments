const dotenv = require("dotenv");
const connectDB = require("./config/db");
const monitorCPU = require("./config/monitor");

dotenv.config();

connectDB();

const app = require("./app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`...Server running on port ${PORT} \n Server running at http://localhost:${PORT}`);
});

// Start monitoring CPU
monitorCPU();
