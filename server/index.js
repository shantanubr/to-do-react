const express = require('express');
const { createTodo, updateTodo } = require('./types');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/todos', (req, res) => {
    
});

app.post('/create-todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }
    // put data in mongodb
});

app.put('/update-todo', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }
    // put data in mongodb
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});