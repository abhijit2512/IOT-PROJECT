const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

let state = {
  lightOn: false,
  fanOn: false,
  temperature: 24,
};

// 🔁 Simulate automatic temperature change
setInterval(() => {
  const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
  state.temperature += change;
  if (state.temperature < 18) state.temperature = 18;
  if (state.temperature > 30) state.temperature = 30;
  console.log("New Temperature:", state.temperature);
}, 5000);

// 🌐 API Routes
app.get('/api/state', (req, res) => {
  res.json(state);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
