const express = require('express');
const app = express();

// add home route
app.get('/', (req,res) => {
    res.send(`Today's topic will be classes.`)
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT} 🎹`)
})