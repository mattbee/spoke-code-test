# Spoke Law Front End Code Test

Coding test for Spoke Law front end developer position.

## Requirements

Project required [Node](https://nodejs.org/en/), [gulp](http://gulpjs.com/) and [npm](https://www.npmjs.com/).

## Install

To run the app locally, run ```npm install``` to install all of the dependencies.

This will install and browsersync and gulp-sass.

To install the project dependencies, run ```bower install```

This will install jQuery and Angular.

## Running the server/build process

To run the development server, and also compile SASS, run ```gulp.

The build process will watch the sass and html files and comile SASS when style changes made (then reload the browser) or just reload the browser if HTML changes are made.

### Server notes

On a production project, a Vagrant box would probably be built for the project, to match the live server, with browser snyc and so on running within the vagrant box - reducing host machine dependencies.


## TODO

Add unit tests.  Due to the time limit based on development and personal time limitations, unit tests haven't been written - however in standard development they would be.

