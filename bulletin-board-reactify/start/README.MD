Start Building Common JS Bulletin Board
=======================================
A simple Bulletin Board populated with little yellow notes from [Bacon Ipsum](http://baconipsum.com/).

Installation
------------

### Installing the Server Dependencies
The solution is partially built for us.  It already includes an __express__ server and a __grunt__ task for converting
the __./less/style.less__ into __./dist/css/style.css__

1. Install the grunt command line tool globally:

        $ npm install -g grunt-cli

2. Install the rest of the dependencies locally:

        $ npm install

### Running the server
This will run the server and open the browser to [__port 3000__](http://localhost:3000).  There is an __express__ file server
serving files from the __./dist__, distribution, folder.

1. From the __./start__ folder in the terminal:

        $ npm start

### Running the development environment (grunt with less watch)
This will run the server with watches on [__port 3000__](http://localhost:3000).  Changing source code will restart the server,
changing less code will create the css file from the less file.

1. From the __./start__ folder in the terminal:

        $ npm run dev



Project Steps
-------------

