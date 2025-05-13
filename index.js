// Import the necessary modules
const dash = require('dash');
const express = require('express');

// Define your Dash app
const app = dash();

// Define the layout of your Dash app using HTML-like syntax
app.layout = `
    <div>
        <h1>Hello Dash!</h1>
        <p>My Dash app is up and running.</p>
    </div>
`;

// Define the routes for your Dash app
app.route('/', (req, res) => {
    res.send(app.layout);
});

// Start the server
const server = express();
const PORT = process.env.PORT || 3000;
server.use(app.server);
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
