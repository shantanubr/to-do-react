const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/todos', (req, res) => {
    
});

app.post('/create-todo', (req, res) => {

});

app.put('/update-todo', (req, res) => {

});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});