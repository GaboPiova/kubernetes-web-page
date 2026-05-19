
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { user, pass } = req.body;
    if (user === 'admin' && pass === '1234') {
        res.json({ status: 'ok' });
    } else {
        res.status(401).json({ status: 'error' });
    }
});

app.listen(3000, () => console.log('API running on port 3000'));
