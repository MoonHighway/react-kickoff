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

1. Reviewed Current Solution
    a. server --> app.js
    b. package.json
    c. Run the app
    d. look at the console error
    e. discuss goals
    f. Review grunt build task and show GruntFile
    g. discuss goals


2. Making Note and Board Modules
    a. Install react, jquery, and jquery-ui
    b. require() dependencies and export modules

3. Add JSX Hinting
    a. Add JSXHint instructions to GruntFile
    b. install grunt-jsxhint and react-tools
    c. Register task, grunt hint, add to build
    d. Test Hintint

4 Add Browserify
    a. Added Grunt options
    b. installed grunt-browserify and reactify
    c. added to build
    d. ran grunt build
    e. ran npm start

5. Add Grunt Watch
    a. Add watch code
    b. npm run dev

6. Adding Bootstrap
    a. npm install bootstrap
    b. link to boostratp.less
    c. run and view
    d. Move the fonts folder

