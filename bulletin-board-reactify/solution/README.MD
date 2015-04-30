React Bulletin Board with Browserify and Reactify
=================================================
A simple Bulletin Board populated with little yellow notes from [Bacon Ipsum](http://baconipsum.com/).

Installing the Solution
-----------------------
The completed solution includes a build process with JSXHint, and Browserify.  It also includes an express server.

1. Install the grunt command line tool globally:

        $ npm install -g grunt-cli

2. Install the rest of the dependencies locally:

        $ npm install

Running The Solution
---------------------
This will run the completed Bulletin Bord Solution on [__port 3000__](http://localhost:3000).

1. From the __./solution__ folder in the terminal:

        $ npm start


Running the development environment (grunt with watches)
--------------------------------------------------------
This will start a server for the student workspace found int the start folder on [__port 4321__](http://localhost:4321).

1. From the __./solution__ folder in the terminal:

        $ npm run dev

Grunt Tasks
-----------

#### JSXHint
Runs JS Hint with support for JSX. react-tools is required.

        $ grunt hint

#### Building
Exports all CSS to __./dist/css/style.css__ and all Client Javascript to __.dist/js/main.js__

        $ grunt build

#### Default
Runs __grunt hint__ and __grunt build__.

        $ grunt
