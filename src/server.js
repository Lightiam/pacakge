import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

// Sample endpoints
app.get('/', (req, res) => {
  res.json({
    service: 'LightRail NCE Dashboard',
    status: 'running',
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

app.get('/metrics', (req, res) => {
  res.json({
    cpu_usage: Math.random() * 100,
    memory_usage: Math.random() * 100,
    temperature: 45 + Math.random() * 30
  });
});

app.listen(PORT, () => {
  console.log(`✓ LightRail NCE Dashboard running on http://localhost:${PORT}`);
});
