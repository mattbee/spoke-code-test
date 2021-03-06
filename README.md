# Spoke Law Front End Code Test

Coding test for Spoke Law front end developer position.

## Requirements

Project required [Node](https://nodejs.org/en/), [gulp](http://gulpjs.com/) and [npm](https://www.npmjs.com/).

## Install

To run the app locally, clone the repository at [https://github.com/mattbee/spoke-code-test](https://github.com/mattbee/spoke-code-test) 

Run ```npm install``` to install all of the dependencies.

This will install and browsersync and gulp-sass.

To install the project dependencies, run ```bower install```

This will install jQuery and Angular.

## Running the server/build process

To run the development server, and also compile SASS, run ```gulp```. This should open the browser at the url ''

The build process will watch the sass and html files and comile SASS when style changes made (then reload the browser) or just reload the browser if HTML changes are made.

### Server notes

On a production project, a Vagrant box would probably be built for the project, to match the live server, with browser snyc and so on running within the vagrant box - reducing host machine dependencies.


## TODO

Add unit tests.  Due to the time limit based on development and personal time limitations, unit tests haven't been written - however in standard development they would be.

### Other smaller tasks I didn't have time for that I would do under normal circumstances:

* Make the layouts more in line with design supplied - it's a bit rough and ready at the moment.
* Refactor the angular stuff, am sure some of it could be done nicer.
* Tidy up all of the CSS and make sure it's semantic and isn't a nasty bunch of styles thrown at a web page as it currently is.
* A whole load of other stuff... loads more could be done!!