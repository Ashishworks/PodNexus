const express = require('express');
const app = express();

// Route example
app.get("/test", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
