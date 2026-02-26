// const express = require('express');
// const app = express();
// const PORT = 3000;

// // This defines what happens when someone visits the main page ("/")
// app.get('/', (req, res) => {
//     res.send(`
//         <html>
//             <body style="font-family: sans-serif; text-align: center; padding-top: 50px;">
//                 <h1>Message received!</h1>
//                 <p>This content was served by your Node.js server.</p>
//             </body>
//         </html>
//     `);
// });

// app.listen(PORT, () => {
//     console.log(`Server is cruising at http://localhost:${PORT}`);
// });


const path = require('path');
const express = require('express');
const app = express();
// Use the port provided by the host, or default to 3000 for local testing
const PORT = process.env.PORT || 10000; 

app.get('/', (req, res) => {
    console.log("Someone just visited the Home page!");
    res.send('<h1>Server is Live!</h1>');
});

app.get('/hello/:name', (req, res) => {
    const userName = req.params.name;
    console.log(`Greeting sent to: ${userName}`);
    res.send(`<h1>Hello, ${userName}!</h1>`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// THIS PART IS CRUCIAL: It keeps the process running
app.listen(PORT, () => {
    console.log(`✅ Success! Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop it.');
});



// {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   }
