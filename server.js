const express = require('express');
const app = express();
const courses = [ /* array of course objects with title, image, etc. */ ];

app.get('/api/courses', (req, res) => res.json(courses));

app.listen(3000, () => console.log('Backend running on port 3000'));
